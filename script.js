var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000, // Tempo de rolagem em milissegundos
    easing: 'easeInOutCubic' // Tipo de easing
});

// Adicionar um evento de clique em cada item do menu para fechar o menu
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('show');   

    });
});