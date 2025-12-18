(function ($) {
  /**
   * Initialize all components in a given context.
   * @param {HTMLElement|jQuery} context - Optional context to initialize within, default is document
   */
  function initComponents(context = document) {
    //========== HEADER ACTIVE STRATS ============= //
    var $header = $("#vl-header-sticky");
    var $window = $(window);
    function toggleStickyHeader() {
      var scrollTop = $window.scrollTop();
      if (scrollTop < 100) {
        $header.removeClass("header-sticky");
      } else {
        $header.addClass("header-sticky");
      }
    }
    $window.on("scroll", toggleStickyHeader);
    toggleStickyHeader();
    //========== HEADER ACTIVE ENDS ============= //

    //========== MOBILE MENU STARTS ============= //
    var vlMenuWrap = $(".vl-mobile-menu-active > ul").clone();
    var vlSideMenu = $(".vl-offcanvas-menu nav");
    vlSideMenu.append(vlMenuWrap);

    if ($(vlSideMenu).find(".sub-menu, .vl-mega-menu").length !== 0) {
      $(vlSideMenu)
        .find(".sub-menu, .vl-mega-menu")
        .parent()
        .append(
          '<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>'
        );
    }

    var sideMenuList = $(
      ".vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a"
    );
    $(sideMenuList).on("click", function (e) {
      e.preventDefault();
      var $parent = $(this).parent();

      if (!$parent.hasClass("active")) {
        $parent.addClass("active");
        $(this).siblings(".sub-menu, .vl-mega-menu").slideDown();
      } else {
        $(this).siblings(".sub-menu, .vl-mega-menu").slideUp();
        $parent.removeClass("active");
      }
    });

    $(".vl-offcanvas-toggle").on("click", function () {
      $(".vl-offcanvas").addClass("vl-offcanvas-open");
      $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
    });

    $(".vl-offcanvas-close-toggle, .vl-offcanvas-overlay").on(
      "click",
      function () {
        $(".vl-offcanvas").removeClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
      }
    );
    //========== MOBILE MENU ENDS ============= //

    //========== PAGE PROGRESS STARTS ============= //
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });
    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });

    //========== PAGE PROGRESS STARTS ============= //

    //========== PRICING AREA ============= //
    $("#ce-toggle").change(function () {
      const isChecked = $(this).is(":checked");
      $(".plan-toggle-wrap").toggleClass("active", isChecked);
      $(".tab-content #yearly").toggle(!isChecked);
      $(".tab-content #monthly").toggle(isChecked);
    });
    //========== PRICING AREA ============= //

    //========== VIDEO POPUP STARTS ============= //
    if ($(".popup-youtube").length > 0) {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
      });
    }
    //========== VIDEO POPUP ENDS ============= //
    AOS.init;
    AOS.init({ disable: "mobile" });

    //========== NICE SELECT ============= //
    $("select").niceSelect();

    // ========= SLIDERS =========
    const sliderSettings = [
      {
        selector: ".case-slider-area",
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          prevArrow: $(".next-arrow"),
          nextArrow: $(".prev-arrow"),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
      {
        selector: ".testimonial-slider",
        options: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          prevArrow: $(".next-arrow1"),
          nextArrow: $(".prev-arrow1"),
        },
      },
      {
        selector: ".hero-main-slider",
        options: {
          autoplay: true,
          autoplaySpeed: 1500,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,
          dots: false,
          arrows: true,
          pauseOnDotsHover: true,
          cssEase: "linear",
          fade: true,
          draggable: true,
          prevArrow: $(".next-arrow-hero"),
          nextArrow: $(".prev-arrow-hero"),
        },
      },
      {
        selector: ".testimonial-bottom-slider",
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
      {
        selector: ".team-slider-boxarea",
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          prevArrow: $(".t-prev-area"),
          nextArrow: $(".t-next-area"),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
      {
        selector: ".cas3-widget-slider-area",
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $(".next-arrow-case3"),
        nextArrow: $(".prev-arrow-case3"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      {
        selector: ".brand-images-slider",
        options: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
      {
        selector: ".testimonial4-images",
        options: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          loop: true,
          focusOnSelect: true,
          vertical: false,
          asNavFor: ".testimonial4-contetnt-area",
          infinite: true,
          fade: true,
        },
      },
      {
        selector: ".testimonial4-contetnt-area",
        options: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: ".testimonial4-images",
          dots: false,
          arrows: true,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: $(".prev-arrow-testi4"),
          nextArrow: $(".next-arrow-testi4"),
        },
      },
      {
        selector: ".service-widget-slider-area",
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          prevArrow: $(".next-arrow-ser4"),
          nextArrow: $(".prev-arrow-ser4"),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
      {
        selector: ".testimonial7-contetnt-area",
        options: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          loop: true,
          focusOnSelect: true,
          vertical: false,
          infinite: true,
          fade: false,
          dots: true,
        },
      },
      {
        selector: ".testimonial8-slider",
        options: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: ".brand-images-area",
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        selector: ".brand-images-area",
        options: {
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".testimonial8-slider",
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          loop: true,
          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        },
      },
    ];

    sliderSettings.forEach(({ selector, options }) => {
      const $slider = $(selector, context);
      if ($slider.length && !$slider.hasClass("slick-initialized")) {
        $slider.slick({
          ...options,
        });
      }
    });

    //========== PRELOADER ============= //
    $(window).on("load", function (event) {
      setTimeout(function () {
        $(".preloader").fadeToggle();
      }, 200);
    });

    // ========= COUNTER UP =========
    const $counter = $(".counter", context);
    if ($counter.length) $counter.countUp();
  }

  $(document).ready(() => initComponents());

  // Export initComponents so it can be called manually after dynamic content render
  window.initComponents = initComponents;
})(jQuery);
