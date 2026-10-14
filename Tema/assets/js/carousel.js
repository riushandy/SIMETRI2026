const realms = [
    {
        name: 'IGNIS REALM', short: 'Ignis',
        bg: '../assets/images/carousel/ignis.jpg', card: '../assets/images/carousel/card-ignis.svg',
        glow: '#FF6A1A', btnA: '#F36F41', btnB: '#F39241', btnBorder: '#F3B641', btnShadow: '#6E3418', link: ''
    },
    {
        name: 'AQUARIA KINGDOM', short: 'Aquaria',
        bg: '../assets/images/carousel/aquatic.jpg', card: '../assets/images/carousel/card-aquatic.svg',
        glow: '#41C2F3', btnA: '#419FF3', btnB: '#41C2F3', btnBorder: '#41E6F3', btnShadow: '#1B4E8C', link: ''
    },
    {
        name: 'VENTURA EMPIRE', short: 'Ventura',
        bg: '../assets/images/carousel/ventura.jpg', card: '../assets/images/carousel/card-ventura.svg',
        glow: '#E6EFB0', btnA: '#4AA294', btnB: '#5AB3AD', btnBorder: '#C4DCAC', btnShadow: '#2C5E55', link: ''
    },
    {
        name: 'FULGUR CLAN', short: 'Fulgur',
        bg: '../assets/images/carousel/fulgur.jpg', card: '../assets/images/carousel/card-flugur.svg',
        glow: '#FFB020', btnA: '#FF9730', btnB: '#FFD943', btnBorder: '#FFF3C6', btnShadow: '#8A4A10', link: ''
    },
    {
        name: 'NOCTURNA ENCLAVE', short: 'Nocturna',
        bg: '../assets/images/carousel/nocturna.jpg', card: '../assets/images/carousel/card-nocturna.svg',
        glow: '#3E588F', btnA: '#203562', btnB: '#3E588F', btnBorder: '#C0C5CD', btnShadow: '#101C3A', link: ''
    },
    {
        name: 'VERDANT WOODS', short: 'Verdant Woods',
        bg: '../assets/images/carousel/verdant.jpg', card: '../assets/images/carousel/card-verdant.svg',
        glow: '#98BD49', btnA: '#528123', btnB: '#98BD49', btnBorder: '#EBF8A9', btnShadow: '#2E4A12', link: ''
    },
    {
        name: 'TERRA DOMINION', short: 'Terra',
        bg: '../assets/images/carousel/terra.jpg', card: '../assets/images/carousel/card-terra.svg',
        glow: '#C07E4E', btnA: '#7A3D21', btnB: '#C07E4E', btnBorder: '#F9DCB4', btnShadow: '#3A1709', link: ''
    },
    {
        name: 'GLACIA LAND', short: 'Glacia',
        bg: '../assets/images/carousel/glacia.jpg', card: '../assets/images/carousel/card-glacia.svg',
        glow: '#7BD1EF', btnA: '#61AED1', btnB: '#7BD1EF', btnBorder: '#BFEBF8', btnShadow: '#2F6E8F', link: ''
    },
    {
        name: 'CANDORIA', short: 'Candoria',
        bg: '../assets/images/carousel/candoria.jpg', card: '../assets/images/carousel/card-candoria.svg',
        glow: '#FBA4B5', btnA: '#FBA4B5', btnB: '#F9B77D', btnBorder: '#FFF184', btnShadow: '#9C4A5E', link: ''
    },
    {
        name: 'MECHA FORGE', short: 'Mecha Forge',
        bg: '../assets/images/carousel/mecha.jpg', card: '../assets/images/carousel/card-mecha.svg',
        glow: '#61A059', btnA: '#085857', btnB: '#61A059', btnBorder: '#61A059', btnShadow: '#043332', link: ''
    },
];

// preload so swaps don't flicker
realms.forEach(r => { new Image().src = r.bg; new Image().src = r.card; });

const text = document.getElementById('realmText');
const nameEl = document.getElementById('realmName');
const btnText = document.getElementById('realmBtnText');
const linkEl = document.getElementById('realmLink');
const card = document.getElementById('realmCard');

let front = document.getElementById('bgA');
let back = document.getElementById('bgB');
let index = 0;
let busy = false;

function go(dir) {
    if (busy || realms.length < 2) return;
    busy = true;
    index = (index + dir + realms.length) % realms.length;
    const r = realms[index];

    // fade out text + card, crossfade background
    text.classList.add('opacity-0');
    card.classList.add('opacity-0');
    back.src = r.bg;
    back.classList.replace('opacity-0', 'opacity-100');
    front.classList.replace('opacity-100', 'opacity-0');

    // swap content while it's invisible
    setTimeout(() => {
        nameEl.textContent = r.name;
        btnText.textContent = 'Take me to ' + r.short;
        linkEl.href = r.link;
        linkEl.style.setProperty('--btn-a', r.btnA);
        linkEl.style.setProperty('--btn-b', r.btnB);
        linkEl.style.setProperty('--btn-border', r.btnBorder);
        linkEl.style.setProperty('--btn-shadow', r.btnShadow);
        card.src = r.card;
        card.style.setProperty('--glow', r.glow);
        text.classList.remove('opacity-0');
        card.classList.remove('opacity-0');
    }, 300);

    // after the crossfade, swap layer roles
    setTimeout(() => {
        [front, back] = [back, front];
        busy = false;
    }, 700);
}

document.getElementById('prevRealm').addEventListener('click', () => go(-1));
document.getElementById('nextRealm').addEventListener('click', () => go(1));