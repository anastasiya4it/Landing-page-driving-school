// const Inputmask = require("inputmask");
// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

$(function () {
  $(".toggle").on("click", function () {
    if ($(".menu__rightside").hasClass("menu__rightside--close")) {
      $(".menu__rightside").removeClass("menu__rightside--close");
    } else {
      $(".menu__rightside").addClass("menu__rightside--close");
    }

    if ($(".btn").hasClass("btn--close")) {
      $(".btn").removeClass("btn--close");
    } else {
      $(".btn").addClass("btn--close");
    }
  });
  // $(document).ready(function () {
  //   const phoneInput = $(".form__input-phone[type='tel']").eq(0);
  //   const im = new Inputmask("+38 (999) 999-99-99");
  //   im.mask(phoneInput);
  // });

  $(".form__btn").on("click", function (event) {
    event.preventDefault();
    var name = $(".form__input-name[type='text']").eq(0).val();
    var phone = $(".form__input-phone[type='text']").eq(0).val();
    console.log(phone);
    if (name.length <= 3) {
      $(".form__label-name").removeClass("form__label--close");
      $(".form__input-name").addClass("form__input--error");
    } else {
      $(".form__label-name").addClass("form__label--close");
      $(".form__input-name").removeClass("form__input--error");
      $(".popup").removeClass("popup--close");
    }

    if (phone.length <= 10) {
      $(".form__label-phone").removeClass("form__label--close");
      $(".form__input-phone").addClass("form__input--error");
    } else {
      // const im = new Inputmask("+38 (999) 999-99-99");
      // im.mask(phone);
      // ;(phone).inputmask("+38 (999) 999-99-99");
      $(".form__label-phone").addClass("form__label--close");
      $(".form__input-phone").removeClass("form__input--error");

      $(".popup").removeClass("popup--close");
    }
  });
  $(".popup").on("click", function (event) {
    $(".popup").addClass("popup--close");
  });
});

// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
const swiper = new Swiper(".swiper", {
  // modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: {
    enabled: true,
    momentum: true,
  },
  slidesPerView: 4,
  // slideToClickedSlide: true,
  // mousewheel: true,
  // keyboard: true,
  loop: true,
});

let form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
  // let res = document.querySelector(".result");
  axios({
    method: "GET",
    url: "https://api.telegram.org/bot7839815008:AAFXIc-oIuuDyxVKfx0aAc81kokFLuG2Ac0/sendMessage?chat_id=-1002280396317&text=",
    params: {
      input1: document.querySelector('input[name="name"]').value,
      input2: document.querySelector('input[name="phone"]').value,
    },

    // data: {
    //   input1: document.querySelector('input[name="name"]').value,
    //   input2: document.querySelector('input[name="phone"]').value,
    //   // textarea: document.querySelector('textarea[name="textarea"]').value,
    // },
  });
  // .then(() => {
  //   res.innerHTML = "Form was successfully sent!";
  //   form.reset();
  // })
  // .catch(() => {
  //   res.innerHTML = "An error occurred!";
  //   form.reset();
  // });
};
