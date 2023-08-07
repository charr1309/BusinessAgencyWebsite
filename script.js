// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',()=>{
    // the toggle method adds a new class to the element if it doesnt have it and removes the class if it has it. In order to add a new class to an element use the property classList, it gives all the classes the element has and also allows access to different methods like add remove and toggle. Below the class 'change' is being added to navbar and the menu icon
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

// using classList, you can add or remove a class without affecting any others the element may have. But if you assign className, it will wipe out any existing classes while adding the new one, or if you assign an empty string it will wipe out all of them. Assigning className can be a convenience for cases where you are certain no other classes will be used on the element but usually you would normally use the classList method exclusively
const playPause = ()=>{
    if(video.paused){
        video.play()
        btn.className = "far fa-pause-circle"
        video.style.opacity = '.7'
    }else{
        video.pause()
        btn.className = "far fa-play-circle"
        video.style.opacity = '.3'
    }

}
btn.addEventListener('click', ()=>{
    playPause()
})

video.addEventListener('timeupdate', ()=>{
    const barWidth = video.currentTime/video.duration
    bar.style.width =  `${barWidth * 100}%`
    if(video.ended){
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3' 

    }
})
// End of Section 2 Video
//Secion 3 Pricing Cards
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 10,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    },   
  }); 
//End of Secion 3 Pricing Cards 