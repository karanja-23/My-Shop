const images = [
    './media/slider.coats.png',
    "./media/slider.pants.png",
    "./media/slider.shirts.png",
    "./media/slider.shoes.png"

]
let currentIndex = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('#slider img')

function updateSlider(){
    slider.src = images[currentIndex];
}
//prev.addEventListener('click', function(){
  //  currentIndex = (currentIndex === 0) ? images.length -1 : currentIndex - 1;
    //updateSlider();
//});
//updateSlider();
//next.addEventListener('click', update);
function update (){
   currentIndex = (currentIndex === 0) ? images.length -1 : currentIndex -1;
    updateSlider();
}
 setInterval( function(){
    update();
 },5000)

 const menuBar = document.querySelector('#bars');
 const closeIcon = document.querySelector('#close'); 
 const displayMenu = document.querySelector('.mobile_menu');
 menuBar.addEventListener('click', function(){
    displayMenu.style.display = 'block';
 })

 closeIcon.addEventListener('click', function(){
    displayMenu.style.display = 'none';
 })