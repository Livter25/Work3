$(document).ready(function () {
    var scrolled;

    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 0){
            $(".header").css({"display": "none"})
        }
        if(700 > scrolled){
            $(".header").css({"display": "block"})         
        }

    };
    
    $('.question__form').validate({

      errorClass: "invalid",
      errorElement: "em",
      rules: {
      // simple rule, converted to {required:true}
      userName: {
          required: true,
          minlength: 2,
          maxlength: 15,
          
      },
      userMasange: "required",
      userPhone: "required",
      // compound rule
      userEmail: {
          required: true,
          email: true
      }
      },
      messages: {
      userName:{
          required: "Имя обязательно ",
          minlength: jQuery.validator.format("Имя не короче {0} букв "),
          maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
      } ,
      userMasange:{
          required: "Сообщение обязательно",
      },
      userEmail: {
          required: "Обязателно укажите Email",
          email: "Введите в формате sdfsd@asdasd.com"
          },
      userPhone:{
          required: "Телефон обязательно",
          minlength: jQuery.validator.format("Номер не короче {0} цифр "),
          },
      }
  
      });
    
    $('[type=tel]').mask('+7(000)-000-00-00', {placeholder: "Phone"});
    
    jQuery(function($){
        $('a[href*="#"]').on('click.smoothscroll', function( e ){
        var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
        if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
        var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
        if( ! $target.length ) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 900, 'swing', function(){
        window.location.hash = hash;
        });
        });
        });

          
});