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

function formatNumbers(value) {
    var persian = {
        0: '۰',
        1: '۱',
        2: '۲',
        3: '۳',
        4: '۴',
        5: '۵',
        6: '۶',
        7: '۷',
        8: '۸',
        9: '۹'
    };
    var res = String(value);
    var list = res.match(/[0-9]/g);
    if (list != null && list.length != 0) {
        for (var i = 0; i < list.length; i++)
            res = res.replace(list[i], persian[list[i]]);
    }
    return res;
}

function formatBalloon(item) {
    var res = formatNumbers(item.category) + ': <b>' + formatNumbers(item.values.value) + '</b>'
    return res;
}


// Create chart instance
if ($("#gauge-bands").length) {

    function am4themes_myTheme(target) {
        if (target instanceof am4core.ColorSet) {
            target.list = [
                am4core.color("#29b6b6"),
                am4core.color("#875692"),
                am4core.color("#f38600"),
                am4core.color("#3b85ca"),
            ];
        }
    }

    /* Apply it */
    am4core.useTheme(am4themes_myTheme);

// Themes begin
// Themes end
    var chart = am4core.create("gauge-bands", am4charts.RadarChart);
// chart.align = 'left';
// chart.rtl = true;
// Add data
    chart.data = [{
        "category": "(دانشگاه پیام  نور (۴ درصد",
        "value": 80,
        "full": 100,
    }, {
        "category": "(موسسه غیر انتفاهی (۵ درصد",
        "value": 35,
        "full": 100,
    }, {
        "category": "(دانشگاه دولتی (۵۳ درصد",
        "value": 92,
        "full": 100,
    }, {
        "category": "(دانشگاه آزاد (33درصد",
        "value": 68,
        "full": 100,
    }];

// Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

// Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

// Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.align = 'right';
    categoryAxis.ex = 100;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
        return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

// Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.radarColumn.cornerRadius = 20;
    series2.columns.template.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    });

// Add cursor
// chart.cursor = new am4charts.RadarCursor();
}


function am4themes_myThemee(target) {
    if (target instanceof am4core.ColorSet) {
        target.list = [
            am4core.color("#85c5e3")
        ];
    }
}

/* Apply it */

if ($("#gauge-bands2").length) {
    am4core.useTheme(am4themes_myThemee);
// Themes end

// Create chart instance
    var chart2 = am4core.create("gauge-bands2", am4charts.XYChart);

// Add data
    chart2.data = [{
        "country": "1385",
        "visits": 900
    }, {
        "country": "1386",
        "visits": 800
    }, {
        "country": "1387",
        "visits": 700
    }, {
        "country": "1388",
        "visits": 600
    }, {
        "country": "1389",
        "visits": 500
    }, {
        "country": "1390",
        "visits": 400
    }, {
        "country": "1391",
        "visits": 300
    }, {
        "country": "1392",
        "visits": 200
    }, {
        "country": "1393",
        "visits": 50
    }, {
        "country": "1394",
        "visits": 40
    }, {
        "country": "1395",
        "visits": 30
    }, {
        "country": "1396",
        "visits": 29
    }, {
        "country": "1397",
        "visits": 15
    }];

// Create axes

    var categoryAxis2 = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis2.dataFields.category = "country";
    categoryAxis2.renderer.grid.template.location = 0;
    categoryAxis2.renderer.minGridDistance = 30;


    var valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series2 = chart2.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "visits";
    series2.dataFields.categoryX = "country";
    series2.name = "Visits";
    series2.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series2.columns.template.fillOpacity = .8;

    var columnTemplate2 = series2.columns.template;
    columnTemplate2.strokeWidth = 2;
    columnTemplate2.strokeOpacity = 1;
}
$('[data-chart="3d-stacked"]').each(function () {
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
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
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
$('[data-chart="chart"]').each(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end
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
        {"date": "2012-01-02", "value": 10},
        {"date": "2012-01-19", "value": 17}
    ]);


// Initial zoom once chart is ready
//     lastTrend.events.once("datavalidated", function(){
//         series.xAxis.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
//     });
});
$('[data-chart="simple-column-chart"]').each(function () {
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

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 0;
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

$('[data-chart="column-and-line-mix"]').each(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create($(this).attr("id"), am4charts.XYChart);

// Data for both series
    var data = [{
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
    }];

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

$('[data-chart="variable-radius-pie-chart"]').each(function () {
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


$('[data-chart="radial-line-graph"]').each(function () {
// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    /* Create chart instance */
    var chart = am4core.create($(this).attr("id"), am4charts.RadarChart);

    /* Add data */
    chart.data = [{
        "country": "توسعه پایدار",
        "litres": 501
    }, {
        "country": "ایران",
        "litres": 301
    }, {
        "country": "کارآفرینی",
        "litres": 266
    }, {
        "country": "آلودگی هوا",
        "litres": 1009
    }, {
        "country": "گردشگری",
        "litres": 139
    }, {
        "country": "توسعه",
        "litres": 336
    }, {
        "country": "اقتصاد مقاومتی",
        "litres": 290
    }, {
        "country": "معماری",
        "litres": 325
    }, {
        "country": "عملکرد",
        "litres": 40
    }, {
        "country": "مدیریت دانش",
        "litres": 39
    }, {
        "country": "سنجش از دور",
        "litres": 900
    }, {
        "country": "خسشکسالی",
        "litres": 253
    }, {
        "country": "تهران",
        "litres": 152
    }, {
        "country": "ارزیابی عملکرد",
        "litres": 16
    }, {
        "country": "gis",
        "litres": 465
    }, {
        "country": "مدیریت شهری",
        "litres": 646
    }, {
        "country": "بهره وردی",
        "litres": 983
    }];

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
    valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

    /* Create and configure series */
    var series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Sales";
    series.strokeWidth = 3;

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
jQuery(document).ready(function () {
    if ($('.scrollbar-inner').length) {

        $('.scrollbar-inner').scrollbar();
    }
})
//==================
// page loader
//==================

$(window).on("load", function () {
    setTimeout(function () {
        if ($(".load-page")[0]) {
            $(".load-page > div *").addClass("stop-animation");
            $(".load-page .loading").hide();
            $(".load-page").fadeOut();
            $("html,body").css({
                overflow: "",
                width: ""
            });
        }
    }, 150);
});
//==================
// Parallax
//==================
$(window).scroll(function () {
    if ($("[data-parallax]").length) {
        var self = $(this);
        var parallax_distance = (self.scrollTop() / 1.5);
        if (self.scrollTop() > ($("[data-parallax]").offset().top - $("header").outerHeight(true))) {
            $("[data-parallax] .parallax-image").css("background-position-y", parallax_distance + "px");
        }
    }
});


//==================
// sidebar fix
//==================
$('[data-sidebarfix]').each(function () {
    var $this = $(this);
    $this.sidebarFix({
        frame: $($this.parents(".landing-content")),
        topBuffer: 80
    });
});
$(document).on("click", ".landing-sidebar li a", function (e) {
    if ($($(this).attr("href")).find(".title-landing-item").length) {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top - ($(this).parents("body").find(".header .slogan").height() + $(this).parents("body").find(".header .bottom-header").height() + 25)
        }, 500);
    } else {

        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top - ($(this).parents("body").find(".header .slogan").height() + $(this).parents("body").find(".header .bottom-header").height())
        }, 500);
    }
    e.stopPropagation();
    e.preventDefault();
});
$(window).on('ready load resize orientationchange', function () {
    var $this_size = $(this);

    if ($this_size.width() >= 992) {
        $(window).scroll(function () {
            var $this_scroll = $(this);
            $(".landing-item").each(function () {
                if ($(this).find(".title-landing-item").length) {
                    if ($this_scroll.scrollTop() >= $(this).offset().top - ($(this).parents("body").find(".header .slogan").height() + $(this).parents("body").find(".header .bottom-header").height() + 30) && $this_scroll.scrollTop() <= $(this).offset().top + $(this).height()) {
                        $("[href='#" + $(this).attr("id") + "']").addClass("active").parents("li").siblings("li").find(".active").removeClass("active");
                    }
                } else {
                    if ($this_scroll.scrollTop() >= $(this).offset().top - ($(this).parents("body").find(".header .slogan").height() + $(this).parents("body").find(".header .bottom-header").height()) && $this_scroll.scrollTop() <= $(this).offset().top + $(this).height()) {
                        $("[href='#" + $(this).attr("id") + "']").addClass("active").parents("li").siblings("li").find(".active").removeClass("active");
                    }
                }
            });
        });
    }
});


if ($('#demo').length) {


    var words = [
        {text: "معماری", weight: 10.5, link: 'http://uniref.ir'},
        {text: "دانش آموزان", weight: 9.4, link: 'http://uniref.ir'},
        {text: "آموزش", weight: 8, link: 'http://uniref.ir'},
        {text: "محیط زیست", weight: 6.2, link: 'http://uniref.ir'},
        {text: "ایران", weight: 5, link: 'http://uniref.ir'},
        {text: "یادگیری", weight: 5, link: 'http://uniref.ir'},
        {text: "کارآفرینی", weight: 13, link: 'http://uniref.ir'},
        {text: "بهینه سازی", weight: 10.5, link: 'http://uniref.ir'},
        {text: "توسعه پایدار", weight: 13, link: 'http://uniref.ir'},
        {text: "معماری", weight: 10.5, link: 'http://uniref.ir'},
        {text: "دانش آموزان", weight: 9.4, link: 'http://uniref.ir'},
        {text: "آموزش", weight: 8, link: 'http://uniref.ir'},
        {text: "محیط زیست", weight: 6.2, link: 'http://uniref.ir'},
        {text: "ایران", weight: 5, link: 'http://uniref.ir'},
        {text: "یادگیری", weight: 5, link: 'http://uniref.ir'},
        {text: "کارآفرینی", weight: 13, link: 'http://uniref.ir'},
        {text: "بهینه سازی", weight: 10.5, link: 'http://uniref.ir'},
        {text: "توسعه پایدار", weight: 13, link: 'http://uniref.ir'},
        {text: "معماری", weight: 10.5, link: 'http://uniref.ir'},
        {text: "دانش آموزان", weight: 9.4, link: 'http://uniref.ir'},
        {text: "آموزش", weight: 8, link: 'http://uniref.ir'},
        {text: "محیط زیست", weight: 6.2, link: 'http://uniref.ir'},
        {text: "ایران", weight: 5, link: 'http://uniref.ir'},
        {text: "یادگیری", weight: 5, link: 'http://uniref.ir'},
        {text: "کارآفرینی", weight: 13, link: 'http://uniref.ir'},
        {text: "بهینه سازی", weight: 10.5, link: 'http://uniref.ir'},
        {text: "توسعه پایدار", weight: 13, link: 'http://uniref.ir'}];


    $('#demo').jQCloud(words);
}


//==================
// ranking system
//==================

$(document).on("click", ".ranking-system-attachment a,.ranking-system-attachment select", function (e) {
    var $this = $(this);
    if ($this.attr("href")) {
        $this.addClass("active").parents("li").siblings("li").find("a").removeClass("active");
        $("[data-slider-raking-system=" + $this.attr("href").replace(/#/g, '') + "]").addClass("active").siblings("[data-slider-raking-system]").removeClass("active");
        $("[data-target=" + $this.attr("href").replace(/#/g, '') + "]").attr("selected", "selected").siblings().removeAttr("selected");
    } else {
        $this.parents(".ranking-system-attachment").find("[href='" + "#" + $this.find("option:selected").attr("data-target") + "']").addClass("active").parents("li").siblings("li").find("a").removeClass("active");
        $("[data-slider-raking-system=" + $this.find("option:selected").attr("data-target").replace(/#/g, '') + "]").addClass("active").siblings("[data-slider-raking-system]").removeClass("active")
    }
    e.stopPropagation();
    e.preventDefault();
});
//==================
// niceScroll touch
//==================

$(window).on('ready load resize change', function () {
    if ($(".list-articles").length) {
        $(".list-articles").niceScroll({
            cursorwidth: "7px",
            touchbehavior: true,
            rtlmode: "auto"
        });
    }
});

$(window).on("load", function () {
   $(".nicescroll-rails").css({
       "direction":"ltr"
       }
   )

});