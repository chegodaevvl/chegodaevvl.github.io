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

  document.querySelectorAll('.gallery__slide').forEach(function(imgBtn) {
    imgBtn.addEventListener('click', function(event) {
      document.querySelector('.modal').classList.add('modal_active');
    })
  });

  document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('modal_active');
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
          if ($(window).width() < 621){
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
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      621: {
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
    };

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

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
  });

  var submitButton = document.querySelector(".callback__btn");
  var form = document.querySelector(".callback");
  form.addEventListener("submit", function (e) {
      setTimeout(function() {
          submitButton.value = "Sending...";
          submitButton.disabled = true;
      }, 1);
  });

  var form_class_js = ".callback";

  var data_js = {
      "access_token": "tzrs7d0qy6qopus2y4nsvqm3"
  };

  function js_onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
  }

  function js_onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
  }

  var sendButton = document.querySelector(".callback__btn");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector(form_class_js + " [name='name']").value;
        var message = document.querySelector(form_class_js + " [name='phone']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

})
