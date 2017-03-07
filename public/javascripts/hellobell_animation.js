

document.addEventListener('DOMContentLoaded',function(){
  console.log('Animation init');
  var doAnimation = function(){
    let offset = document.body.scrollTop + window.innerHeight;
    let animatables = document.querySelectorAll('.animatable');
    animatables.forEach(animatable=>{
      if(animatable.offsetTop+animatable.offsetHeight-20 < offset){
        animatable.classList.remove('animatable');
        animatable.classList.add('animated');
      }
    });
  }
  window.addEventListener('scroll',doAnimation);
});
