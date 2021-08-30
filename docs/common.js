new fullpage('#fullpage', {
  sectionsColor: ['#202020', '#202020', '#202020', '#202020'],
  menu: ".menu-bar .menu"
});

function tabMenu() {
  function hideShow(no) {
    $('.tab-menu .pf').removeClass('active');
    $('.tab-menu .body .pf').hide();
    $('.tab-menu .pf-'+no).addClass('active');
    $('.tab-menu .pf-'+no).fadeIn(1800);
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