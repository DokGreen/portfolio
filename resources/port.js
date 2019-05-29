const mouse1 = document.getElementById('intro1')
const mouse2 = document.getElementById('intro2')
const mouse3 = document.getElementById('intro3')


function mousemove(){
  var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
  mouse1.style.left = scrolltop * .5 + 'px' //add these px's * 50% to the left style
  mouse2.style.left = -scrolltop * .5 + 'px'
  mouse3.style.left = scrolltop * .5 + 'px'
}

document.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(mousemove) // call mousemove  the animatione frame helps to smooth it out
})
