// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                mobileMenu.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            } else {
                mobileMenu.classList.add('active');
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
    }
});

// Menu Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuTabContents = document.querySelectorAll('.menu-tab-content');

    // Check URL parameters for tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    // Set initial active tab
    if (tabParam) {
        setActiveTab(tabParam);
    }

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            setActiveTab(tabName);
            
            // Update URL without reloading page
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('tab', tabName);
            window.history.pushState({}, '', newUrl);
        });
    });

    function setActiveTab(tabName) {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        menuTabContents.forEach(c => c.classList.remove('active'));

        // Add active class to selected tab
        const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
        const selectedContent = document.getElementById(tabName);

        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
        }
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add active class to current page nav link
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || 
            (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Simple fade-in animation for elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add fade-in effect to cards
    const cards = document.querySelectorAll('.service-card, .menu-item, .review-card, .about-image');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});
