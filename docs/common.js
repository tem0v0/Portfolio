new fullpage('#fullpage', {
  sectionsColor: ['#202020', '#202020', '#202020', '#202020'],
  menu: ".menu-bar .menu"
});

function tabMenu() {
  function hide() {
    $('.tab-menu .pf').removeClass('active');
    $('.tab-menu .body .pf').hide();
  }

  function show(no) {
    $('.tab-menu .pf-'+no).addClass('active');
    $('.tab-menu .pf-'+no).fadeIn(1800);
  }

  $('.tab-menu > .head .pf-1').click(function() {
    hide();
    show(1);
  });

  $('.tab-menu > .head .pf-2').click(function() {
    hide();
    show(2);
  });

  $('.tab-menu > .head .pf-3').click(function() {
    hide();
    show(3);
  });

  $('.tab-menu > .head .pf-4').click(function() {
    hide();
    show(4);
  });

  $('.tab-menu > .head .pf-5').click(function() {
    hide();
    show(5);
  });
}

tabMenu();