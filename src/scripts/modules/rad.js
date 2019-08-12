const root = document.documentElement;
export function updateColor() {
    // range: from green (100) to orange (360+20), skipping yellow
    const randVal = Math.random() * 280 + 100;

    const saturation = 100;

    // background (Background)
    const hb = randVal;
    const sb = saturation; // dark 15
    const lb = 95; // dark 30

    // header1 (H1, H2)
    const h1 = randVal - 20;
    const s1 = saturation;
    const l1 = 30; // dark 90

    // header3 (H3-H6)
    const h3 = randVal + 20;
    const s3 = saturation;
    const l3 = 30; // dark 90

    // Text
    const ht = randVal;
    const st = saturation;
    const lt = 20; // dark 98

    // Accent
    const ha = randVal + 180;
    const sa = saturation;
    const la = 60; // dark 90

    root.style.setProperty('--background', `hsl(${hb}, ${sb}%, ${lb}%)`);

    root.style.setProperty('--header1', `hsl(${h1}, ${s1}%, ${l1}%)`);
    root.style.setProperty('--header3', `hsl(${h3}, ${s3}%, ${l3}%)`);

    root.style.setProperty('--text', `hsl(${ht}, ${st}%, ${lt}%)`);
    root.style.setProperty('--accent', `hsl(${ha}, ${sa}%, ${la}%)`);

}