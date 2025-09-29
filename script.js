// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            mobileMenu.classList.toggle('active');
        });
    }

    // Load car details if on car detail page
    if (window.location.pathname.includes('car-detail.html')) {
        loadCarDetails();
    }

    // Add click outside to close mobile menu
    document.addEventListener('click', function(event) {
        if (!mobileMenu?.contains(event.target) && !navMenu?.contains(event.target)) {
            navMenu?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        }
    });
});

// Car data
const cars = {
    1: {
        name: "2024 BMW X5 xDrive40i",
        price: "$65,000",
        year: "2024",
        mileage: "22,000 miles",
        engine: "3.0L Twin Turbo I6",
        drivetrain: "All-Wheel Drive",
        transmission: "8-Speed Automatic",
        fuel: "Premium Gasoline",
        mpg: "22 city / 29 highway",
        exterior: "Alpine White",
        interior: "Black Vernasca Leather",
        features: [
            "Panoramic Sunroof",
            "Heated and Ventilated Seats",
            "Premium Audio System",
            "Navigation System",
            "Wireless Charging",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Automatic Emergency Braking",
            "Parking Assist",
            "LED Headlights"
        ],
        description: "This stunning 2024 BMW X5 combines luxury, performance, and advanced technology. With its powerful twin-turbo engine and sophisticated all-wheel-drive system, it delivers exceptional driving dynamics while maintaining the comfort and refinement BMW is known for.",
        condition: "Excellent",
        warranty: "BMW Certified Pre-Owned Warranty",
        vin: "5UXCR6C0XP9X12345"
    },
    2: {
        name: "2023 Mercedes C-Class C300",
        price: "$52,000",
        year: "2023",
        mileage: "15,000 miles",
        engine: "2.0L Turbo I4",
        drivetrain: "Rear-Wheel Drive",
        transmission: "9-Speed Automatic",
        fuel: "Premium Gasoline",
        mpg: "24 city / 35 highway",
        exterior: "Obsidian Black Metallic",
        interior: "Macchiato Beige Leather",
        features: [
            "MBUX Infotainment System",
            "Heated Front Seats",
            "Premium Audio",
            "Smartphone Integration",
            "LED Headlights",
            "Active Brake Assist",
            "Blind Spot Assist",
            "Attention Assist",
            "Rain-Sensing Wipers",
            "Dual-Zone Climate Control"
        ],
        description: "Experience the perfect blend of luxury and technology in this 2023 Mercedes C-Class. Featuring the latest MBUX system and advanced safety features, this vehicle represents the pinnacle of German engineering.",
        condition: "Excellent",
        warranty: "Mercedes-Benz Certified Pre-Owned",
        vin: "55SWF8DB9PU123456"
    },
    3: {
        name: "2024 Audi A4 Premium Plus",
        price: "$48,000",
        year: "2024",
        mileage: "8,500 miles",
        engine: "2.0L TFSI I4",
        drivetrain: "Quattro All-Wheel Drive",
        transmission: "7-Speed S Tronic",
        fuel: "Premium Gasoline",
        mpg: "24 city / 31 highway",
        exterior: "Glacier White Metallic",
        interior: "Black Leather",
        features: [
            "Virtual Cockpit Plus",
            "MMI Navigation Plus",
            "Heated Front Seats",
            "Audi Pre Sense",
            "LED Headlights",
            "Wireless Charging",
            "Bang & Olufsen Audio",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Parking System Plus"
        ],
        description: "This nearly new 2024 Audi A4 offers the perfect combination of sportiness and luxury. With Audi's legendary Quattro all-wheel drive and cutting-edge technology, it delivers an unmatched driving experience.",
        condition: "Like New",
        warranty: "Audi Care Plus Extended Warranty",
        vin: "WAUZZZF49PN123456"
    },
    4: {
        name: "2023 Toyota Camry XLE",
        price: "$35,000",
        year: "2023",
        mileage: "12,000 miles",
        engine: "2.5L Hybrid I4",
        drivetrain: "Front-Wheel Drive",
        transmission: "CVT Automatic",
        fuel: "Hybrid (Gas/Electric)",
        mpg: "51 city / 53 highway",
        exterior: "Wind Chill Pearl",
        interior: "SoftTex Leather",
        features: [
            "Toyota Safety Sense 2.0",
            "Heated Front Seats",
            "Wireless Charging",
            "Apple CarPlay/Android Auto",
            "Dual-Zone Climate Control",
            "LED Headlights",
            "Blind Spot Monitor",
            "Rear Cross Traffic Alert",
            "Lane Tracing Assist",
            "JBL Premium Audio"
        ],
        description: "Exceptional fuel efficiency meets refined comfort in this 2023 Toyota Camry Hybrid. Perfect for daily commuting with outstanding reliability and advanced safety features.",
        condition: "Excellent",
        warranty: "Toyota Certified Used Vehicle",
        vin: "4T1G11AK8PU123456"
    },
    5: {
        name: "2022 Honda Accord Sport",
        price: "$28,000",
        year: "2022",
        mileage: "25,000 miles",
        engine: "1.5L Turbo I4",
        drivetrain: "Front-Wheel Drive",
        transmission: "CVT Automatic",
        fuel: "Regular Gasoline",
        mpg: "30 city / 38 highway",
        exterior: "Still Night Pearl",
        interior: "Black Cloth",
        features: [
            "Honda Sensing Suite",
            "Apple CarPlay/Android Auto",
            "Dual-Zone Climate Control",
            "LED Headlights",
            "Sport-Tuned Suspension",
            "19-inch Alloy Wheels",
            "Power Driver's Seat",
            "Remote Engine Start",
            "Collision Mitigation Braking",
            "Road Departure Mitigation"
        ],
        description: "This sporty 2022 Honda Accord Sport delivers engaging driving dynamics with excellent fuel economy. Features a turbocharged engine and sport-tuned suspension for an exciting drive.",
        condition: "Very Good",
        warranty: "Honda Certified Pre-Owned",
        vin: "1HGCV1F18NA123456"
    },
    6: {
        name: "2024 BMW 330i xDrive",
        price: "$72,000",
        year: "2024",
        mileage: "5,000 miles",
        engine: "2.0L TwinPower Turbo I4",
        drivetrain: "All-Wheel Drive",
        transmission: "8-Speed Automatic",
        fuel: "Premium Gasoline",
        mpg: "26 city / 36 highway",
        exterior: "Jet Black",
        interior: "Cognac Vernasca Leather",
        features: [
            "iDrive 7.0 System",
            "Wireless Apple CarPlay",
            "Heated Steering Wheel",
            "Premium Package",
            "Harman Kardon Audio",
            "Active Driving Assistant",
            "Parking Assistant",
            "Comfort Access",
            "Live Cockpit Professional",
            "BMW ConnectedDrive"
        ],
        description: "Nearly new 2024 BMW 330i with the latest technology and premium features. This ultimate driving machine combines performance, luxury, and efficiency in perfect harmony.",
        condition: "Like New",
        warranty: "BMW New Vehicle Limited Warranty",
        vin: "WBA5R7C0XPF123456"
    }
};

// Load car details based on URL parameter
function loadCarDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    const car = cars[carId];
    
    if (!car) {
        document.getElementById('car-content').innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h2>Vehicle Not Found</h2>
                <p>The requested vehicle could not be found.</p>
                <a href="inventory.html" class="btn btn-primary">Back to Inventory</a>
            </div>
        `;
        return;
    }

    document.title = `${car.name} - Elite Motors`;

    const carDetailHTML = `
        <div class="car-detail-content">
            <div class="car-detail-header">
                <h1>${car.name}</h1>
                <div class="car-detail-price">${car.price}</div>
            </div>
            
            <div class="car-detail-grid">
                <div class="car-images">
                    <div class="main-image">
                        <div class="placeholder-image large">${car.name}</div>
                    </div>
                    <div class="image-thumbnails">
                        <div class="thumbnail active">
                            <div class="placeholder-image small">Exterior</div>
                        </div>
                        <div class="thumbnail">
                            <div class="placeholder-image small">Interior</div>
                        </div>
                        <div class="thumbnail">
                            <div class="placeholder-image small">Engine</div>
                        </div>
                        <div class="thumbnail">
                            <div class="placeholder-image small">Details</div>
                        </div>
                    </div>
                </div>
                
                <div class="car-summary">
                    <div class="quick-specs">
                        <div class="spec-item">
                            <span class="spec-label">Year</span>
                            <span class="spec-value">${car.year}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Mileage</span>
                            <span class="spec-value">${car.mileage}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Engine</span>
                            <span class="spec-value">${car.engine}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Drivetrain</span>
                            <span class="spec-value">${car.drivetrain}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">MPG</span>
                            <span class="spec-value">${car.mpg}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Condition</span>
                            <span class="spec-value">${car.condition}</span>
                        </div>
                    </div>
                    
                    <div class="car-actions-detail">
                        <button class="btn btn-primary" onclick="scheduleTest(${carId})">Schedule Test Drive</button>
                        <button class="btn btn-secondary" onclick="contactAboutCar(${carId})">Get More Info</button>
                        <button class="btn btn-outline" onclick="calculateFinancing(${carId})">Calculate Financing</button>
                    </div>
                </div>
            </div>
            
            <div class="car-tabs">
                <div class="tab-buttons">
                    <button class="tab-btn active" onclick="showTab('overview')">Overview</button>
                    <button class="tab-btn" onclick="showTab('specs')">Specifications</button>
                    <button class="tab-btn" onclick="showTab('features')">Features</button>
                    <button class="tab-btn" onclick="showTab('warranty')">Warranty</button>
                </div>
                
                <div class="tab-content">
                    <div id="overview" class="tab-panel active">
                        <h3>Vehicle Overview</h3>
                        <p>${car.description}</p>
                        
                        <div class="overview-highlights">
                            <div class="highlight-item">
                                <h4>Exterior Color</h4>
                                <p>${car.exterior}</p>
                            </div>
                            <div class="highlight-item">
                                <h4>Interior</h4>
                                <p>${car.interior}</p>
                            </div>
                            <div class="highlight-item">
                                <h4>Fuel Type</h4>
                                <p>${car.fuel}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="specs" class="tab-panel">
                        <h3>Technical Specifications</h3>
                        <div class="specs-grid">
                            <div class="spec-category">
                                <h4>Engine & Performance</h4>
                                <div class="spec-list">
                                    <div class="spec-row">
                                        <span>Engine</span>
                                        <span>${car.engine}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>Transmission</span>
                                        <span>${car.transmission}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>Drivetrain</span>
                                        <span>${car.drivetrain}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>Fuel Economy</span>
                                        <span>${car.mpg}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="spec-category">
                                <h4>Vehicle Details</h4>
                                <div class="spec-list">
                                    <div class="spec-row">
                                        <span>Year</span>
                                        <span>${car.year}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>Mileage</span>
                                        <span>${car.mileage}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>Exterior Color</span>
                                        <span>${car.exterior}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>Interior</span>
                                        <span>${car.interior}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span>VIN</span>
                                        <span>${car.vin}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="features" class="tab-panel">
                        <h3>Standard Features</h3>
                        <div class="features-grid">
                            ${car.features.map(feature => `<div class="feature-item">✓ ${feature}</div>`).join('')}
                        </div>
                    </div>
                    
                    <div id="warranty" class="tab-panel">
                        <h3>Warranty Information</h3>
                        <div class="warranty-info">
                            <div class="warranty-card">
                                <h4>Current Warranty</h4>
                                <p>${car.warranty}</p>
                                <p>This vehicle comes with comprehensive warranty coverage for your peace of mind.</p>
                            </div>
                            <div class="warranty-card">
                                <h4>Extended Options</h4>
                                <p>Additional extended warranty options are available for purchase to extend your coverage beyond the standard warranty period.</p>
                                <button class="btn btn-outline" onclick="contactAboutWarranty(${carId})">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('car-content').innerHTML = carDetailHTML;
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab panel
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Filter functionality for inventory page
function applyFilters() {
    const brandFilter = document.getElementById('brand-filter')?.value.toLowerCase();
    const priceFilter = document.getElementById('price-filter')?.value;
    const yearFilter = document.getElementById('year-filter')?.value;
    
    const carCards = document.querySelectorAll('.car-card');
    
    carCards.forEach(card => {
        const brand = card.getAttribute('data-brand');
        const price = parseInt(card.getAttribute('data-price'));
        const year = card.getAttribute('data-year');
        
        let showCard = true;
        
        // Brand filter
        if (brandFilter && brand !== brandFilter) {
            showCard = false;
        }
        
        // Price filter
        if (priceFilter && price > parseInt(priceFilter)) {
            showCard = false;
        }
        
        // Year filter
        if (yearFilter && year !== yearFilter) {
            showCard = false;
        }
        
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Test drive scheduling
function scheduleTest(carId) {
    const car = cars[carId];
    const carName = car ? car.name : 'selected vehicle';
    alert(`Thank you for your interest in scheduling a test drive for the ${carName}! Our sales team will contact you shortly to arrange a convenient time. You can also call us at (555) 123-4567.`);
}

// Contact about specific car
function contactAboutCar(carId) {
    const car = cars[carId];
    const carName = car ? car.name : 'selected vehicle';
    alert(`We'd be happy to provide more information about the ${carName}! Please contact our sales team at (555) 123-4567 or visit our contact page to send us a message.`);
}

// Calculate financing
function calculateFinancing(carId) {
    const car = cars[carId];
    if (car) {
        const price = car.price.replace('$', '').replace(',', '');
        alert(`Financing calculator for ${car.name} (${car.price}):\n\nThis feature will connect you with our finance specialists who can provide personalized payment options based on your credit profile and down payment. Call (555) 123-4567 to speak with a finance expert.`);
    }
}

// Contact about warranty
function contactAboutWarranty(carId) {
    alert('Our service department can provide detailed warranty information and extended coverage options. Please contact our service team at (555) 123-4568 for more details.');
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Simple validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We have received your inquiry and will respond within 24 hours. Our team looks forward to helping you find your perfect vehicle.');
    
    // Reset form
    event.target.reset();
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add loading animation
function showLoading() {
    document.body.style.cursor = 'wait';
}

function hideLoading() {
    document.body.style.cursor = 'default';
}