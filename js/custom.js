// $( document ).ready(function() {
//     $('.slider').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 1
//     });
// });
$(document).ready(function(){

    var liHeader = '.plans .container div ul li:first-child';

    $('.bxslider').bxSlider(

    );

    $('a.buy-now').hover(
        function(){
            $(liHeader).removeClass('active');
            $(this).parent('li').parent('ul').find('li:first-child').addClass('active');
    },
        function(){
            $(liHeader).removeClass('active');
        }
    );

        $("#menu-icon").on("click", function(){
            $("nav .menu").slideToggle();
        });

});
