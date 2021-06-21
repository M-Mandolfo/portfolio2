window.addEventListener("load", function(){
    // skillbar
  var skillbars = document.querySelectorAll('.skillbar-bar');

  var skillsOffsetTop = document.querySelector('#skills').offsetTop;
  window.addEventListener("scroll", function(){ 
  var height = window.innerHeight;
  console.log(window.scrollTop);
  if(window.pageYOffset+height > skillsOffsetTop) {
    for (var i = 0; i < skillbars.length; i++) {
      console.log(skillbars[i].parentNode.dataset.percent);
      skillbars[i].style.width = skillbars[i].parentNode.dataset.percent;
    }
  }}); 
  

});