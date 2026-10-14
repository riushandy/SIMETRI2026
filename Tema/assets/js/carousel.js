const realms = [
    {
        name: 'IGNIS REALM', short: 'Ignis',
        bg: '../assets/images/carousel/ignis.jpg', card: '../assets/images/carousel/card-ignis.svg',
        glow: '#FF6A1A',
        desc: 'Di bawah langit merah dan tanah berlava, warga Ignis nggak kenal kata mundur. Mereka selalu jadi yang pertama maju saat yang lain masih berpikir. "Api tidak menunggu angin. Api menciptakannya." 🔥'
    },
    {
        name: 'AQUARIA KINGDOM', short: 'Aquaria',
        bg: '../assets/images/carousel/aquatic.jpg', card: '../assets/images/carousel/card-aquatic.svg',
        glow: '#41C2F3',
        desc: 'Di dasar laut yang tak terjangkau cahaya, warga Aquaria tenang, sabar, dan jeli membaca situasi. Mereka mengalir lewat celah yang tak terlihat siapa pun. "Air tidak melawan batu. Air menunggu sampai batu yang menyerah." 💧'
    },
    {
        name: 'TERRA DOMINION', short: 'Terra',
        bg: '../assets/images/carousel/terra.jpg', card: '../assets/images/carousel/card-terra.svg',
        glow: '#C07E4E',
        desc: 'Kerajaan tertua di Arksivara ini dihuni warga yang jarang bicara, tapi selalu menyelesaikan. Pondasi dulu, baru lantai dua. "Gunung tidak terburu-buru. Tapi gunung selalu ada ketika yang lain sudah runtuh." 🪨'
    },
    {
        name: 'VENTURA EMPIRE', short: 'Ventura',
        bg: '../assets/images/carousel/ventura.jpg', card: '../assets/images/carousel/card-ventura.svg',
        glow: '#E6EFB0',
        desc: 'Tanpa tembok dan tanpa rumah tetap, Ventura berpindah mengikuti angin. Saat situasi berubah, mereka sudah berubah duluan. "Kami tidak punya rumah yang tetap karena kami tidak pernah berhenti bergerak maju." 🌬️'
    },
    {
        name: 'FULGUR CLAN', short: 'Fulgur',
        bg: '../assets/images/carousel/fulgur.jpg', card: '../assets/images/carousel/card-flugur.svg',
        glow: '#FFB020',
        desc: 'Di dataran badai yang ditakuti orang lain, warga Fulgur menemukan rumah. Setiap langkah dihitung, dan sekali bergerak, secepat kilat. "Petir tidak pernah memperingatkan. Petir hanya menyambar." ⚡'
    },
    {
        name: 'GLACIA LAND', short: 'Glacia',
        bg: '../assets/images/carousel/glacia.jpg', card: '../assets/images/carousel/card-glacia.svg',
        glow: '#7BD1EF',
        desc: 'Di utara yang dihiasi aurora, warga Glacia tak mudah terprovokasi dan tak pernah gegabah. Mereka tahu waktu berpihak pada yang tenang. "Es tidak meledak. Es menunggu sampai semuanya diam dan membeku." ❄️'
    },
    {
        name: 'VERDANT WOODS', short: 'Verdant Woods',
        bg: '../assets/images/carousel/verdant.jpg', card: '../assets/images/carousel/card-verdant.svg',
        glow: '#98BD49',
        desc: 'Kerajaan hutan yang benar-benar hidup, dihuni warga yang percaya bahwa pertumbuhan tak bisa dipaksakan. Merawat, konsisten, dan sabar. "Pohon terbesar di hutan ini pun dulunya hanya sebuah benih yang tidak ada yang perhatikan." 🌿'
    },
    {
        name: 'CANDORIA', short: 'Candoria',
        bg: '../assets/images/carousel/candoria.jpg', card: '../assets/images/carousel/card-candoria.svg',
        glow: '#FBA4B5',
        desc: 'Istananya dari gula, tapi jangan remehkan mereka. Saat yang lain mencari solusi lama, warga Candoria menciptakan yang belum pernah terpikirkan. "Jangan remehkan yang manis. Racun paling mematikan pun selalu datang dengan rasa yang menyenangkan." 🍬'
    },
    {
        name: 'NOCTURNA ENCLAVE', short: 'Nocturna',
        bg: '../assets/images/carousel/nocturna.jpg', card: '../assets/images/carousel/card-nocturna.svg',
        glow: '#3E588F',
        desc: 'Di bawah langit malam yang selalu berbintang, warga Nocturna bekerja dalam sunyi dan menyelesaikan dalam sunyi, lalu hasilnya mengejutkan semua orang. "Bayangan tidak menghilang saat lampu padam. Justru di situlah ia paling berkuasa." 🌑'
    },
    {
        name: 'MECHA FORGE', short: 'Mecha Forge',
        bg: '../assets/images/carousel/mecha.jpg', card: '../assets/images/carousel/card-mecha.svg',
        glow: '#61A059',
        desc: 'Kerajaan baja dan roda gigi ini dibangun sepenuhnya oleh tangan manusia. Warganya tak percaya keberuntungan, hanya sistem dan rencana yang teruji. "Mesin tidak pernah salah. Hanya manusia yang salah membangunnya." 🤖'
    },
];

// preload gambar
realms.forEach(r => { new Image().src = r.bg; new Image().src = r.card; });

const text = document.getElementById('realmText');
const nameEl = document.getElementById('realmName');
const descEl = document.getElementById('realmDescription'); 
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
        
        // Update deskripsi teks jika elemennya ada
        if (descEl && r.desc) {
            descEl.textContent = r.desc;
        }

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