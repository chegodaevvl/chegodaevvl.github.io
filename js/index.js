window.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.submenu__items').forEach(submenu => {
    new SimpleBar(submenu, {
      scrollbarMaxSize: 28,
      autoHide: false,
    })
  })

  document.querySelectorAll(".genre__button").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".genre__submenu");

      document.querySelectorAll(".genre__submenu").forEach(el => {
        if (el != btn) {
          el.classList.remove("genre__active");
        }
      });

      document.querySelectorAll(".genre__submenu").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("submenu-active");
        }
      })
      dropdown.classList.toggle("submenu-active");
      btn.classList.toggle("genre__active")
    })
  });

  document.querySelector(".search__open").addEventListener("click", function() {
    document.querySelector(".search__form").classList.add("form__active");
    this.classList.add("active");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".search__form");
    if (!target.closest(".genres__list")) {
      document.querySelectorAll(".genre__submenu").forEach(el => {
          el.classList.remove("submenu-active");
      })
      document.querySelectorAll(".genre__button").forEach(el => {
        el.classList.remove("genre__active");
      });
    }
    if (!target.closest(".top__search")) {
      form.classList.remove("form__active");
      form.querySelector(".search__field").value = "";
      document.querySelector(".search__open").classList.remove("active")
    }
  });


  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".burger__menu").classList.add("burger__active");
  })

  document.querySelector(".burger__close").addEventListener("click", function() {
    document.querySelector(".burger__menu").classList.remove("burger__active");
  })

  document.querySelector(".search__close").addEventListener("click", function() {
    document.querySelector(".search__form").classList.remove("form__active");
  })

  var hero_swiper = new Swiper('.hero__swiper', {
    speed: 2000,
    autoplay: {
      delay: 10000
    },
    effect: "fade",
    allowTouchMove: false,
  })

  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ""
  });

  var hero_swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 10000,
    },
    effect: "fade",
    allowTouchMove: false,
  });

  const gallery_swiper = new Swiper('.gallery__swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 50,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
      },

    navigation: {
      nextEl: ".gallery__next-btn",
      prevEl: ".gallery__prev-btn"
    },

    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      }
    },
  });

  var publishes_swiper = new Swiper('.publishes__swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.publish__btn-next',
      prevEl: '.publish__btn-prev',
    },
  });

  var partners_swiper = new Swiper('.partners__swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.partners__btn-next',
      prevEl: '.partners__btn-prev',
    },
  });

  $( ".accordion" ).accordion({
    heightStyle: "content",
    // collapsible: true,
    icons: null,
    active: false,
  });

  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.760917118066516,37.635463997922464],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 15,
      });

      var myPlacemark = new ymaps.Placemark([55.758468,37.611088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [28, 40],
        iconImageOffeset: [-3, -42],
      });

      myMap.geoObjects.add(myPlacemark);
    }

  document.querySelectorAll('.lang__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      var lang = event.currentTarget.dataset.lang
      document.querySelectorAll('.lang__button').forEach(function(BtnTabs) {
        BtnTabs.classList.remove('lang-active')
      })
      event.currentTarget.classList.add('lang-active')
      document.querySelectorAll('[data-trans]').forEach(function(tabContent) {
        tabContent.classList.remove('trans-active')
      })
        document.querySelectorAll(`[data-trans="${lang}"]`).forEach(function(activeElement) {
          activeElement.classList.add('trans-active')
        })
    })
  })

  document.querySelectorAll('.painter__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      var painter = event.currentTarget.dataset.painter
      document.querySelectorAll('.painter__button').forEach(function(BtnTabs) {
        BtnTabs.classList.remove('tab-active')
      })
      event.currentTarget.classList.add('tab-active')
      document.querySelectorAll('[data-detail]').forEach(function(tabContent) {
        tabContent.classList.remove('painter-active')
      })
        document.querySelectorAll(`[data-detail="${painter}"]`).forEach(function(activeElement) {
          activeElement.classList.add('painter-active')
        })
    })
  })

  document.querySelector('.event__btn').addEventListener('click', function() {
    document.querySelectorAll('.events__item').forEach(function(eventTab) {
      eventTab.classList.remove('is__hidden')
    })
    document.querySelector('.event__btn').classList.add('is__hidden')
  })

  var im = new Inputmask("9{1,2}[ 999]");
  document.querySelectorAll(".filter__value").forEach(function(numField) {
    im.mask(numField)
  })

  tippy('.tool-tip', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'main-theme',
    trigger: 'click',
    maxWidth: 264,
  });

})
