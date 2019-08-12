import { loadCSS } from './modules/utils'

function applyThemeClass(theme) {
    const html = document.querySelector('html');

    html.className = '';
    html.classList.add(theme);
}

function updateTheme(e) {
    const theme = document.querySelector('#theme').value;
    switch (theme) {
        case 'rad':
            // Load Style
            loadCSS('/styles/themes/rad.css');
            // Load Behavior
            import(/* webpackChunkName: "rad" */ './modules/rad.js').then(module => {
                applyThemeClass('rad');

                const updateColor = module.updateColor;
                updateColor();
            });
            break;
        case 'paper':
            applyThemeClass('paper');
            break;
        case 'editor':
            applyThemeClass('editor');
            break;
        case '1989':
            applyThemeClass('1989');
            break;
        case '2019':
            applyThemeClass('2019');
            break;
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector('#theme').addEventListener('change', updateTheme);
    updateTheme();
});
