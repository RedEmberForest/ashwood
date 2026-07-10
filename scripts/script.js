const hamButton = document.querySelector('#hamburger-menu');
const navigation = document.querySelector('.navigation');
const year = document.querySelector('#current-year');

year.innerHTML = `${new Date().getFullYear()}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})