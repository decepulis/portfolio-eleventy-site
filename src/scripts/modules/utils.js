export function loadCSS(filename) {
    var loadedStyleSheets = document.styleSheets;
    for (var i = 0, max = loadedStyleSheets.length; i < max; i++) {
        if (loadedStyleSheets[i].href === filename) {
            return;
        }
    }

    var head = document.getElementsByTagName('HEAD')[0];  

    var link = document.createElement('link'); 

    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = filename;  
 
    head.appendChild(link);  
}