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

var filter = {
            category: {
                filters: [],
                all: true,
            },
            timeStamp: {
                filters: [],
                all: true,
            },
            groupSize: {
                filters: [],
                all: true,
            }
        }
        $(".filter").on("click", function() {
            var filterType = $(this).attr("data-type");
            var filterName = $(this).attr("data-filter");
            if (filterName == 'all') {
                filter[filterType].filters = [];
                filter[filterType].all = true;
                $(".filter[data-type='" + filterType + "']").removeClass("btn-success")
                $(".filter[data-type='" + filterType + "'][data-filter='all']").addClass("btn-success")
            } else {
                var isActive = false;
                if (filter[filterType].filters.indexOf(filterName) > -1) {
                    isActive = true;
                }
                if (isActive) {
                    filter[filterType].filters.splice(filter[filterType].filters.indexOf(filterName), 1)
                    $(this).removeClass("btn-success")
                } else {
                    filter[filterType].filters.push(filterName)
                    $(this).addClass("btn-success")
                }
                if (filter[filterType].filters.length > 0) {
                    filter[filterType].all = false;
                    $(".filter[data-type='" + filterType + "'][data-filter='all']").removeClass("btn-success")
                } else {
                    filter[filterType].all = true;
                    $(".filter[data-type='" + filterType + "'][data-filter='all']").addClass("btn-success")
                }
            }
            $(".filterItem").each(function() {
                var show = true;
                var category = $(this).attr('data-category').split(" ");
                var timeStamp = $(this).attr('data-timeStamp').split(" ");
                var groupSize = $(this).attr('data-groupSize').split(" ");
                show = checkFiltering(filter.category, show, category);
                show = checkFiltering(filter.timeStamp, show,  timeStamp);
                show = checkFiltering(filter.groupSize, show,   groupSize);
                if (show) {
                    $(this).show(300)
                } else {
                    $(this).hide(300)
                }
            })
        })
        function checkFiltering(filterObject, show, filters) {
            if (!filterObject.all) {
                var multichoice = false;
                for (var j = 0; j < filters.length; j++) {
                    if (filterObject.filters.indexOf(filters[j]) > -1) {
                        multichoice = true;
                    }
                }
                if (show) {
                    show = multichoice;
                }
            }
return show;
        }