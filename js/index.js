jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
    }
    
    // Swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
    });

    var swiperMain = new Swiper('.swiper-main-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiperServies = new Swiper('.services-swiper-container', {
        effect: 'coverflow',
        initialSlide: 1,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
        },
        loop: false,
    });
});

$("#section01, #section02, #section03, #section04, #section05").click(function(){
    var height = $(window).height();
    var hc = $(window).scrollTop()+height
    
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+height +'px'
        }, 400)   
});


$("#scroll").click(function(){
    
    var height = $(window).height();
    var hc = $(window).scrollTop()+height
    if(hc <= 2*height){
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+height +'px'
        }, 800)
    }
    else{
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+height +'px'
        }, 800)
        $("#scroll").fadeOut();
        $("#scrollTop").fadeIn();
    }
});

$(".toggle-up").click(function(){
    $('html,body').animate({
        scrollTop:0
    },400)
});

