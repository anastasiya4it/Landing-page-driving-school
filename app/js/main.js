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

  $(".form__btn").on("click", function (event) {
    event.preventDefault();
    var name = $(".form__input[type='text']").eq(0).val();
    var phone = $(".form__input[type='text']").eq(1).val();

    if (name === "" || phone === "") {
      $(".form__label").removeClass("form__label--close");
      $(".form__input").addClass("form__input--error");
    } else {
      $(".form__label").addClass("form__label--close");
      $(".form__input").removeClass("form__input--error");
      $(".popup").removeClass("popup--close");
    }
  });
  $(".popup").on("click", function (event) {
    $(".popup").addClass("popup--close");
  });
});
