 let closeBtn =  document.querySelector(".fa-xmark");
  let rspNav = document.querySelector(".rspNavBar")
  closeBtn.addEventListener('click',()=>{rspNav.style.transform="translateX(100%)"});
  let faBars = document.querySelector(".fa-bars");
  faBars.addEventListener('click',()=>{rspNav.style.transform="translateX(0)"})