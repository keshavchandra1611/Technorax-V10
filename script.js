//COLLAPSING THE NAVBAR AFTER CLICKING ANY LINK 

const navbarLinks = document.querySelectorAll('.navbar-nav a');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector(`.btn-close`).click();
});
});

//NAVBAR SCROLLING EFFECT

window.onscroll=(ev)=>{
  if (scrollY>300){
      document.querySelector(".navbar").style.background="linear-gradient(109.6deg, rgb(15, 19, 24) 11.2%, rgb(9, 20, 33) 51.2%, rgb(0, 0, 0) 98.6%)";
  }
  else{
    document.querySelector(".navbar").style.background="transparent";
  }
}

// ANIMATION

// let targets = document.querySelectorAll('section');

// window.addEventListener('scroll', function() {
//   let pos = window.scrollY;
//   if (pos > 10) {
//     targets.forEach(element => {
//       element.style.transition = 'opacity 0.5s';
//       element.style.opacity = '0';
//     });
//   } else {
//     targets.forEach(element => {
//       element.style.transition = 'opacity 0.5s';
//       element.style.opacity = '1';
//     });
//   }
// });



// let targets = document.querySelectorAll('.mainBody');

// if (window.scrollY > 10) {
//   targets.forEach(element => element.style.display = 'none');
// }

// window.addEventListener('scroll', function() {
//   let pos = window.scrollY;
//   if (pos > 10) {
//     targets.forEach(element => {
//       element.style.transition = 'opacity 0.5s';
//       element.style.opacity = '0';
//     });
//   } else {
//     targets.forEach(element => {
//       element.style.transition = 'opacity 0.5s';
//       element.style.opacity = '1';
//     });
//   }
// });





