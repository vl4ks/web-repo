// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('test-id'))
// })

const toggleButton1 = document.getElementById('toggle-button-1');
const toggleButton2 = document.getElementById('toggle-button-2');
const hiddenBlock = document.getElementById('hidden-block');
const closeButton = document.getElementById('close-button');

// Показ скрытого блока
toggleButton1.addEventListener('click', () => {
    hiddenBlock.style.display = 'block';
});

toggleButton2.addEventListener('click', () => {
    hiddenBlock.style.display = 'block';
});

// Закрытие скрытого блока
closeButton.addEventListener('click', () => {
    hiddenBlock.style.display = 'none';
});
