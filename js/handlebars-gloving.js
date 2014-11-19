  var lesson_data = { lessons: [
    { 
      id: "warmup",
      title: "Warmup and Explanations",
      playlist: "PLhIoh51VRpZDl3t7hZ91pgNndEZMiwWHZ",
      body: "This series of videos takes you through some warmups, shows you how to hold poi, and defines some basic terminology."
    },
    {
      id: "fundamentals",
      title: "Spinning Fundamentals",
      playlist: "PLhIoh51VRpZDhR3EQrx7MM5aHntOIMTKV",
      body: "These videos are the foundations for spinning poi. First, you'll learn how to have a little fun with your poi. Then, you will learn about the different modes of spinning, how to cross the poi in front of you, and how to control your planes.  All fundamentals for flowing freely with poi."
    },
    {
      id: "turning",
      title: "Turning with Poi and Reels",
      playlist: "PLhIoh51VRpZCZnVprkU7hR4YsQzauxVM4",
      body: "These videos introduce turning with your poi and a move called reels.  This will allow you to change the direction you face as you spin poi allowing for greater expression and flexibility of movement in your flow."
    },
    {
      id: "weaves",
      title: "Basic Weaves",
      playlist: "PLhIoh51VRpZDndpCWmotQtkpFjL5rpM9Y",
      body: "These videos introduce weaves of various beats. A foundational move for working in same direction."
    },
    {
      id: "butterfly",
      title: "Butterfly",
      playlist: "PLhIoh51VRpZCvf8jVFevtxvtY-hd_nk0G",
      body: "These videos introduce a move called the Butterfly.  A foundational move for opposite direction movements."
    },
    {
      id: "stalls",
      title: "Stalls",
      playlist: "PLhIoh51VRpZC-lRR7oofSFNvlkYdQ47RQ",
      body: "These videos introduce stalls.  Stalls allow you to quickly pause and potentially switch the spin direction of your poi."
    },
    {
      id: "buzzsaw",
      title: "Buzzsaw",
      playlist: "PLhIoh51VRpZBYR1-s5sB14jjxhE6jhI6z",
      body: "These videos introduce the buzzsaw and variations. Buzzsaw opens up many inside the arm moves and can have a beautiful visual effect. And, the basic buzzsaw isn't to tricky!"
    },
    {
      id: "flowers",
      title: "Flowers",
      playlist: "PLhIoh51VRpZAvph0xdo3mjG-d6jqw1RnH",
      body: "These videos introduce you to flowers.  Well, mostly Drex does.  Flowers are a wonderful way to free up your spinning and your body with beautiful expansive patterns."
    },
    {
      id: "behindtheback",
      title: "Behind the Back",
      playlist: "PLhIoh51VRpZCrOv11_nOtnDkUsZrIZv4w",
      body: "These videos show you how to build up to behind the back weaves and waistwraps. Being able to spin behind your back will allow you to turn any which way, and looks hella cool!"
    },
    {
      id: "meltdown",
      title: "Meltdown",
      playlist: "PLhIoh51VRpZDGsh2ielrWACZSUkobt2qT",
      body: "Videos about the Meltdown and variations. The meltdown can be a great transition move and it just looks freakin cool."
    },
    {
      id: "isolations",
      title: "Isolations",
      playlist: "PLhIoh51VRpZBqrn0NX4pn0x1Ah17sdFq6",
      body: "These videos demonstrate exercises to build up to Isolations and show some variations.  Not gonna lie, Isolations are hard as hell to nail but really cool looking. Well worth the effort."
    }
  ]};

  var source = $("#lesson-template").html();
  var template = Handlebars.compile(source);
  var html = template(lesson_data);

  $("#lessons-placeholder").html(html);

  var source = $("#nav-template").html();
  var template = Handlebars.compile(source);
  var html = template(lesson_data);

  $("#nav-placeholder").html(html);