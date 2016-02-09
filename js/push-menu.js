// Needs latest version of jQuery to run
$(function(){
    $('body').removeClass('noscript');
    
    $('.toggle-btn, .close-btn').click(function(){
        toggleNav();
    });
});

function toggleNav() {
    if($('.site-wrapper').attr('data-state') == 'slide-closed'){
     //display nav when closed
        $('.site-wrapper').attr('data-state','slide-open');
    }else{
     //hide the nav when open
     $('.site-wrapper').attr('data-state','slide-closed');
    }
    
}
