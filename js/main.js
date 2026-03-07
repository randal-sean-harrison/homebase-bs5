$(document).ready(function () {
  writeImageToPage();

  // 1. Get and format the current date
  const dateOptions = { weekday: "long", month: "long", day: "numeric" };
  const today = new Date();
  $("#currentDate").text(today.toLocaleDateString("en-US", dateOptions));

  // 2. Handle the Google Search Submission
  $("#googleSearchForm").on("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const query = $("#searchInput").val().trim();

    if (query) {
      // Redirect to Google search results
      const googleSearchUrl =
        "https://www.google.com/search?q=" + encodeURIComponent(query);
      window.location.href = googleSearchUrl;
    } else {
      // Give a slight visual cue if they try to search nothing
      $("#searchInput").focus();
    }
  });

  // Link to elements with data-link attributes -------------------------------
  $(document).on("click", "[data-link]", function () {
    window.open($(this).attr("data-link"), $(this).attr("data-target"));
  });

  // Write an image to page function
  function writeImageToPage() {
    // Write an image to the Page --------------------------------------------------
    var numPhotos = 97;
    var randomNum = Math.floor(Math.random() * numPhotos) + 1;

    var randomImage = "url('img/" + randomNum + ".jpg')";
    console.log("Image " + randomNum + ".jpg written to page");

    $("body")
      .css("background-image", randomImage)
      .css("background-position", "center center")
      .css("background-repeat", "no-repeat")
      .css("background-attachment", "fixed")
      .css("background-color", "#343a40")
      .css("background-size", "cover");
    //  $("#photo-number").html(randomNum);
  }

  // Refresh the image for the background
  $(document).on("click", "#refresh-image", function () {
    writeImageToPage();
  });

  // Reset the search box ------------------------------------------------------------
  $("#reset-search-box").on("click", function () {
    // Clear the search field and place cursor back in input
    $("#search-field").val("").focus();
    $(this).addClass("d-none");
  });

  // Turn the input search box solid white or semi-transparent on focus / blur
  $("#search-field").on("focus", function () {
    $("#search")
      .removeClass("bga-white-transparent")
      .addClass("bg-white-opaque");
    $("#go-button").css("opacity", "1");
  });

  $("#search-field").on("blur", function () {
    $("#search")
      .removeClass("bg-white-opaque")
      .addClass("bg-white-transparenta");
    $("#go-button").css("opacity", "1");
  });

  // Show or hide the reset search button
  $("#search-field").on("keyup", function () {
    if ($(this).val() !== "") {
      $("#reset-search-box").removeClass("d-none");
    } else {
      $("#reset-search-box").addClass("d-none");
    }
  });

  // Clear the clear button on form submit
  $(window).on("blur", function () {
    $("#reset-search-box").addClass("d-none");
    $("#search-field").val("");
  });
});
