// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('test-id'))
// })

const menuToggleSmall = document.getElementById('menu-toggle-small');
const menuToggleMedium = document.getElementById('menu-toggle-medium');
const menuClose = document.getElementById('menu-close');
const dropdownMenu = document.getElementById('dropdown');


const openMenu = () => {
    dropdownMenu.style.display = 'block'; // Показываем блок
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку
};

const closeMenu = () => {
    dropdownMenu.style.display = 'none'; // Скрываем блок
    document.body.style.overflow = ''; // Возвращаем прокрутку
};

//события
menuToggleSmall?.addEventListener('click', openMenu);
menuToggleMedium?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);

// Закрытие меню при клике вне его области
dropdownMenu.addEventListener('click', (event) => {
    if (event.target === dropdownMenu) {
        closeMenu();
    }
});
