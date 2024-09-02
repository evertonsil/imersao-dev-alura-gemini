//alternando entre tema claro e escuro
document.getElementById('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var themeIconClaro = document.getElementById('theme-icon-claro');
    var themeIconEscuro = document.getElementById('theme-icon-escuro');

    if (root.getAttribute('data-bs-theme') === 'dark') {
        root.setAttribute('data-bs-theme', 'light');
        themeIconClaro.style.display = 'none';
        themeIconEscuro.style.display = 'inline';
    } else {
        root.setAttribute('data-bs-theme', 'dark');
        themeIconClaro.style.display = 'inline';
        themeIconEscuro.style.display = 'none';
    }
});
