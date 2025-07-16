/**
 * Varodimex Website JavaScript
 * Main functionality and interactions
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

/**
 * Main initialization function
 */
function initializeWebsite() {
    initializeAOS();
    initializeNavigation();
    initializeSmoothScrolling();
    initializeActiveNavLinks();
    initializeContactForm();
    initializeLazyLoading();
    initializeIntersectionObserver();
    initializeLoadingStates();
    initializeAccessibility();
    initializeBakerySlider();
    initializeRevenueChart();
    
    console.log('Varodimex website initialized successfully');
}

/**
 * Initialize bakery image slider functionality
 */
function initializeBakerySlider() {
    // Set default image back to bakery-primary.jpg on page load
    const mainImage = document.getElementById('bakery-main-image');
    const mainTitle = document.getElementById('bakery-main-title');
    const mainDescription = document.getElementById('bakery-main-description');
    
    if (mainImage && mainTitle && mainDescription) {
        mainImage.src = 'assets/images/bakery-primary.jpg';
        mainTitle.textContent = 'Tradiție & Calitate';
        mainDescription.textContent = 'Produse artizanale coápte zilnic cu ingrediente naturale';
    }
}

/**
 * Change the main bakery image when thumbnail is clicked
 */
function changeBakeryMainImage(imageSrc, title, description) {
    const mainImage = document.getElementById('bakery-main-image');
    const mainTitle = document.getElementById('bakery-main-title');
    const mainDescription = document.getElementById('bakery-main-description');
    
    if (mainImage && mainTitle && mainDescription) {
        // Add fade effect
        mainImage.style.opacity = '0.5';
        mainTitle.style.opacity = '0.5';
        mainDescription.style.opacity = '0.5';
        
        setTimeout(() => {
            mainImage.src = imageSrc;
            mainTitle.textContent = title;
            mainDescription.textContent = description;
            
            // Fade back in
            mainImage.style.opacity = '1';
            mainTitle.style.opacity = '1';
            mainDescription.style.opacity = '1';
        }, 250);
    }
}

/**
 * Initialize AOS (Animate On Scroll) library
 */
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-quad'
        });
    }
}

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    const menuIcon = mobileMenuButton.querySelector('svg path.inline-flex');
    const closeIcon = mobileMenuButton.querySelector('svg path.hidden');
    
    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target) && 
            !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });
    
    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('shadow-lg', 'navbar-glass');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('shadow-lg', 'navbar-glass');
            navbar.classList.add('shadow-sm');
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Add animation
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-10px)';
        
        requestAnimationFrame(() => {
            mobileMenu.style.transition = 'all 0.3s ease';
            mobileMenu.style.opacity = '1';
            mobileMenu.style.transform = 'translateY(0)';
        });
    }
    
    function closeMobileMenu() {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update URL without triggering scroll
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

/**
 * Initialize active navigation link highlighting
 */
function initializeActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-120px 0px -60% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSection = entry.target.getAttribute('id');
                updateActiveNavLink(currentSection);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    function updateActiveNavLink(currentSection) {
        navLinks.forEach(link => {
            link.classList.remove('text-primary-600');
            link.classList.add('text-gray-700');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('text-primary-600');
                link.classList.remove('text-gray-700');
            }
        });
    }
}

/**
 * Initialize contact form functionality
 */
function initializeContactForm() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateForm(data)) {
            showFormMessage('Vă rugăm să completați toate câmpurile obligatorii și să acceptați termenii și condițiile.', 'error');
            return;
        }
        
        // Submit form
        submitContactForm(data, this);
    });
    
    // Real-time validation
    const requiredFields = contactForm.querySelectorAll('input[required], textarea[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    function validateForm(data) {
        return data.nume && 
               data.email && 
               isValidEmail(data.email) && 
               data.subiect && 
               data.mesaj && 
               data.gdpr;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const isValid = field.type === 'email' ? isValidEmail(value) : value !== '';
        
        if (!isValid) {
            showFieldError(field);
        } else {
            clearFieldError(field);
        }
        
        return isValid;
    }
    
    function showFieldError(field) {
        field.classList.add('border-red-500');
        field.classList.remove('border-gray-300');
        
        let errorMsg = field.parentNode.querySelector('.field-error');
        if (!errorMsg) {
            errorMsg = document.createElement('p');
            errorMsg.className = 'field-error text-red-500 text-sm mt-1';
            field.parentNode.appendChild(errorMsg);
        }
        
        if (field.type === 'email') {
            errorMsg.textContent = 'Vă rugăm să introduceți o adresă de email validă.';
        } else {
            errorMsg.textContent = 'Acest câmp este obligatoriu.';
        }
    }
    
    function clearFieldError(field) {
        field.classList.remove('border-red-500');
        field.classList.add('border-gray-300');
        
        const errorMsg = field.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function submitContactForm(data, form) {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Se trimite...';
        submitButton.disabled = true;
        submitButton.classList.add('opacity-75');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            showFormMessage('Mulțumim pentru mesaj! Vă vom contacta în curând.', 'success');
            form.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-75');
        }, 2000);
    }
    
    function showFormMessage(message, type) {
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message p-4 rounded-lg mb-6 ${
            type === 'error' ? 'bg-red-100 text-red-700 border border-red-200' : 
            'bg-green-100 text-green-700 border border-green-200'
        }`;
        messageDiv.textContent = message;
        
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

/**
 * Initialize lazy loading for images
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                    
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

/**
 * Initialize intersection observer for animations
 */
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.animate-on-scroll');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fade-in-up');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}

/**
 * Initialize loading states
 */
function initializeLoadingStates() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Remove loading classes
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(el => {
            el.classList.remove('loading');
        });
    });
}

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = 'Sări la conținutul principal';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on Escape
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        }
        
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Announce page changes for screen readers
    function announcePageChange(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Announce section changes
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionTitle = entry.target.querySelector('h2')?.textContent;
                if (sectionTitle) {
                    announcePageChange(`Navigat la secțiunea: ${sectionTitle}`);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Utility Functions
 */

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 80) {
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Local storage helpers
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Could not save to localStorage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.warn('Could not read from localStorage:', error);
        return null;
    }
}

// Analytics and tracking (placeholder)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    console.log('Event tracked:', { category, action, label });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // You can send error reports to your analytics service here
    trackEvent('JavaScript Error', e.error.name, e.error.message);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log('Page load time:', pageLoadTime + 'ms');
            trackEvent('Performance', 'Page Load Time', pageLoadTime);
        }, 0);
    });
}

/**
 * Google Maps Integration
 */

// Global variables for map
let map;
let markers = [];
let infoWindows = [];

// Store locations data
const storeLocations = {
    'atlantis-dor': {
        name: 'Atlantis DOR',
        address: 'str. Busuiocului, nr. 8A, Bistrița',
        coords: { lat: 47.1342, lng: 24.4968 },
        type: 'store'
    },
    'atlantis-10': {
        name: 'Atlantis 10',
        address: 'str. George Enescu, nr. 1, Bistrița',
        coords: { lat: 47.1355, lng: 24.4985 },
        type: 'store'
    },
    'atlantis-20': {
        name: 'Atlantis 20',
        address: 'str. General Grigore Bălan, nr. 48, Bistrița',
        coords: { lat: 47.1380, lng: 24.5012 },
        type: 'store'
    },
    'atlantis-casa-alba': {
        name: 'Atlantis CASA ALBĂ',
        address: 'str. Independenței, nr. 1-2, Bistrița',
        coords: { lat: 47.1348, lng: 24.4995 },
        type: 'store'
    },
    'atlantis-dacapo': {
        name: 'Atlantis DACAPO',
        address: 'str. Andrei Mureșanu, nr. 15, Bistrița',
        coords: { lat: 47.1325, lng: 24.4945 },
        type: 'store'
    },
    'atlantis-dacia': {
        name: 'Atlantis DACIA',
        address: 'str. Decebal, nr. 28, Bistrița',
        coords: { lat: 47.1365, lng: 24.4922 },
        type: 'store'
    },
    'atlantis-denar': {
        name: 'Atlantis DENAR',
        address: 'str. General Grigore Bălan, nr. 7, Bistrița',
        coords: { lat: 47.1372, lng: 24.5005 },
        type: 'store'
    },
    'atlantis-delta': {
        name: 'Atlantis DELTA',
        address: 'Cartier Viișoara, nr. 90, scara A, bl 1, Bistrița',
        coords: { lat: 47.1295, lng: 24.4892 },
        type: 'store'
    },
    'atlantis-3d': {
        name: 'Atlantis 3D / Casa cu Pâine',
        address: 'str. Libertății, nr. 52, Bistrița',
        coords: { lat: 47.1338, lng: 24.4958 },
        type: 'bakery'
    },
    'atlantis-tq': {
        name: 'Atlantis TQ',
        address: 'str. Dragoș Vodă, nr. 2, parter scara E, Bistrița',
        coords: { lat: 47.1315, lng: 24.4975 },
        type: 'store'
    },
    'sediu-depozit': {
        name: 'Sediu/Depozit',
        address: 'Cartier Viișoara, nr. 62/U, Bistrița',
        coords: { lat: 47.1288, lng: 24.4885 },
        type: 'headquarters'
    }
};

/**
 * Initialize Google Map
 */
function initMap() {
    const mapContainer = document.getElementById('atlantis-interactive-map');
    if (!mapContainer) {
        console.warn('Map container not found');
        return;
    }

    // Remove loading indicator
    mapContainer.innerHTML = '';

    // Center map on Bistrița
    const bistritsaCenter = { lat: 47.1332, lng: 24.4960 };

    // Initialize map
    map = new google.maps.Map(mapContainer, {
        zoom: 14,
        center: bistritsaCenter,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
    });

    // Add markers for all stores
    addMarkersToMap();

    console.log('Google Maps initialized successfully');
}

/**
 * Add markers to the map
 */
function addMarkersToMap() {
    Object.keys(storeLocations).forEach(storeId => {
        const store = storeLocations[storeId];
        
        // Use same blue color for all markers
        let markerColor = '#00309a'; // Primary blue for all stores

        // Create custom pin marker
        const marker = new google.maps.Marker({
            position: store.coords,
            map: map,
            title: store.name,
            animation: google.maps.Animation.DROP,
            icon: {
                path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                fillColor: markerColor,
                fillOpacity: 0.9,
                strokeColor: '#ffffff',
                strokeWeight: 2,
                scale: 1.2,
                anchor: new google.maps.Point(12, 24)
            }
        });

        // Create info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="p-3 max-w-xs">
                    <h3 class="font-bold text-gray-900 mb-2">${store.name}</h3>
                    <p class="text-sm text-gray-600 mb-3">${store.address}</p>
                    <div class="flex items-center text-xs text-primary-600">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Magazin ${store.type === 'bakery' ? 'cu brutărie' : store.type === 'headquarters' ? 'sediu' : 'alimentar'}</span>
                    </div>
                </div>
            `
        });

        // Add click listener to marker
        marker.addListener('click', () => {
            // Close all other info windows
            infoWindows.forEach(iw => iw.close());
            
            // Open this info window
            infoWindow.open(map, marker);
            
            // Highlight corresponding store in legend
            highlightStoreInLegend(storeId);
        });

        // Store references
        markers.push({ id: storeId, marker: marker });
        infoWindows.push(infoWindow);
    });
}

/**
 * Focus on a specific store when clicked in legend
 */
function focusOnStore(storeId) {
    const store = storeLocations[storeId];
    if (!store || !map) return;

    // Pan to store location
    map.panTo(store.coords);
    map.setZoom(16);

    // Find and trigger marker click
    const markerData = markers.find(m => m.id === storeId);
    if (markerData) {
        google.maps.event.trigger(markerData.marker, 'click');
    }

    // Highlight store in legend
    highlightStoreInLegend(storeId);

    // Animate marker
    const marker = markerData?.marker;
    if (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => {
            marker.setAnimation(null);
        }, 1500);
    }
}

/**
 * Highlight store in legend
 */
function highlightStoreInLegend(storeId) {
    // Remove previous highlights
    document.querySelectorAll('.store-item').forEach(item => {
        item.classList.remove('bg-primary-50', 'border-primary-300', 'shadow-md');
        item.classList.add('border-transparent');
    });

    // Highlight selected store
    const storeElement = document.querySelector(`[data-store="${storeId}"]`);
    if (storeElement) {
        storeElement.classList.add('bg-primary-50', 'border-primary-300', 'shadow-md');
        storeElement.classList.remove('border-transparent');
        
        // Scroll into view if needed
        storeElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }
}

/**
 * Reset map view to show all locations
 */
function resetMapView() {
    if (!map) return;

    // Close all info windows
    infoWindows.forEach(iw => iw.close());

    // Remove all store highlights
    document.querySelectorAll('.store-item').forEach(item => {
        item.classList.remove('bg-primary-50', 'border-primary-300', 'shadow-md');
        item.classList.add('border-transparent');
    });

    // Reset all marker animations
    markers.forEach(markerData => {
        if (markerData.marker) {
            markerData.marker.setAnimation(null);
        }
    });

    // Calculate bounds to fit all markers
    const bounds = new google.maps.LatLngBounds();
    Object.values(storeLocations).forEach(store => {
        bounds.extend(store.coords);
    });

    // Fit map to show all markers with padding
    map.fitBounds(bounds, {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    });

    // Ensure minimum zoom level
    google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
        if (map.getZoom() > 15) {
            map.setZoom(15);
        }
    });

    console.log('Map view reset to show all locations');
}

/**
 * Initialize revenue chart using Chart.js
 */
function initializeRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    // Revenue data from 2015 to 2024 (actual numbers in RON)
    const revenueData = [21854743, 24528220, 27565077, 26505926, 33686208, 39706240, 41579349, 52685526, 59715274, 69023944];
    const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Cifra de afaceri (milioane RON)',
                data: revenueData,
                borderColor: '#00309a',
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null;
                    
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(0, 48, 154, 0.2)');
                    gradient.addColorStop(1, 'rgba(0, 48, 154, 0.02)');
                    return gradient;
                },
                pointBackgroundColor: function(context) {
                    return context.dataIndex === revenueData.length - 1 ? '#ffff00' : '#00309a';
                },
                pointBorderColor: '#00309a',
                pointBorderWidth: 2,
                pointRadius: function(context) {
                    return context.dataIndex === revenueData.length - 1 ? 8 : 6;
                },
                pointHoverRadius: function(context) {
                    return context.dataIndex === revenueData.length - 1 ? 10 : 8;
                },
                tension: 0.4,
                fill: true,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 48, 154, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#00309a',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false,
                                         callbacks: {
                         label: function(context) {
                             const value = context.parsed.y;
                             return `${(value / 1000000).toFixed(2)} milioane RON`;
                         }
                     }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6b7280',
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                                 y: {
                     beginAtZero: true,
                     max: 75000000,
                     grid: {
                         color: 'rgba(0, 0, 0, 0.1)',
                         drawBorder: false
                     },
                     ticks: {
                         color: '#6b7280',
                         font: {
                             size: 12,
                             weight: '500'
                         },
                         callback: function(value) {
                             return (value / 1000000).toFixed(0) + 'M';
                         }
                     }
                 }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            elements: {
                line: {
                    capBezierPoints: false
                }
            }
        }
    });
}

// Make functions globally available
window.focusOnStore = focusOnStore;
window.resetMapView = resetMapView;