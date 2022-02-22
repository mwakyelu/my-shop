 const sideMenu = document.querySelector('aside');
 const menuBtn = document.querySelector('#menuBtn');
 const closeBtn = document.querySelector('#closeBtn');
 const themeToggler = document.querySelector(".themeToggler");


 menuBtn.addEventListener('click', ()=>{
     sideMenu.style.display= 'block';
 })
 closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display= 'none';
});

// toggle theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('darkThemeVariables');
    themeToggler.querySelector('span:nth-child(1').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Change active class on sidebar
var currentLocation = location.href;
var menuLink = document.querySelectorAll('.menuItemLink');
var menuLength = menuLink.length;
for(let i = 0; i <menuLength; i++){
    if(menuLink[i].href === currentLocation){
        menuLink[i].className = " active"
    }
}