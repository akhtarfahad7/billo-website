// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.problem-card, .solution-card, .feature-card, .step, .pricing-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = '₨ ' + Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = '₨ ' + target.toLocaleString();
        }
    }
    
    updateCounter();
}

// Trigger counter animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElement = entry.target.querySelector('.stat');
            if (statElement) {
                animateCounter(statElement, 12500);
            }
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.app-stats');
if (heroStats) {
    heroObserver.observe(heroStats);
}

// Add hover effects to cards
document.querySelectorAll('.problem-card, .solution-card, .feature-card, .pricing-card, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy load images (if any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #6A1B9A, #E91E63);
    z-index: 9999;
    transition: width 0.1s;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #6A1B9A;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 9998;
`;
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add mobile menu toggle (if needed)
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `
    <button class="menu-toggle">☰</button>
    <div class="menu-content">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#download" class="btn btn-primary">Free Trial</a>
    </div>
`;
document.body.appendChild(mobileMenu);

// Add mobile menu styles
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    .mobile-menu {
        display: none;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
    }
    
    .menu-toggle {
        background: #6A1B9A;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 20px;
        cursor: pointer;
    }
    
    .menu-content {
        display: none;
        position: absolute;
        top: 60px;
        right: 0;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        min-width: 200px;
    }
    
    .menu-content.active {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .menu-content a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
    }
    
    @media (max-width: 768px) {
        .mobile-menu {
            display: block;
        }
    }
`;
document.head.appendChild(mobileStyle);

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const menuContent = document.querySelector('.menu-content');

if (menuToggle && menuContent) {
    menuToggle.addEventListener('click', () => {
        menuContent.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu')) {
            menuContent.classList.remove('active');
        }
    });
}

// Notify Me
function notifyMe() {
    const input = document.querySelector('.notify-input');
    const val = input?.value?.trim();
    if (!val) { input?.focus(); return; }
    const btn = document.querySelector('.notify-btn');
    btn.textContent = 'Noted!';
    btn.style.background = '#00B894';
    input.value = '';
    setTimeout(() => { btn.textContent = 'Notify Me'; btn.style.background = ''; }, 2000);
}

// PWA Install
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const installSteps = document.getElementById('installSteps');

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
});

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            // PWA install available — show prompt
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                installBtn.textContent = 'Installed!';
                installSteps.textContent = '';
            }
            deferredPrompt = null;
        } else {
            // No install prompt — open app in browser
            window.open('/', '_blank');
        }
    });
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

// Pricing Toggle
const pricingToggle = document.getElementById('pricingToggle');
const toggleLabels = document.querySelectorAll('.toggle-label');
const priceAmounts = document.querySelectorAll('.amount[data-monthly]');

if (pricingToggle) {
    let isYearly = false;
    pricingToggle.addEventListener('click', () => {
        isYearly = !isYearly;
        pricingToggle.classList.toggle('active', isYearly);
        toggleLabels.forEach(l => {
            l.classList.toggle('active', (l.dataset.period === 'yearly') === isYearly);
        });
        priceAmounts.forEach(el => {
            el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
        });
        document.querySelectorAll('.pricing-price .period').forEach(p => {
            if (p.textContent.includes('year')) return;
            p.textContent = isYearly ? '/month (billed yearly)' : '/month';
        });
    });
}