(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1){
            $('.avatar').addClass('avatar-psuedo');
            $('nav').addClass('navbar-psuedo');
        }
        else{
            $('.avatar').removeClass('avatar-psuedo');
            $('nav').removeClass('navbar-psuedo');
        }
    });
});

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1){
            $('.intro-text').addClass('intro-text-psuedo');
        }
        else{
            $('.intro-text').removeClass('intro-text-psuedo');
        }
    });
});
const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 300);

window.addEventListener('load', fadeEffect);
