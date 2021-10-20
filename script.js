setTimeout(function() {
  document.getElementById("loading").classList.add("hide")}, 3800
)

// Toggle div in content
$("#toggle-writing").click(function () {
  $("#toggled-writing").toggle("slow", function () {
    // Animation complete.
  });
});

$("#toggle-art").click(function () {
  $("#toggled-art").toggle("slow", function () {
    // Animation complete.
  });
});


$("#toggle-contact").click(function () {
  $("#toggled-contact").toggle("slow", function () {
    // Animation complete.
  });
});
