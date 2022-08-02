const init = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
  	easing: 'linear',
  	cssEase: 'ease',
    dots: false,  
    arrows: false,  
    centerPadding: '0' 
};
let vflag;

jQuery(document).ready(function() {  
  jQuery('.header__icon--menu.header__icon--summary').click(function() {
    if(jQuery(this).attr('aria-expanded') == 'true') {
      jQuery('#cinfo-buttons').hide();
    } else {
      jQuery('#cinfo-buttons').show();
    }
  });
  
  jQuery('.section-wrapper').on('click','#ssw-page #ssw-fave-page-side-bar .ssw-fave-product-avatar',function() {
    location.href = jQuery(this).attr('href');
  });
});

jQuery('.btn-more').click(function() {
  jQuery('.cinfo-description').addClass('active');
});

jQuery('.btn-less').click(function() {
  jQuery('.cinfo-description').removeClass('active');
});

jQuery('.home-nav1 > .list-menu > li > a.list-menu__item').click(function() {
  if(jQuery(this).hasClass('box-close')) {
    jQuery(this).removeClass('box-close').addClass('box-open');
    jQuery(this).next().addClass('child-box-active');
  } else {
	jQuery(this).removeClass('box-open').addClass('box-close');
    jQuery(this).next().removeClass('child-box-active');
  }
});

jQuery('.home-nav1 > .list-menu > li > ul > li > a.list-menu__item').click(function() {
  if(jQuery(this).hasClass('box-close')) {
    jQuery(this).removeClass('box-close').addClass('box-open');
    jQuery(this).next().addClass('child-box-active');	
  } else {
	jQuery(this).removeClass('box-open').addClass('box-close');
    jQuery(this).next().removeClass('child-box-active');    
  }
});