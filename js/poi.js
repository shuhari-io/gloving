// $lesson: a jQuery object of a '.lesson' div
//          it must have id like "panel_warmup"
// status:  string, either "not-started", "in-progress",
//          or "completed"
showLabel = function($lesson, status) {
  var lesson_id = $lesson.attr('id')

  $lesson.find(".not-started").hide()
  $lesson.find(".in-progress").hide()
  $lesson.find(".completed").hide()

  $lesson.find("." + status).show()

  $('.navigation').find('[href*="' + lesson_id + '"]').find('.badge')
    .removeClass('not-started')
    .removeClass('in-progress')
    .removeClass('completed')
    .addClass(status);

  $lesson.find('.btn-success').hide();
  $lesson.find('.btn-danger').hide();
  if(status == "completed") {
    $lesson.find('.btn-danger').show();
  } else {
    $lesson.find('.btn-success').show();
  }
}


$( document ).ready(function() {  

  // Get user id from localstorage, or create a new one.
  // Send that user id to segment.com for tracking.
  var user_id = localStorage.getItem('shuhari_user_id');
  if (!user_id)
  {
    user_id = Math.floor((1 + Math.random()) * 10000000);
    localStorage.setItem('shuhari_user_id', user_id);
  }

  analytics.identify(user_id);

  // This function runs through each panel 
  // and updates the badge according to the local storage
  $(".lesson").each(function( index ) {
    var lesson_id = $(this).attr('id')
    var stored_val = localStorage.getItem(lesson_id)
    console.log (lesson_id + ": " + stored_val)

    if (stored_val == "completed")
    {
      showLabel($(this), "completed");
    }
    if (stored_val == "in_progress")
    {
      showLabel($(this), "in-progress");
    }
    if (!stored_val)
    {
      showLabel($(this), "not-started");
    }    
  });

  $(".btn-success").click(function( event ) { 
    var lesson = $(this).closest(".lesson")

    var lesson_id = lesson.attr('id')
    localStorage.setItem(lesson_id, "completed")

    showLabel(lesson, "completed");

    $('html, body').stop().animate({
        scrollTop: lesson.next().offset().top
    }, 1500, 'easeInOutExpo');

    analytics.track('Marked lesson complete', {
      lesson: lesson_id.slice(6)
    });
  });

  $(".btn-danger").click(function( event ) { 
    var lesson = $(this).closest(".lesson")

    var lesson_id = lesson.attr('id')
    localStorage.removeItem(lesson_id)

    showLabel(lesson, "not-started");

    analytics.track('Cleared lesson', {
      lesson: lesson_id.slice(6)
    });
  });


  $("#more-info").on('click', function () {
    analytics.track('Link to Shuhari homepage clicked');
  });

  $navigation = $('.navigation');
  $navigation.affix({
    offset: {
      top: function () {
        var offsetTop      = $navigation.offset().top;
        var sideBarMargin  = parseInt($navigation.children(0).css('margin-top'), 10);
        var topMargin      = parseInt($navigation.css('margin-top'), 10);
        return (this.top = offsetTop - topMargin - 70);
      },
      bottom: function () {
        var docHeight = $(document).outerHeight(true);
        var rowTop = $navigation.closest('.row').offset().top;
        var rowHeight = $navigation.closest('.row').outerHeight(true);
        return (this.bottom = docHeight - rowTop - rowHeight)
      }
    }
  });

  var resizeNavigation = function() {
    $navigation.width($navigation.parent().width());
  }

  $navigation.on('affix.bs.affix', function(e) {
    resizeNavigation();
  });

  $(window).resize(function() {
    resizeNavigation();
  });

});


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  $('iframe.player').each(function(index) {
    $(this).attr('id', 'player' + index);
    player = new YT.Player('player' + index, {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var lesson = $(event.target.d).closest(".lesson")

    var lesson_id = lesson.attr('id')
    if (localStorage.getItem(lesson_id) != "completed") {
      localStorage.setItem(lesson_id, "in_progress");

      showLabel(lesson, "in-progress");
    }

    analytics.track('Opened lesson', {
      lesson: lesson_id.slice(6)
    });
  }
}
