function toggleDrop() {
  var icon = document.getElementById('dropdown-icon');
  var menu = document.getElementById('dropdown-menu');

  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide')
    icon.style.transform = "rotate(180deg)"
  } else {
    menu.classList.add('hide')
    icon.style.transform = "rotate(0deg)"
  }
}


function menu(){
  var navlinks = document.getElementById('nav-links');
  var menuIcon = document.getElementById('menuIcon');

  if(navlinks.classList.contains("flex")){
    navlinks.classList.remove('flex');
    menuIcon.src="/resources/icons8-hamburger-menu-48.png"
  }else{
    navlinks.classList.add('flex');
    menuIcon.src="/resources/icons8-cross-50.png"
  }
}
