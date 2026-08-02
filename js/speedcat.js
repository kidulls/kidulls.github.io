function toggleMenu() {
    const drawer = document.getElementById('navDrawer');
    drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', 'light');
    }
}

function openLightbox(imageSrc) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightboxModal').style.display = 'none';
}

function updateSizeOptions() {
    const ukuranSelect = document.getElementById('ukuran');
    ukuranSelect.innerHTML = `
        <option value="" disabled selected>-- Pilih Ukuran --</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
    `;
}

function sendToWhatsApp(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const noHp = document.getElementById('no_hp').value;
    const warna = document.getElementById('warna').value;
    const ukuran = document.getElementById('ukuran').value;
    const alamat = document.getElementById('alamat').value;

    const message = `Halo REVSCOLL STORE, saya ingin memesan:%0A%0A*Nama:* ${nama}%0A*No HP:* ${noHp}%0A*Warna:* ${warna}%0A*Ukuran:* ${ukuran}%0A*Alamat:* ${alamat}`;

    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
}