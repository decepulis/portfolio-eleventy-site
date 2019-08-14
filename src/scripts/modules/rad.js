/*
@param {Array} hsl
expects h in degrees, and 0 <= s, l <= 100
*/

function hsl2rgb(hsl) {
    const h = h > 0
        ? ( hsl[0] % 360 ) / 360
        : ( 360 - ( hsl[0] % 360 ) ) / 360
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        const q = l < 0.5 
            ? l * (1 + s)
            : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [r * 255, g * 255, b * 255];
}

/*
Recommends white or black text in order to maximize contrast,
where contrast is `(L1 + 0.05) / (L2 + 0.05)`
as defined by https://www.w3.org/TR/WCAG20/

following a formula derivation at
https://stackoverflow.com/a/3943023

Experimenting with Firefox's accessibility check
showed cases where 0.179 was too conservative.
Moved parameter to 1.29

@param {Number} c
[r, g, b], where 0 <= r, g, b <= 255
*/
function whiteOrBlackText(c) {
    // convert sRGB values into linear RGB
    c = c.map(cc => {
        cc = cc / 255.0;
        return cc <= 0.03928
            ?  cc/12.92
            : Math.pow(((cc + 0.055) / 1.055), 2.4)
    })
    const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
    
    const threshold = 0.1  // WCAG recommends 1.79
    return L > threshold ? '#000' : '#fff';
}


const root = document.documentElement;
export function updateColor() {
    const randVal = Math.random() * 360;

    const saturation = 100;

    // background
    const bgHue = randVal;
    const bgLight = 60;
    root.style.setProperty(
        '--pageBackground',
        `hsl(${bgHue}, ${saturation}%, ${bgLight}%)`
    );
    root.style.setProperty(
        '--pageColor',
        whiteOrBlackText(
            hsl2rgb([bgHue, saturation, bgLight])
        )
    );

    // text
    const textHue = randVal - 120;
    const textLight = 60;
    root.style.setProperty(
        '--textBackground',
        `hsl(${textHue}, ${saturation}%, ${textLight}%)`
    );
    root.style.setProperty(
        '--textColor',
        whiteOrBlackText(
            hsl2rgb([textHue, saturation, textLight])
        )
    );

    // headers
    const headerHue = randVal + 120;
    const headerLight = 60;
    root.style.setProperty(
        '--headerBackground',
        `hsl(${headerHue}, ${saturation}%, ${headerLight}%)`
    );
    root.style.setProperty(
        '--headerColor',
        whiteOrBlackText(
            hsl2rgb([headerHue, saturation, headerLight])
        )
    );
}