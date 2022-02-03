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
    if (!target.closest(".search") && (!target.closest(".search-open"))) {
      document.querySelector(".search").classList.remove("search_active");
    }
    if (target.classList.contains('modal')) {
      document.querySelector('.modal').classList.remove('modal_active');
      $('body').css('overflow', 'auto');
      $('body').css('margin-right', '');
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

  document.querySelector('.hero__btn')  .addEventListener("click", function() {
    document.querySelector('.contacts').scrollIntoView({behavior: "smooth"})
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

      621: {
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

  document.querySelectorAll('.gallery__slide').forEach(function(imgBtn) {
    imgBtn.addEventListener('click', function(event) {
      document.querySelector('.modal').classList.add('modal_active');
      var marginSize = window.innerWidth - document.getElementsByTagName('html')[0].clientWidth;
      $('body').css('overflow', 'hidden');
      $('body').css('margin-right', marginSize + 'px');
    })
  });

  document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('modal_active');
    $('body').css('overflow', 'auto');
    $('body').css('margin-right', '');
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

  document.querySelectorAll('.painter__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      var painter = event.currentTarget.dataset.painter
      document.querySelectorAll('.painter__button').forEach(function(BtnTabs) {
        BtnTabs.classList.remove('tab-active')
      })
      event.currentTarget.classList.add('tab-active')
      document.querySelectorAll('[data-detail]').forEach(function(tabContent) {
        tabContent.classList.remove('painter-detail_active')
      })
        document.querySelectorAll(`[data-detail="${painter}"]`).forEach(function(activeElement) {
          activeElement.classList.add('painter-detail_active')
          if ($(window).width() < 766) {
            activeElement.scrollIntoView({behavior: "smooth"})
          }
        })
    })
  });

  $( ".accordion" ).accordion({
    heightStyle: "content",
    icons: null,
    active: false,
  });

  const events_swiper = new Swiper('.events__swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 50,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      621: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      901: {
        slidesPerView: 3,
        spaceBetween: 27,
      },

      1201: {
        slidesPerView: 3,
        spaceBetween: 50,
      }

    },

    pagination: {
      el: ".events__pagination",
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.events__button-next',
      prevEl: '.events__button-prev',
    },

  });

  const partners_swiper = new Swiper('.partners__swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 50,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      451: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      1201: {
        slidesPerView: 3,
        spaceBetween: 50,
      }

    },

    navigation: {
      nextEl: '.partners__button-next',
      prevEl: '.partners__button-prev',
    },
  });

  tippy('.tool-tip', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'main-theme',
    trigger: 'click',
    maxWidth: 264,
  });

  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("contacts-map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.758468,37.611088],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14,
      });

      var myPlacemark = new ymaps.Placemark([55.758468,37.611088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [28, 40],
        iconImageOffeset: [-3, -42],
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])
    };

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  var data_js = {
    "access_token": "tzrs7d0qy6qopus2y4nsvqm3"
  };

  new JustValidate('.callback', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 150,
        },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: 'Данное поле обязательно к заполнению!',
        minLength: 'Имя пользователя должно содержать минимум 2 символа!',
        maxLength: 'Имя пользователя не должно превышать 150 символов!'
      },
      tel: {
        required: 'Данное поле обязательно к заполнению!',
      },
    },
    submitHandler: function(form) {
      // let formData = new FormData(form);

      var request = new XMLHttpRequest();

      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log('Письмо успешно отправлено');
            document.querySelector('.callback__submit').classList.add('callback__submit-active')
        }
      };

      var contactName = document.querySelector("input[name='name']").value;
      var contactPhone = document.querySelector("input[name='phone']").value;
      data_js['subject'] = "Новый контакт";
      data_js['text'] = "Имя: " + contactName + '. Номер телефона: ' + contactPhone;

      request.open('POST', "https://postmail.invotes.com/send", true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

      var params = form_data.join("&")

      request.send(params);

      form.reset();
    }
  });

})
