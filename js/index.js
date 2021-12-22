window.addEventListener('DOMContentLoaded', function() {
  new SimpleBar(document.querySelector('.genre__submenu'), {
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

  $( "#accordion" ).accordion({
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

})
