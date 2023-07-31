const menuContent = document.querySelector('.menuContent');
const menuList = document.querySelector('.menuList');

menuContent.addEventListener('focus', () => {
  menuList.style.zIndex = 1;
});

menuContent.addEventListener('blur', () => {
  setTimeout(() => {
    menuList.style.zIndex = -1;
  }, 700);
});
