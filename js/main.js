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
}
//==================
// map
//==================
$(function () {
    $('#IranMap .map .province path').click(function () {
        var province = $(this).attr('class');
        window.location.href = $("." + $(this).attr('class') + " a").attr("href");
    });
});