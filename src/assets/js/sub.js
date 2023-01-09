console.log('test!!!!!!!!!!!!1')



$(document).ready(function () {
  sub_menu();

  $('ul.tab-menu li a').click(function () {
    const tab = $(this).data('tab');
    $('ul.best-book').removeClass('on')

     $('ul.tab-menu li a').removeClass('open');
     $(this).addClass('open');
     $(this).next().addClass('open');
    console.log(tab);
    console.log(this)
  })


})



function sub_menu() {
  $('.menu').on('click', function () {
    $('.sub').css({
      'display': 'block'
    });
  });
  $('.close').on('click', function () {
    $('.sub').css({
      'display': 'none'
    });

  });

}