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