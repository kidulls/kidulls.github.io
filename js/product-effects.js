/**
 * Product Image Zoom & Cool Fonts Manager
 * Created for interactive product galleries and dynamic styling.
 */

// ==========================================
// 1. PRODUCT IMAGE LIGHTBOX / ZOOM VIEWER
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    // Inject lightbox modal HTML structure into the body dynamically
    const modalHTML = `
        <div id="product-lightbox-modal" style="
            display: none;
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(5px);
        ">
            <span id="lightbox-close" style="
                position: absolute;
                top: 25px;
                right: 35px;
                color: #fff;
                font-size: 40px;
                font-weight: bold;
                cursor: pointer;
                transition: color 0.2s;
                user-select: none;
            ">&times;</span>
            <img id="lightbox-img" style="
                max-width: 90%;
                max-height: 90%;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                transform: scale(0.95);
                transition: transform 0.3s ease;
            ">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('product-lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    // Find all images with class 'zoomable-product' or custom attribute
    const productImages = document.querySelectorAll('.zoomable-product, img[data-zoom]');

    productImages.forEach(img => {
        // Add pointer cursor to indicate clickability
        img.style.cursor = 'zoom-in';
        img.style.transition = 'transform 0.2s ease';

        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.02)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });

        img.addEventListener('click', function () {
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
                modalImg.style.transform = 'scale(1)';
            }, 10);
            
            // Use high-res source if provided in data-original or fallback to src
            const fullSizeSrc = this.getAttribute('data-original') || this.src;
            modalImg.src = fullSizeSrc;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close Modal Functions
    function closeModal() {
        modal.style.opacity = '0';
        modalImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});


// ==========================================
// 2. COOL FONTS DYNAMIC LOADER & STYLER
// ==========================================
/**
 * Loads popular Google Fonts dynamically and applies them to targeted elements.
 * Available Font Presets: 'cyberpunk', 'elegant', 'modern', 'playful', 'retro'
 */
function loadCoolFont(fontName) {
    const fontMap = {
        'cyberpunk': 'Orbitron',
        'elegant': 'Playfair Display',
        'modern': 'Poppins',
        'playful': 'Fredoka',
        'retro': 'Bungee'
    };

    const targetFamily = fontMap[fontName.toLowerCase()] || fontName;
    const formattedFamilyName = targetFamily.replace(/\s+/g, '+');

    // Check if font is already loaded
    const linkId = `google-font-${fontName.toLowerCase().replace(/\s+/g, '-')}`;
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${formattedFamilyName}:wght@400;600;700&display=swap`;
        document.head.appendChild(link);
    }

    // Apply font to elements with class 'cool-font' or custom selector
    const elements = document.querySelectorAll('.cool-font, [data-cool-font]');
    elements.forEach(el => {
        el.style.fontFamily = `\"${targetFamily}\", sans-serif`;
    });

    console.log(`Cool font applied: ${targetFamily}`);
}

// Auto-initialize cool fonts if data attributes exist on DOM load
document.addEventListener("DOMContentLoaded", function () {
    const styledElements = document.querySelectorAll('[data-cool-font]');
    styledElements.forEach(el => {
        const fontStyle = el.getAttribute('data-cool-font');
        loadCoolFont(fontStyle);
    });
});
