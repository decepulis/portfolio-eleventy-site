import '../../styles/themes/rad.scss'

export function updateColor() {
    const root = document.documentElement;
    root.style.setProperty( '--hue', Math.random() * 360 );
}