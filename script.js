// Your JS code here.
<script>
    // Get all the images on the page
    const images = document.querySelectorAll(".image");

    // Function to add the active classname to the image when scrolled to
	  function checkSlide() {
    // select all images with classname "slide-in"
    var images = document.querySelectorAll(".slide-in");

    // loop through each image
    images.forEach(function(image) {
      // check if the image is in view
      var slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
      var imageBottom = image.offsetTop + image.height;
      var isHalfShown = slideInAt > image.offsetTop;
      var isNotScrolledPast = window.scrollY < imageBottom;

      // if the image is in view, add the active classname
      if (isHalfShown && isNotScrolledPast) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  }

  // pass checkSlide function to debounce function
  var slideInOnScroll = debounce(checkSlide);

  // listen for scroll event on the window
  window.addEventListener("scroll", slideInOnScroll);