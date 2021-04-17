window.onload = function(){
    // first make variables to access some html eements
    var overlay = document.getElementById("overlay");
    var closeMenu = document.getElementById("close-menu");

    document.getElementById("open-menu").addEventListener("click",function(){
        // to attach a css class animation to it
        overlay.classList.add('show-menu');
        document.getElementById('open-menu').style.display = "none";

    });

    closeMenu.addEventListener("click",function(){
        // to attach a css class animation to it
        overlay.classList.remove('show-menu');
        document.getElementById('open-menu').style.display = "block";

    });
   

   
   
    
    
    // var li = $('<li/>').html(link_1);
    // var ul = $('<ul/>');
    //         ul.append(li);
    //         $(".box").append(ul); 
//     // Add smooth scrolling to all links in navbar + footer link
//   $("a[href='#myPage']").on('click', function(event) {

//     // Prevent default anchor click behavior
//     event.preventDefault();

//     // Store hash
//     var hash = this.hash;

//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 900, function(){
   
//       // Add hash (#) to URL when done scrolling (default click behavior)
//       window.location.hash = hash;
//     });
//   });
  
//   // Slide in elements on scroll
//   $(window).scroll(function() {
//     $(".slideanim").each(function(){
//       var pos = $(this).offset().top;

//       var winTop = $(window).scrollTop();
//         if (pos < winTop + 600) {
//           $(this).addClass("slide");
//         }
//     });
//   });
   /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/



    const typewriter = new Typewriter('#typewriter', {
        loop: true,
    });
                
    typewriter.typeString('love to play around with code.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('am a Web Developer.')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('Designer.')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Enthusiast.')
    .pauseFor(2500)
    .start();
                  
    
}