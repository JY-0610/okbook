var $selector = document.querySelector('.main-visual');
var numSlide = $selector.querySelectorAll('.main-banner > li').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var slideFirst = 1;
var timerId = '';
var timerSpeed = 2000;
var isTimerOn = false;



$selector.querySelectorAll('ul.main-banner > li').forEach(function(el, i) {
    el.setAttribute('style', 'left: ' + (i * 100) + '%; display: block;');
    $selector.querySelector('.indicator').innerHTML += '<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>\n';
  })
  if (isTimerOn === true) {
    $selector.querySelector('.control a.play').setAttribute('class', 'play on');
  } else {
    $selector.querySelector('.control a.play').setAttribute('class', 'play');
  }
  showSlide(slideFirst);
  
  
  $selector.querySelectorAll('.indicator li a').forEach(function(el, i) {
    el.addEventListener('click', function() {
      var index = Array.from($selector.querySelectorAll('.indicator li a')).indexOf(this);
      showSlide(index + 1);
    }, false);
  });
  
  $selector.querySelectorAll('.main-banner li a').forEach(function(el, i) {
    el.addEventListener('focus', function() {
      var index = Array.from($selector.querySelectorAll('.slide li a')).indexOf(this);
      $selector.querySelector('div.box').scrollLeft = 0;
      showSlide(index + 1);
    }, false);
  });
  
document.querySelector('.control a.prev').addEventListener('click',function(){
  showSlide(slidePrev);
},false)
  
document.querySelector('.control a.next').addEventListener('click',function(){
  showSlide(slideNext);
},false)
  
  $selector.querySelector('.control a.play').addEventListener('click', function() {
    if (isTimerOn === true) {
      stopTimer();
    } else {
      startTimer();
    }
  }, false);
  
  
  function startTimer() {
    timerId = setTimeout(function() 
    {showSlide(slideNext);}, timerSpeed);
    $selector.querySelector('span.bar').setAttribute('style', 'animation-duration: ' + timerSpeed + 'ms');
    $selector.querySelector('span.bar').classList.add('on');
    $selector.querySelector('.control a.play').classList.add('on');
    isTimerOn = true;
  }
  
  function stopTimer() {
    clearTimeout(timerId);
    $selector.querySelector('span.bar').classList.remove('on');
    $selector.querySelector('.control a.play').classList.remove('on');
    isTimerOn = false;
  }
  
  function resetTimer() {
    clearTimeout(timerId);
    $selector.querySelector('span.bar').classList.remove('on');
    if (isTimerOn === true) {
      timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
      setTimeout(function() {
        $selector.querySelector('span.bar').setAttribute('style', 'animation-duration:' + timerSpeed + 'ms');
        $selector.querySelector('span.bar').classList.add('on');
      }, 50);
    }
  }
  

  function showSlide(n) {
    resetTimer();
    $selector.querySelector('.main-banner').setAttribute('style', 'transition: left 0.3s; left:' + (-(n - 1) * 100) + '%');
    $selector.querySelectorAll('.indicator > li').forEach(function(el, i) {
      el.classList.remove('on');
    });
    $selector.querySelector('.indicator > li:nth-child(' + n + ')').classList.add('on');
    slideNow = n;
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);
  
    console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
  }
  




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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXZpc3VhbCcpO1xyXG52YXIgbnVtU2xpZGUgPSAkc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tYmFubmVyID4gbGknKS5sZW5ndGg7XHJcbnZhciBzbGlkZU5vdyA9IDA7XHJcbnZhciBzbGlkZVByZXYgPSAwO1xyXG52YXIgc2xpZGVOZXh0ID0gMDtcclxudmFyIHNsaWRlRmlyc3QgPSAxO1xyXG52YXIgdGltZXJJZCA9ICcnO1xyXG52YXIgdGltZXJTcGVlZCA9IDIwMDA7XHJcbnZhciBpc1RpbWVyT24gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLm1haW4tYmFubmVyID4gbGknKS5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2xlZnQ6ICcgKyAoaSAqIDEwMCkgKyAnJTsgZGlzcGxheTogYmxvY2s7Jyk7XHJcbiAgICAkc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmluZGljYXRvcicpLmlubmVySFRNTCArPSAnPGxpPjxhIGhyZWY9XCIjXCI+JyArIChpICsgMSkgKyAn67KIIOyKrOudvOydtOuTnDwvYT48L2xpPlxcbic7XHJcbiAgfSlcclxuICBpZiAoaXNUaW1lck9uID09PSB0cnVlKSB7XHJcbiAgICAkc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmNvbnRyb2wgYS5wbGF5Jykuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwbGF5IG9uJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCBhLnBsYXknKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BsYXknKTtcclxuICB9XHJcbiAgc2hvd1NsaWRlKHNsaWRlRmlyc3QpO1xyXG4gIFxyXG4gIFxyXG4gICRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kaWNhdG9yIGxpIGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaW5kZXggPSBBcnJheS5mcm9tKCRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kaWNhdG9yIGxpIGEnKSkuaW5kZXhPZih0aGlzKTtcclxuICAgICAgc2hvd1NsaWRlKGluZGV4ICsgMSk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWJhbm5lciBsaSBhJykuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGluZGV4ID0gQXJyYXkuZnJvbSgkc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlIGxpIGEnKSkuaW5kZXhPZih0aGlzKTtcclxuICAgICAgJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ib3gnKS5zY3JvbGxMZWZ0ID0gMDtcclxuICAgICAgc2hvd1NsaWRlKGluZGV4ICsgMSk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfSk7XHJcbiAgXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sIGEucHJldicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gIHNob3dTbGlkZShzbGlkZVByZXYpO1xyXG59LGZhbHNlKVxyXG4gIFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCBhLm5leHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICBzaG93U2xpZGUoc2xpZGVOZXh0KTtcclxufSxmYWxzZSlcclxuICBcclxuICAkc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmNvbnRyb2wgYS5wbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChpc1RpbWVyT24gPT09IHRydWUpIHtcclxuICAgICAgc3RvcFRpbWVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfSwgZmFsc2UpO1xyXG4gIFxyXG4gIFxyXG4gIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XHJcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbigpIFxyXG4gICAge3Nob3dTbGlkZShzbGlkZU5leHQpO30sIHRpbWVyU3BlZWQpO1xyXG4gICAgJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYmFyJykuc2V0QXR0cmlidXRlKCdzdHlsZScsICdhbmltYXRpb24tZHVyYXRpb246ICcgKyB0aW1lclNwZWVkICsgJ21zJyk7XHJcbiAgICAkc2VsZWN0b3IucXVlcnlTZWxlY3Rvcignc3Bhbi5iYXInKS5jbGFzc0xpc3QuYWRkKCdvbicpO1xyXG4gICAgJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sIGEucGxheScpLmNsYXNzTGlzdC5hZGQoJ29uJyk7XHJcbiAgICBpc1RpbWVyT24gPSB0cnVlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICAkc2VsZWN0b3IucXVlcnlTZWxlY3Rvcignc3Bhbi5iYXInKS5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xyXG4gICAgJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sIGEucGxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ29uJyk7XHJcbiAgICBpc1RpbWVyT24gPSBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcclxuICAgICRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCdzcGFuLmJhcicpLmNsYXNzTGlzdC5yZW1vdmUoJ29uJyk7XHJcbiAgICBpZiAoaXNUaW1lck9uID09PSB0cnVlKSB7XHJcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3Nob3dTbGlkZShzbGlkZU5leHQpO30sIHRpbWVyU3BlZWQpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCdzcGFuLmJhcicpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYW5pbWF0aW9uLWR1cmF0aW9uOicgKyB0aW1lclNwZWVkICsgJ21zJyk7XHJcbiAgICAgICAgJHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYmFyJykuY2xhc3NMaXN0LmFkZCgnb24nKTtcclxuICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NsaWRlKG4pIHtcclxuICAgIHJlc2V0VGltZXIoKTtcclxuICAgICRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcubWFpbi1iYW5uZXInKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RyYW5zaXRpb246IGxlZnQgMC4zczsgbGVmdDonICsgKC0obiAtIDEpICogMTAwKSArICclJyk7XHJcbiAgICAkc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvciA+IGxpJykuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xyXG4gICAgfSk7XHJcbiAgICAkc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmluZGljYXRvciA+IGxpOm50aC1jaGlsZCgnICsgbiArICcpJykuY2xhc3NMaXN0LmFkZCgnb24nKTtcclxuICAgIHNsaWRlTm93ID0gbjtcclxuICAgIHNsaWRlUHJldiA9IChuID09PSAxKSA/IG51bVNsaWRlIDogKG4gLSAxKTtcclxuICAgIHNsaWRlTmV4dCA9IChuID09PSBudW1TbGlkZSkgPyAxIDogKG4gKyAxKTtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKHNsaWRlUHJldiArICcgLyAnICsgc2xpZGVOb3cgKyAnIC8gJyArIHNsaWRlTmV4dCk7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcblxyXG4iLCJjb25zb2xlLmxvZygndGVzdCEhISEhISEhISEhITEnKVxyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgc3ViX21lbnUoKTtcclxuXHJcbiAgJCgndWwudGFiLW1lbnUgbGkgYScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHRhYiA9ICQodGhpcykuZGF0YSgndGFiJyk7XHJcbiAgICAkKCd1bC5iZXN0LWJvb2snKS5yZW1vdmVDbGFzcygnb24nKVxyXG5cclxuICAgICAkKCd1bC50YWItbWVudSBsaSBhJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgIGNvbnNvbGUubG9nKHRhYik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gIH0pXHJcblxyXG5cclxufSlcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc3ViX21lbnUoKSB7XHJcbiAgJCgnLm1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc3ViJykuY3NzKHtcclxuICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAkKCcuY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc3ViJykuY3NzKHtcclxuICAgICAgJ2Rpc3BsYXknOiAnbm9uZSdcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbn0iXX0=
