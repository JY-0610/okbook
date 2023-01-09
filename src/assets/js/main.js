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
  



