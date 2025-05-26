if(document.querySelector(".page_start")) {
    $(".page_start .block_left").mouseover(function() {
        $(".page_start").removeClass("start");
        $(".page_start").removeClass("right");
        $(".page_start").addClass("left");
    });
    $(".page_start .block_right").mouseover(function() {
        $(".page_start").removeClass("start");
        $(".page_start").removeClass("left");
        $(".page_start").addClass("right");
    });
    $(".page_start .block_left").mouseout(function() {
        $(".page_start").removeClass("left");
        $(".page_start").removeClass("right");
        $(".page_start").addClass("start");
    });
    $(".page_start .block_right").mouseout(function() {
        $(".page_start").removeClass("right");
        $(".page_start").removeClass("left");
        $(".page_start").addClass("start");
    });
};
$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
$(function(){
    $('.header__navbar .item').click(function(){
        $(".header__navbar").removeClass("opacity");
        $(".header .burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__navbar").removeClass("open");
            $(".header .burgir").removeClass("active");
        },400);
         var target = $(this).attr('href');
         $('html, body').animate({scrollTop: $(target).offset().top}, 800);
         return false;
    });
});


// Search
$(".search_open").click(function() {
    $(this).addClass("none");
    $(".header__call").addClass("opacity");
    $(".header__search").addClass("active");
    setTimeout(function() {
        $(".header__search").addClass("opacity");
    },10);
});
$(".header__search .close").click(function() {
    $(".search_open").removeClass("none");
    $(".header__call").removeClass("opacity");
    $(".header__search").removeClass("opacity");
    setTimeout(function() {
        $(".header__search").removeClass("active");
        
    },300);
});

$(".header .burgir").click(function() {
    if($(".header .burgir").hasClass("active")) {
        $(".header__navbar").removeClass("opacity");
        $(".header .burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__navbar").removeClass("open");
            $(".header .burgir").removeClass("active");
        },400);
    } else {
        $(".header__navbar").addClass("open");
        $(".header .burgir").addClass("active");
        setTimeout(function() {
            $(".header__navbar").addClass("opacity");
            $(".header .burgir").addClass("rotate");
        },400);
    };
});

if(document.querySelector(".question_answer__accordion .btn")) {
    $(".question_answer__accordion .btn").click(function() {
        $(this).toggleClass("active");
    });
};

if(document.querySelector(".tab_btns")) {
    // Tab
    function tabFun(num) {
        if(document.querySelector("#tab-btn-" + num)) {
            $("#tab-btn-" + num).click(function() {
                $(".tab-btn-all").removeClass("active");
                $(".tab-block-all").removeClass("active");
                $(this).addClass("active");
                $("#tab-block-" + num).addClass("active");
            });
        };
    };
    tabFun("1");
    tabFun("2");
    tabFun("3");
    tabFun("4");
    tabFun("5");
    tabFun("6");
    tabFun("7");
    tabFun("8");
    tabFun("9");
    tabFun("10");
};
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};