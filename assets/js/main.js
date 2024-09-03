//alternando entre tema claro e escuro
document.getElementById('theme-toggle').addEventListener('click', function () {
    let root = document.documentElement;
    let themeIconClaro = document.getElementById('theme-icon-claro');
    let themeIconEscuro = document.getElementById('theme-icon-escuro');
    let logo = document.getElementById('porscheLogo');
    let header = document.querySelector('header');

    if (root.getAttribute('data-bs-theme') === 'dark') {
        root.setAttribute('data-bs-theme', 'light');
        themeIconClaro.style.display = 'none';
        themeIconEscuro.style.display = 'inline';
        logo.style.fill = '#212529';
        header.style.backgroundColor = '#00000017';
    } else {
        root.setAttribute('data-bs-theme', 'dark');
        themeIconClaro.style.display = 'inline';
        themeIconEscuro.style.display = 'none';
        logo.style.fill = '#ffffff';
        header.style.backgroundColor = '#ffffff17';
    }
});
