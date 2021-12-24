window.addEventListener('DOMContentLoaded', function() {
  new SimpleBar(document.querySelector('.submenu__items'), {
    scrollbarMaxSize: 28
  });

  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ""
  });

  var gallery_swiper = new Swiper('.gallery__swiper', {
    // Optional parameters
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
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
