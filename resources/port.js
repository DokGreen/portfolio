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


/*------------------------------------TEST*/
const bars = document.querySelector("#bar");
const bar1 = document.querySelectorAll('.bartxt');
const isInViewport = function (elem) {
	const distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

window.addEventListener('scroll', function (event) {
  if (isInViewport(bars)) {
		bar1[0].style.width = "80%"
    bar1[1].style.width = "80%";
    bar1[2].style.width = "60%";
    bar1[3].style.width = "70%";
    bar1[4].style.width = "40%";
      } else {
    bar1[0].style.width = "30%"
    bar1[1].style.width = "30%";
    bar1[2].style.width = "30%";
    bar1[3].style.width = "30%";
    bar1[4].style.width = "30%";
    }
});
