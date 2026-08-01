// Smooth entrance animation
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById('cardProduct').classList.add('show');
    }, 150);
});

// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Dynamic Size Options based on Color Selection
function updateSizeOptions() {
    const warnaSelect = document.getElementById('warna').value;
    const ukuranSelect = document.getElementById('ukuran');
    
    ukuranSelect.innerHTML = '<option value="" disabled selected>-- Pilih Ukuran --</option>';
    
    let sizes = [];
    if (warnaSelect === 'Pink') {
        sizes = ['36', '37', '38', '39', '40'];
    } else if (['Hitam Putih', 'Merah', 'Biru Muda'].includes(warnaSelect)) {
        sizes = ['36', '37', '38', '39', '40', '41', '42', '43'];
    }

    sizes.forEach(size => {
        const opt = document.createElement('option');
        opt.value = size;
        opt.textContent = 'Ukuran ' + size;
        ukuranSelect.appendChild(opt);
    });
}

// Send Order to WhatsApp Function
function sendToWhatsApp(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const noHp = document.getElementById('no_hp').value.trim();
    const warna = document.getElementById('warna').value;
    const ukuran = document.getElementById('ukuran').value;
    const alamat = document.getElementById('alamat').value.trim();
    const phoneNumber = '628987686501';

    const message = `Halo Admin REVSCOLL STORE, Saya ingin memesan produk eksklusif:\n\n` +
                    `Nama: ${nama}\n` +
                    `No hp: ${noHp}\n` +
                    `Warna: ${warna}\n` +
                    `Ukuran: ${ukuran}\n` +
                    `Alamat lengkap (termasuk patokan rumah): ${alamat}\n\n` +
                    `Mohon proses pesanan saya. Terima kasih!`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Lightbox Interactive Functions
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('productLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('productLightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
// Dynamic card entrance animation on load
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 150 * (index + 1));
    });
});

// Toggle Mobile/Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Lightbox Interactive Functions for Zooming Product Images
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('productLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('productLightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox on pressing 'Escape' key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
<!-- Script JavaScript Pendukung -->
    <script>
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('active');
        }
        function openLightbox(imgSrc) {
            const lightbox = document.getElementById('productLightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        }
        function closeLightbox() {
            document.getElementById('productLightbox').style.display = 'none';
        }
    // ===== KODE REVSCOLL STORE - AMAN DARI TABRAKAN =====
document.addEventListener('DOMContentLoaded', () => {

  // 1. MENU MOBILE REVSCOLL
  const revsHamburgerBtn = document.getElementById('hamburgerBtn');
  const revsMobileMenu = document.getElementById('mobileMenu');
  
  if(revsHamburgerBtn && revsMobileMenu){
    revsHamburgerBtn.addEventListener('click', function() {
      revsMobileMenu.classList.toggle('active');
    });

    // Auto close pas klik menu
    document.querySelectorAll('#mobileMenu a').forEach(function(revsMenuLink) {
      revsMenuLink.addEventListener('click', function() {
        revsMobileMenu.classList.remove('active');
      });
    });
  }

  // 2. LIGHTBOX PRODUK REVSCOLL
  const revsLightbox = document.getElementById('productLightbox');
  const revsLightboxImg = document.getElementById('lightboxImg');
  const revsLightboxClose = document.getElementById('lightboxClose');

  if(revsLightbox && revsLightboxImg){
    // Buka lightbox pas klik gambar
    document.querySelectorAll('.media-container').forEach(function(revsMediaItem) {
      revsMediaItem.addEventListener('click', function() {
        revsLightboxImg.src = this.dataset.src;
        revsLightbox.classList.add('active');
      });
    });

    // Tutup lightbox pas klik tombol X
    if(revsLightboxClose){
      revsLightboxClose.addEventListener('click', function() {
        revsLightbox.classList.remove('active');
      });
    }

    // Tutup lightbox pas klik background hitam
    revsLightbox.addEventListener('click', function(e) {
      if(e.target === revsLightbox){
        revsLightbox.classList.remove('active');
      }
    });
  }

});
// ===== SELESAI KODE REVSCOLL =====
