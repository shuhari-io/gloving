  var lesson_data = { lessons: [
    { 
      id: "starting",
      title: "Getting Started",
      playlist: "PLhIoh51VRpZDJSmewrmJWw37O7knImjxO",
      body: "A quick introduction to some of the concepts and hardware associated with gloving."
    },
    {
      id: "figure8",
      title: "Figure 8's",
      playlist: "PLhIoh51VRpZAEs8HKoChgWbbhLO0S6ROM",
      body: "Introduces the figure 8 move.  A beginning for liquid styles and a great way to transition."
    },
    {
      id: "rolls",
      title: "Finger Rolls",
      playlist: "PLhIoh51VRpZDTvEuhsZKpxUTk9O7ZZLFx",
      body: "Finger rolls are one of the most important elements of gloving to get down.  Pretty much everything builds off of them, so they're crucial to get down."
    },
    {
      id: "liquid",
      title: "Liquid",
      playlist: "PLhIoh51VRpZBUFueP-XfQJQIU7H3EEJX7",
      body: "Liquid is a way of moving your hands so they look like water.  Getting this down will help the fluidity of your shows."
    },
    {
      id: "stacking",
      title: "Stacking",
      playlist: "PLhIoh51VRpZDwa05X50f98HOwAeHBdn1O",
      body: "Stacking is a good way to transition and break up shows."
    },
    {
      id: "impact",
      title: "Impact",
      playlist: "PLhIoh51VRpZAyWVotZnVcGFinnArlG_VP",
      body: "Impact moves will help you break up your light shows and blow your viewer away."
    },
    {
      id: "flails",
      title: "Flails",
      playlist: "PLhIoh51VRpZB5FW94fPeAXXhHnmSBS1km",
      body: "Flails are cool. Learn how to use them well and they can add a little spice."
    },
    {
      id: "tutting",
      title: "Tutting",
      playlist: "PLhIoh51VRpZAABQ8fRgSHTpbRZdNAS33p",
      body: "Walk like an Egyptian. Tutting is a way of making sharp angles using your hands and arms and often moving at right angles in a mechanical fasion."
    },
    {
      id: "connection",
      title: "Finger Connection",
      playlist: "PLhIoh51VRpZADErB3NYKtCxKuIIk2Cq6a",
      body: "Connecting your fingers during your light shows can make awesome visual illusions for your viewer."
    },
    {
      id: "circles",
      title: "Circles",
      playlist: "PLhIoh51VRpZDKRDg1FiB6yCcpVADjJ3gV",
      body: "Circles allow you to make a continuous circular pattern that doesn't have breaks and looks ballin."
    },
    {
      id: "whips_tunnels",
      title: "Whips/Tunnels",
      playlist: "PLhIoh51VRpZCItwD34B49zCvLWkKvEveN",
      body: "Whips/Tunnels are circular moves that move towards and away from the viewer and will generally blow their mind."
    },
    {
      id: "partner",
      title: "Partner Sets",
      playlist: "PLhIoh51VRpZAZ0cbPOJ6ePHu6gthNIblN",
      body: "What's better than two hands in your face??  Four hands in your face.  Learn how to do it right."
    },
    {
      id: "sequences",
      title: "Sequences",
      playlist: "PLhIoh51VRpZDZnHdZ3uayc7fV-XN86qgJ",
      body: "Some cool sequences to help you practice."
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