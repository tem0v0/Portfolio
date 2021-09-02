new fullpage('#fullpage', {
  menu: ".menu-bar .menu"
});

// 탭메뉴 작동
function tabMenu() {
  function hideShow(no) {
    $('.tab-menu .pf').removeClass('active');
    $('.tab-menu .pf-' + no).addClass('active');
  }

  $('.tab-menu > .head .pf-1').click(function () {
    hideShow(1);
  });

  $('.tab-menu > .head .pf-2').click(function () {
    hideShow(2);
  });

  $('.tab-menu > .head .pf-3').click(function () {
    hideShow(3);
  });

  $('.tab-menu > .head .pf-4').click(function () {
    hideShow(4);
  });

  $('.tab-menu > .head .pf-5').click(function () {
    hideShow(5);
  });
}

tabMenu();

// 텍스트 배경 마우스 따라 움직이게 하는 js
function textBg_move() {
  $("body").mousemove(function (e) {
    parallaxIt(e, ".text-bg", 20);
    parallaxIt(e, "body", 0);
  });

  function parallaxIt(e, target, movement) {
    var $this = $("body");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
}

textBg_move();

// 라이트, 다크 모드 변경
function mode() {
  $('.menu-bar > .logo').click(
    function() {
      let has = $('.site-wrap').hasClass('mode');

      if (has) {
        $('.site-wrap').removeClass('mode');
      }
      else {
        $('.site-wrap').addClass('mode');
      };
    }
  )
};

  mode();