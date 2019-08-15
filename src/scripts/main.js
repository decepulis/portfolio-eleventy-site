import '../styles/base.scss'

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);

function highlightBlocks(selector) {
    document.querySelectorAll(selector).forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function applyThemeClass(theme) {
    const html = document.querySelector('html');

    html.className = '';
    html.classList.add(theme);
}

function updateTheme(e) {
    const theme = document.querySelector('#theme').value;
    switch (theme) {
        case 'rad':
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
            applyThemeClass('nineteen-eighty-nine');
            break;
        case '2019':
            applyThemeClass('twenty-ninteen');
            break;
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector('#theme').addEventListener('change', updateTheme);
    updateTheme();
});
