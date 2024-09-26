// Animate Smooth Scroll
$('#view-work').on('click', function () {
       const images = $('#images').position().top;
       console.log("clicked")
       $('html, body').animate(
              {
                     scrollTop: images
              },
              900
       );
});
