new fullpage('#fullpage', {
  sectionsColor: ['#202020', '#202020', '#202020', '#202020'],
  menu: ".menu-bar .menu"
});

function tabMenu() {
  function hideShow(no) {
    $('.tab-menu .pf').removeClass('active');
    $('.tab-menu .pf-'+no).addClass('active');
  }

  $('.tab-menu > .head .pf-1').click(function() {
    hideShow(1);
  });

  $('.tab-menu > .head .pf-2').click(function() {
    hideShow(2);
  });

  $('.tab-menu > .head .pf-3').click(function() {
    hideShow(3);
  });

  $('.tab-menu > .head .pf-4').click(function() {
    hideShow(4);
  });

  $('.tab-menu > .head .pf-5').click(function() {
    hideShow(5);
  });
}

tabMenu();

$("body").mousemove(function(e) {
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