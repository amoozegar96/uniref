if ($(".carousel").length) {
    $('.carousel').carousel({
        wrap: true,
        touch: true,
        keyboard: true,
        interval: 3000,
        next: false
    });
}
$(window).scroll(function () {
    var fixmenu = $(window).scrollTop();
    if (fixmenu <= $(".bottom-header").offset().top - 20) {
        $(".header").removeClass("fix-menu-large")
    }
    if (fixmenu >= $(".bottom-header").offset().top - 20) {
        $(".header").addClass("fix-menu-large")
    }
});

$(".icon-menu-small").click(function (e) {
    $(".menu-items").css({right: 0});
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});

$(".black-page , .close-menu i").click(function () {
    $(".menu-items").css({right: -300});
    $(".black-page").fadeOut();
    $("html").removeAttr("style");
});

$(".menu-items ul li div i.fas.fa-plus").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
});


$(window).on('ready load resize change', function () {
    if ($(".gallery .row.d-flex").length) {
        var rtl_or_ltr = true;
        if ($(".gallery .row.d-flex").parents(".rtl").length) {
            rtl_or_ltr = false;
        }
        var option_isotope = {
            originLeft: rtl_or_ltr,
            itemSelector: '.gallery-isotope',
            percentPosition: true,
            filter: $(".gallery-sidebar-content li.active").attr("data-filter"),
            masonry: {
                columnWidth: '.grid-sizer'
            }
        };
        $(".gallery .row.d-flex").isotope(option_isotope);
        $(".gallery .row.d-flex").isotope('destroy').isotope(option_isotope);
    }
});
$(".gallery-sidebar-content li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".gallery .row.d-flex").isotope({filter: $(this).attr("data-filter")})
});
//==================
// chart
//==================

$('[data-chart="3d-stacked"]').each(function(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create($(this).attr("id"), am4charts.XYChart3D);

// Add data
    chart.data = [{
        "country": "USA",
        "year2017": 3.5,
        "year2018": 4.2
    }, {
        "country": "UK",
        "year2017": 1.7,
        "year2018": 3.1
    }, {
        "country": "Canada",
        "year2017": 2.8,
        "year2018": 2.9
    }, {
        "country": "Japan",
        "year2017": 2.6,
        "year2018": 2.3
    }, {
        "country": "France",
        "year2017": 1.4,
        "year2018": 2.1
    }, {
        "country": "Brazil",
        "year2017": 2.6,
        "year2018": 4.9
    }, {
        "country": "Russia",
        "year2017": 6.4,
        "year2018": 7.2
    }, {
        "country": "India",
        "year2017": 8,
        "year2018": 7.1
    }, {
        "country": "China",
        "year2017": 9.9,
        "year2018": 10.1
    }];

// Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
        return text + "%";
    });

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText = "نماد رشد در سال  {category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText = "نماد رشد در سال {category} (2017): [bold]{valueY}[/]";
});
$('[data-chart="chart"]').each(function(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end
    console.log($(this).attr("id"));
// Create chart instance
    var chart = am4core.create($(this).attr("id"), am4charts.XYChart);

// Enable chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

// Enable scrollbar
//     chart.scrollbarX = new am4core.Scrollbar();

// Add data
    chart.data = [{
        "date": "2012-01-01",
        "value": 8
    }, {
        "date": "2012-01-02",
        "value": 10
    }, {
        "date": "2012-01-03",
        "value": 12
    }, {
        "date": "2012-01-04",
        "value": 14
    }, {
        "date": "2012-01-05",
        "value": 11
    }, {
        "date": "2012-01-06",
        "value": 6
    }, {
        "date": "2012-01-07",
        "value": 7
    }, {
        "date": "2012-01-08",
        "value": 9
    }, {
        "date": "2012-01-09",
        "value": 13
    }, {
        "date": "2012-01-10",
        "value": 15
    }, {
        "date": "2012-01-11",
        "value": 19
    }, {
        "date": "2012-01-12",
        "value": 21
    }, {
        "date": "2012-01-13",
        "value": 22
    }, {
        "date": "2012-01-14",
        "value": 20
    }, {
        "date": "2012-01-15",
        "value": 18
    }, {
        "date": "2012-01-16",
        "value": 14
    }, {
        "date": "2012-01-17",
        "value": 16,
        "opacity": 0
    }, {
        "date": "2012-01-18",
        "value": 18
    }, {
        "date": "2012-01-19",
        "value": 17
    }, {
        "date": "2012-01-20",
        "value": 15
    }, {
        "date": "2012-01-21",
        "value": 12
    }, {
        "date": "2012-01-22",
        "value": 10
    }, {
        "date": "2012-01-23",
        "value": 8
    }];

// Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "Date";
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.tooltipDateFormat = "MMM dd, yyyy";
    dateAxis.dateFormats.setKey("day", "dd");

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.tooltipText = "{date}\n[bold font-size: 17px]مقدار: {valueY}[/]";
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeDasharray = 3;
    series.strokeWidth = 2
    series.strokeOpacity = 0.3;
    series.strokeDasharray = "3,3"

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.strokeWidth = 2;
    bullet.stroke = am4core.color("#fff");
    bullet.setStateOnChildren = true;
    bullet.propertyFields.fillOpacity = "opacity";
    bullet.propertyFields.strokeOpacity = "opacity";

    var hoverState = bullet.states.create("hover");
    hoverState.properties.scale = 1.7;

    function createTrendLine(data) {
        var trend = chart.series.push(new am4charts.LineSeries());
        trend.dataFields.valueY = "value";
        trend.dataFields.dateX = "date";
        trend.strokeWidth = 2
        trend.stroke = trend.fill = am4core.color("#c00");
        trend.data = data;

        var bullet = trend.bullets.push(new am4charts.CircleBullet());
        bullet.tooltipText = "{date}\n[bold font-size: 17px]مقدار: {valueY}[/]";
        bullet.strokeWidth = 2;
        bullet.stroke = am4core.color("#fff");
        bullet.circle.fill = trend.stroke;

        var hoverState = bullet.states.create("hover");
        hoverState.properties.scale = 1.7;

        return trend;
    };

    createTrendLine([
        { "date": "2012-01-02", "value": 10 },
        { "date": "2012-01-19", "value": 17 }
    ]);



// Initial zoom once chart is ready
//     lastTrend.events.once("datavalidated", function(){
//         series.xAxis.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
//     });
});
$('[data-chart="simple-column-chart"]').each(function(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create($(this).attr("id"), am4charts.XYChart);

// Add data
    chart.data = [{
        "country": "USA",
        "visits": 2025
    }, {
        "country": "China",
        "visits": 1882
    }, {
        "country": "Japan",
        "visits": 1809
    }, {
        "country": "Germany",
        "visits": 1322
    }, {
        "country": "UK",
        "visits": 1122
    }, {
        "country": "France",
        "visits": 1114
    }, {
        "country": "India",
        "visits": 984
    }, {
        "country": "Spain",
        "visits": 711
    }, {
        "country": "Netherlands",
        "visits": 665
    }, {
        "country": "Russia",
        "visits": 580
    }, {
        "country": "South Korea",
        "visits": 443
    }, {
        "country": "Canada",
        "visits": 441
    }, {
        "country": "Brazil",
        "visits": 395
    }];

// Create axes

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
        }
        return dy;
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
});

$('[data-chart="column-and-line-mix"]').each(function(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create($(this).attr("id"), am4charts.XYChart);

// Data for both series
    var data = [ {
        "year": "2009",
        "income": 23.5,
        "expenses": 21.1
    }, {
        "year": "2010",
        "income": 26.2,
        "expenses": 30.5
    }, {
        "year": "2011",
        "income": 30.1,
        "expenses": 34.9
    }, {
        "year": "2012",
        "income": 29.5,
        "expenses": 31.1
    }, {
        "year": "2013",
        "income": 30.6,
        "expenses": 28.2,
        "lineDash": "5,5",
    }, {
        "year": "2014",
        "income": 34.1,
        "expenses": 32.9,
        "strokeWidth": 1,
        "columnDash": "5,5",
        "fillOpacity": 0.2,
        "additional": "(projection)"
    } ];

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 30;

    /* Create value axis */
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    /* Create series */
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Income";
    columnSeries.dataFields.valueY = "income";
    columnSeries.dataFields.categoryX = "year";

    columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Expenses";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "year";

    lineSeries.stroke = am4core.color("#fdd400");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    var circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;

    chart.data = data;
});

$('[data-chart="variable-radius-pie-chart"]').each(function(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
    var chart = am4core.create($(this).attr("id"), am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
        {
            country: "بقیه دانشگاه ها",
            value: 260
        },
        {
            country: "دانشگاه پیام نور",
            value: 230
        },
        {
            country: "دانشگاه تربیت مدرس",
            value: 200
        },
        {
            country: "دانشگاه آزاد اسلامی واحد علوم",
            value: 165
        },
        {
            country: "دانشگاه شهید بهشتی",
            value: 139
        },
        {
            country: "دانشگاه صنعتی امیرکبیر",
            value: 128
        }
    ];

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;
    series.hiddenState.properties.endAngle = -90;
});
//==================
// Map
//==================
$(function () {
    $('.iran-map .map .province path').click(function () {
        window.location.href = $("." + $(this).attr('class') + " a").attr("href");
    });
});
//==================
// custom scroll
//==================
jQuery(document).ready(function() {
    $('.scrollbar-inner').scrollbar();
})
//==================
// page loader
//==================

$(".load-page > div *").show();
$(window).on("load", function () {
    setTimeout(function () {
        if ($(".load-page")[0]) {
            $(".load-page").fadeOut();
            $(".load-page > div *").addClass("stop-animation");
            $("html,body").css({
                overflow: "",
                width: ""
            });
        }
    }, 1000)
});
//==================
// Parallax
//==================
$(window).scroll(function(){
    var self = $(this);
    var parallax_distance = (self.scrollTop() / 1.5);
    if(self.scrollTop() > ($("[data-parallax]").offset().top - $("header").outerHeight(true))){
        $("[data-parallax] .parallax-image").css("background-position-y",parallax_distance + "px");
    }
})