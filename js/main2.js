var scrolled;
$(document).ready(function(){

    if(! $('html').hasClass('cssvwunit')){
        headerHeight();
    }
    $('.scroll-down').click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top - $('header').outerHeight()
        }, 1000);
    });

    $('.menu a').click(function(e){
         e.preventDefault();
       
        if($(this).attr('data-section') == 'home'){
            scrollMe('home');
              $('li.active').removeClass('active');
            $('.home').parent('li').addClass('active');
        }else{
            $('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
        scrollMe($(this).attr('data-section')); 
        }
       

    });

    $('a.details').click(function(e){
        console.log('click');
        e.preventDefault();
        $(this).siblings('.more-info').slideToggle();
    });

    $('.mobile-button').click(function(){
        $('header').toggleClass('show');

    });

    $('.over').addClass('fade');

});

$(window).scroll(function(){
    scrolled = jQuery(window).scrollTop();
   if($(window).scrollTop() > 0){
       $('body').addClass('scrolling');
   }else{
       $('body').removeClass('scrolling');
   }

   parallax();

   $('menu')
   .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
   function(e){
    // do something here
        // $('header').removeClass('show2');
    });

});

$(window).resize(function(){
    if(! $('html').hasClass('cssvwunit')){
        headerHeight();
    }
});

$(window).load(function(){
      if(! $('html').hasClass('cssvwunit')){
        headerHeight();
    }
});

function scrollMe(element){
    if(element == 'home'){
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        $('header').removeClass('show');
    }else{
        $('html, body').animate({
            scrollTop: $('#'+ element).offset().top - $('header').outerHeight()
        }, 700);
        $('header').removeClass('show');
    }
   


}


function parallax(element){
// 	window.requestAnimationFrame(function() {
// 		var parH = winTop/3;
// 		parH = parH.toFixed();
// 		element.css('transform', 'translate3d(0, ' + parH +'px, 0)').addClass('parallax');
// 	});
// }

  if(jQuery(window).width() > 768){
		window.requestAnimationFrame(function() {
			var scrolled2 = .75-(scrolled/500);
			var parH = scrolled/3;
			parH = parH.toFixed();
			jQuery('.jumbotron').css('transform', 'translate3d(0, ' + parH +'px, 0)').addClass('parallax');
			
		});
	}
}

function headerHeight(){
    $('.jumbotron').height($(window).height());
}