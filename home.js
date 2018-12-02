$(document).ready(function(){

$(".toggle-click").click(function(){
	$(".brainsterBox").hide();
    $(".hidden-list").toggle();
});

$(".fa-question").click(function(){
	$(".hidden-list").hide();
	$(".brainsterBox").toggle(700);
});

$(".start-btn").click(function(){
	$(".brainsterBox").hide(700);
});

$(".card-border").hover(function(){
    $(this).find('.show-div').show();
    $(this).find(".image-small").css("width","30%");

},function(){
    $(this).find('.show-div').hide();
     $(this).find(".image-small").css("width","50%");
});

 //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


energyItems = $('.energyitem').length;
$('#energy').html("( "+energyItems+" )");
inovationItems= $('.inovationitem').length;
$('#innovation').html("( "+inovationItems+" )");   
leaderItems= $('.leaderitem').length;
$('#leadership').html("( "+leaderItems+" )");
actionItems= $('.actionitem').length;
$('#action').html("( "+actionItems+" )");
teamItems= $('.teamitem').length;
$('#team').html("( "+teamItems+" )");
allItems= $('.all').length;
$('.badgeAll').html("( "+allItems+" )");
});