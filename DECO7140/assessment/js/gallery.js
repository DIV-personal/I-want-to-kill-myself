console.log("Gallery page is loaded");

// Scroll functionality for 'Back to Top' button
window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top");
  // Show button if scrolled down 100px from the top
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Scroll back to the top when 'Back to Top' button is clicked
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
