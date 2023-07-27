// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',()=>{
    // the toggle method adds a new class to the element if it doesnt have it and removes the class if it has it. In order to add a new class to an element use the property classList, it gives all the classes the element has and also allows access to different methods like add remove and toggle. Below the class 'change' is being added to navbar and the menu icon
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// End of Navbar