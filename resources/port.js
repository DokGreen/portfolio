const mouse1 = document.getElementById('intro1')
const mouse2 = document.getElementById('intro2')
const mouse3 = document.getElementById('intro3')

const bars = document.querySelector("#bar");
const bar1 = document.querySelectorAll('.bartxt');

/*----------------------------------------------------------------------intro X change---*/
function mousemove(){
  var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
  mouse1.style.left = scrolltop * .5 + 'px' //add these px's * 50% to the left style
  mouse2.style.left = -scrolltop * .5 + 'px'
  mouse3.style.left = scrolltop * .5 + 'px'
}


/*----------------------------------------------------------------------Bar animation---*/
//is the element completely in view
const isInViewport = function (e) {
  //this gets its top, right, bottom and left coordinates
	const distance = e.getBoundingClientRect();
	return (
    //We only need the top and bottom as the page doesnt scroll on the X axis
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};


document.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(mousemove) // call mousemove  the animatione frame helps to smooth it out

  //if element has 0 top and bottom animate
  if (isInViewport(bars)) {
    bar1[0].style.width = "80%"
    bar1[1].style.width = "80%";
    bar1[2].style.width = "60%";
    bar1[3].style.width = "70%";
    bar1[4].style.width = "70%";
  }//reset changes when out
      else {
    bar1[0].style.width = "30%"
    bar1[1].style.width = "30%";
    bar1[2].style.width = "30%";
    bar1[3].style.width = "30%";
    bar1[4].style.width = "30%";
    }
})
