/* ==========================================
   REVSCOLL STORE - MAIN JAVASCRIPT
   ================================---------- */

document.addEventListener("DOMContentLoaded", function() {
    
    /* ------------------------------------------
       1. ANIMASI MASUK KARTU PRODUK (FADE-IN)
       ------------------------------------------ */
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 120 * (index + 1));
    });

    const singleCard = document.getElementById('cardProduct');
    if (singleCard) {
        setTimeout(() => {
            singleCard.classList.add('show');
        }, 150);
    }


    /* ------------------------------------------
       2. MOBILE / HAMBURGER MENU INTERACTION
       ------------------------------------------ */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        // Toggle menu saat tombol hamburger diklik
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
        });

        // Tutup menu otomatis saat salah satu link di dalamnya diklik
        mobileMenu.querySelectorAll('a').forEach(function(menuLink) {
            menuLink.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });

        // Tutup menu jika pengguna mengklik area luar menu
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }


    /* ------------------------------------------
       3. LIGHTBOX INTERACTIVE FUNCTIONS
       ------------------------------------------ */
    const lightbox = document.getElementById('productLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightbox && lightboxImg) {
        // Buka lightbox ketika kontainer media produk diklik
        document.querySelectorAll('.media-container').forEach(function(mediaItem) {
            mediaItem.addEventListener('click', function() {
                // Mendukung atribut data-src atau langsung mengambil elemen <img> di dalamnya
                const targetImg = this.dataset.src || (this.querySelector('img') ? this.querySelector('img').src : '');
                if (targetImg) {
                    lightboxImg.src = targetImg;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Fungsi tutup lightbox
        const closeLightboxAction = function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        // Event listener untuk tombol close (X) jika ada
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightboxAction);
        }

        // Tutup lightbox jika mengklik area latar belakang (backdrop)
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightboxAction();
            }
        });

        // Tutup lightbox menggunakan tombol 'Escape' pada keyboard
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightboxAction();
            }
        });
    }

});


/* ==========================================
   4. DINAMIS UKURAN BERDASARKAN WARNA
   ================================---------- */
function updateSizeOptions() {
    const warnaSelect = document.getElementById('warna');
    const ukuranSelect = document.getElementById('ukuran');

    if (!warnaSelect || !ukuranSelect) return;

    const warnaValue = warnaSelect.value;
    ukuranSelect.innerHTML = '<option value="" disabled selected>-- Pilih Ukuran --</option>';

    let sizes = [];
    if (warnaValue === 'Pink') {
        sizes = ['36', '37', '38', '39', '40'];
    } else if (['Hitam Putih', 'Merah', 'Biru Muda'].includes(warnaValue)) {
        sizes = ['36', '37', '38', '39', '40', '41', '42', '43'];
    }

    sizes.forEach(size => {
        const opt = document.createElement('option');
        opt.value = size;
        opt.textContent = 'Ukuran ' + size;
        ukuranSelect.appendChild(opt);
    });
}


/* ==========================================
   5. KIRIM PESAN KE WHATSAPP
   ================================---------- */
function sendToWhatsApp(event) {
    if (event) event.preventDefault();

    const namaInput = document.getElementById('nama');
    const noHpInput = document.getElementById('no_hp');
    const warnaSelect = document.getElementById('warna');
    const ukuranSelect = document.getElementById('ukuran');
    const alamatInput = document.getElementById('alamat');

    const nama = namaInput ? namaInput.value.trim() : '';
    const noHp = noHpInput ? noHpInput.value.trim() : '';
    const warna = warnaSelect ? warnaSelect.value : '';
    const ukuran = ukuranSelect ? ukuranSelect.value : '';
    const alamat = alamatInput ? alamatInput.value.trim() : '';

    // Validasi sederhana sebelum dikirim
    if (!nama || !noHp || !warna || !ukuran || !alamat) {
        alert('Mohon lengkapi seluruh data formulir pemesanan terlebih dahulu!');
        return;
    }

    const phoneNumber = '628987686501';
    const message = `Halo Admin REVSCOLL STORE, Saya ingin memesan produk eksklusif:\n\n` +
                    `Nama: ${nama}\n` +
                    `No HP: ${noHp}\n` +
                    `Warna: ${warna}\n` +
                    `Ukuran: ${ukuran}\n` +
                    `Alamat Lengkap (termasuk patokan rumah): ${alamat}\n\n` +
                    `Mohon proses pesanan saya. Terima kasih!`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
