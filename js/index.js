window.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.submenu__items').forEach(submenu => {
    new SimpleBar(submenu, {
      scrollbarMaxSize: 28,
      autoHide: false,
    })
  })

  document.querySelectorAll(".genres-menu__button").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".submenu");

      document.querySelectorAll(".genres-menu__button").forEach(el => {
        if (el != btn) {
          el.classList.remove("genres-menu__button_active");
        }
      });

      document.querySelectorAll(".submenu").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("submenu-active");
        }
      })
      dropdown.classList.toggle("submenu-active");
      btn.classList.toggle("genres-menu__button_active")
    })
  });

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".genres-menu__items")) {
      document.querySelectorAll(".submenu").forEach(el => {
          el.classList.remove("submenu-active");
      })
      document.querySelectorAll(".genres-menu__button").forEach(el => {
        el.classList.remove("genres-menu__button_active");
      });
    }
  });

  document.querySelector(".search-open").addEventListener("click", function() {
    document.querySelector(".search").classList.add("search_active");
  })

  document.querySelector(".search__close").addEventListener("click", function() {
    document.querySelector(".search").classList.remove("search_active");
  })

  document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector(".burger-menu").classList.add("burger-menu_active");
  })

  document.querySelector(".burger-menu__close").addEventListener("click", function() {
    document.querySelector(".burger-menu").classList.remove("burger-menu_active");
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

  const gallery_swiper = new Swiper('.gallery__swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },

      521: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }

    },

    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
      },

    navigation: {
      nextEl: ".gallery__next-btn",
      prevEl: ".gallery__prev-btn"
    },

  });

  document.querySelectorAll('.age-label').forEach(function(labelAge) {
    labelAge.addEventListener('click', function(event) {
      document.querySelectorAll('.age-label').forEach(function(Agelabel) {
        Agelabel.classList.remove('gallery__age-active')
      })
      event.currentTarget.classList.add('gallery__age-active')
    })
  })

  document.querySelectorAll('.gallery__slide').forEach(function(imgBtn) {
    imgBtn.addEventListener('click', function(event) {
      document.querySelector('.modal').classList.add('modal_active');
    })
  })

  document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('modal_active');
    })

  //   var publishes_swiper = new Swiper('.publishes__swiper', {
//     // Optional parameters
//     slidesPerView: 3,
//     spaceBetween: 50,

//     // Navigation arrows
//     navigation: {
//       nextEl: '.publish__btn-next',
//       prevEl: '.publish__btn-prev',
//     },
//   });

//   var partners_swiper = new Swiper('.partners__swiper', {
//     // Optional parameters
//     slidesPerView: 3,
//     spaceBetween: 50,

//     // Navigation arrows
//     navigation: {
//       nextEl: '.partners__btn-next',
//       prevEl: '.partners__btn-prev',
//     },
//   });

//   $( ".accordion" ).accordion({
//     heightStyle: "content",
//     // collapsible: true,
//     icons: null,
//     active: false,
//   });

//   ymaps.ready(init);
//   function init(){
//       // Создание карты.
//       var myMap = new ymaps.Map("map", {
//           // Координаты центра карты.
//           // Порядок по умолчанию: «широта, долгота».
//           // Чтобы не определять координаты центра карты вручную,
//           // воспользуйтесь инструментом Определение координат.
//           center: [55.760917118066516,37.635463997922464],
//           // Уровень масштабирования. Допустимые значения:
//           // от 0 (весь мир) до 19.
//           zoom: 15,
//       });

//       var myPlacemark = new ymaps.Placemark([55.758468,37.611088], {}, {
//         iconLayout: 'default#image',
//         iconImageHref: 'img/location.svg',
//         iconImageSize: [28, 40],
//         iconImageOffeset: [-3, -42],
//       });

//       myMap.geoObjects.add(myPlacemark);
//     }

//   document.querySelectorAll('.lang__button').forEach(function(tabsBtn) {
//     tabsBtn.addEventListener('click', function(event) {
//       var lang = event.currentTarget.dataset.lang
//       document.querySelectorAll('.lang__button').forEach(function(BtnTabs) {
//         BtnTabs.classList.remove('lang-active')
//       })
//       event.currentTarget.classList.add('lang-active')
//       document.querySelectorAll('[data-trans]').forEach(function(tabContent) {
//         tabContent.classList.remove('trans-active')
//       })
//         document.querySelectorAll(`[data-trans="${lang}"]`).forEach(function(activeElement) {
//           activeElement.classList.add('trans-active')
//         })
//     })
//   })

//   document.querySelectorAll('.painter__button').forEach(function(tabsBtn) {
//     tabsBtn.addEventListener('click', function(event) {
//       var painter = event.currentTarget.dataset.painter
//       document.querySelectorAll('.painter__button').forEach(function(BtnTabs) {
//         BtnTabs.classList.remove('tab-active')
//       })
//       event.currentTarget.classList.add('tab-active')
//       document.querySelectorAll('[data-detail]').forEach(function(tabContent) {
//         tabContent.classList.remove('painter-active')
//       })
//         document.querySelectorAll(`[data-detail="${painter}"]`).forEach(function(activeElement) {
//           activeElement.classList.add('painter-active')
//         })
//     })
//   })

//   document.querySelector('.event__btn').addEventListener('click', function() {
//     document.querySelectorAll('.events__item').forEach(function(eventTab) {
//       eventTab.classList.remove('is__hidden')
//     })
//     document.querySelector('.event__btn').classList.add('is__hidden')
//   })

//   var im = new Inputmask("9{1,2}[ 999]");
//   document.querySelectorAll(".filter__value").forEach(function(numField) {
//     im.mask(numField)
//   })

//   tippy('.tool-tip', {
//     content: 'Пример современных тенденций - современная методология разработки',
//     theme: 'main-theme',
//     trigger: 'click',
//     maxWidth: 264,
//   });

})
