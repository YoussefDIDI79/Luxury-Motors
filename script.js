// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carCards = document.querySelectorAll('.car-card');

    // Mobile menu toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
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

    // Filter functionality for category buttons
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                carCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category') || '';
                    
                    if (filterValue === 'all' || 
                        (filterValue === 'luxury' && cardCategory.includes('luxury')) ||
                        (filterValue === 'suv' && cardCategory.includes('suv')) ||
                        (filterValue === 'sedan' && cardCategory.includes('sedan'))) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Smooth scroll to the filtered results
                document.querySelector('.cars-grid').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }
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
        images: [
            "attached_assets/stock_images/bmw_x5_2024.jpg",
            "attached_assets/stock_images/luxury_car_interior__ee88e093.jpg"
        ],
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
        images: [
            "attached_assets/stock_images/mercedes-benz_c-clas_34e9535f.jpg",
            "attached_assets/stock_images/luxury_car_interior__ee88e093.jpg"
        ],
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
        images: [
            "attached_assets/stock_images/audi_a4_luxury_sedan_ef16fdc9.jpg",
            "attached_assets/stock_images/luxury_car_interior__ee88e093.jpg"
        ],
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
        images: [
            "attached_assets/stock_images/toyota_camry_hybrid__994356fb.jpg",
            "attached_assets/stock_images/luxury_car_interior__ee88e093.jpg"
        ],
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
        images: [
            "attached_assets/stock_images/honda_accord_sport_s_4ecff5f3.jpg",
            "attached_assets/stock_images/luxury_car_interior__ee88e093.jpg"
        ],
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
        images: [
            "attached_assets/stock_images/bmw_330i_luxury_seda_80d29bf9.jpg",
            "attached_assets/stock_images/luxury_car_interior__ee88e093.jpg"
        ],
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
                        <img src="${car.images && car.images[0] ? car.images[0] : 'attached_assets/stock_images/luxury_car_dealershi_8565d5c1.jpg'}" alt="${car.name}" class="car-main-image">
                    </div>
                    <div class="image-thumbnails">
                        ${car.images && car.images.length > 0 ? car.images.map((image, index) =>
                            `<div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${image}', this)">
                                <img src="${image}" alt="${car.name} view ${index + 1}" class="thumbnail-image">
                            </div>`
                        ).join('') : `
                        <div class="thumbnail active">
                            <img src="attached_assets/stock_images/luxury_car_dealershi_8565d5c1.jpg" alt="${car.name}" class="thumbnail-image">
                        </div>
                        <div class="thumbnail">
                            <img src="attached_assets/stock_images/luxury_car_interior__ee88e093.jpg" alt="${car.name} interior" class="thumbnail-image">
                        </div>
                        <div class="thumbnail">
                            <img src="attached_assets/stock_images/modern_car_dealershi_62e01f44.jpg" alt="${car.name} details" class="thumbnail-image">
                        </div>
                        <div class="thumbnail">
                            <img src="attached_assets/stock_images/professional_car_sal_62e01f44.jpg" alt="${car.name} exterior" class="thumbnail-image">
                        </div>
                        `}
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
                        <div class="vehicle-overview">
                            <h3>Vehicle Overview</h3>
                            <p>${car.description}</p>
                            
                            <div class="overview-highlights">
                                <div class="highlight-item">
                                    <i class="fas fa-palette"></i>
                                    <div class="highlight-text">
                                        <h4>Exterior Color</h4>
                                        <p>${car.exterior}</p>
                                    </div>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-chair"></i>
                                    <div class="highlight-text">
                                        <h4>Interior</h4>
                                        <p>${car.interior}</p>
                                    </div>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-gas-pump"></i>
                                    <div class="highlight-text">
                                        <h4>Fuel Type</h4>
                                        <p>${car.fuel}</p>
                                    </div>
                                </div>
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
    const brandFilter = document.getElementById('brand-filter')?.value?.toLowerCase() || '';
    const priceFilter = parseInt(document.getElementById('price-filter')?.value) || 0;
    const yearFilter = document.getElementById('year-filter')?.value || '';
    const typeFilter = document.getElementById('type-filter')?.value?.toLowerCase() || '';
    const searchQuery = document.getElementById('search-input')?.value?.toLowerCase() || '';

    const carCards = document.querySelectorAll('.car-card');

    carCards.forEach(card => {
        const brand = card.dataset.brand?.toLowerCase() || '';
        const price = parseInt(card.dataset.price) || 0;
        const year = card.dataset.year || '';
        const category = card.dataset.category?.toLowerCase() || '';
        const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        
        // Handle special filter case for 'Luxury SUVs Sedans'
        const isLuxurySuvSedan = typeFilter.includes('luxury') && 
                               (category.includes('luxury suv') || category.includes('luxury sedan'));
        
        const matchesBrand = !brandFilter || brand.includes(brandFilter);
        const matchesPrice = !priceFilter || price <= priceFilter;
        const matchesYear = !yearFilter || year === yearFilter;
        const matchesType = !typeFilter || 
                          (typeFilter === 'all' || 
                           category.includes(typeFilter) || 
                           (typeFilter.includes('luxury') && isLuxurySuvSedan));
        const matchesSearch = !searchQuery || title.includes(searchQuery);

        if (matchesBrand && matchesPrice && matchesYear && matchesType && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
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
    alert(`Thank you for your interest in warranty options for car ID: ${carId}. Our team will contact you shortly.`);
}

// Loan Calculator Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only run on car-detail page
    if (!window.location.pathname.includes('car-detail.html')) return;

    // Get DOM elements
    const vehiclePriceInput = document.getElementById('vehiclePrice');
    const downPaymentInput = document.getElementById('downPayment');
    const interestRateInput = document.getElementById('interestRate');
    const termButtons = document.querySelectorAll('.term-btn');
    const calculateBtn = document.getElementById('calculateBtn');
    const monthlyPaymentEl = document.getElementById('monthlyPayment');
    const totalInterestEl = document.getElementById('totalInterest');
    const totalCostEl = document.getElementById('totalCost');
    const contactSalesBtn = document.getElementById('contactSalesBtn');
    const carModelEl = document.getElementById('carModel');
    const carPriceEl = document.getElementById('carPrice');

    let selectedTerm = 36; // Default term in months

    // Format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Set up term buttons
    termButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            termButtons.forEach(btn => {
                btn.style.backgroundColor = '#f9fafb';
                btn.style.borderColor = '#e5e7eb';
                btn.style.color = '#4b5563';
                btn.style.fontWeight = '500';
            });
            
            // Add active class to clicked button
            this.style.backgroundColor = '#2c5aa0';
            this.style.borderColor = '#2c5aa0';
            this.style.color = 'white';
            this.style.fontWeight = '600';
            
            // Update selected term
            selectedTerm = parseInt(this.getAttribute('data-months'));
            
            // Auto-calculate if all fields have values
            if (vehiclePriceInput.value && downPaymentInput.value && interestRateInput.value) {
                calculatePayment();
            }
        });
    });

    // Calculate payment when button is clicked
    calculateBtn.addEventListener('click', calculatePayment);

    // Auto-calculate when inputs change
    [vehiclePriceInput, downPaymentInput, interestRateInput].forEach(input => {
        input.addEventListener('input', function() {
            if (vehiclePriceInput.value && downPaymentInput.value && interestRateInput.value) {
                calculatePayment();
            } else {
                // Reset values if any field is empty
                resetResults();
            }
        });
    });

    // Contact sales button
    contactSalesBtn.addEventListener('click', function() {
        alert('Our sales team will contact you shortly. Thank you for your interest!');
    });

    // Calculate loan payment
    function calculatePayment() {
        // Get input values
        const vehiclePrice = parseFloat(vehiclePriceInput.value.replace(/,/g, '')) || 0;
        const downPayment = parseFloat(downPaymentInput.value.replace(/,/g, '')) || 0;
        const interestRate = parseFloat(interestRateInput.value) / 100 || 0; // Convert to decimal
        const loanAmount = vehiclePrice - downPayment;

        // Validate inputs
        if (loanAmount <= 0) {
            showError('Down payment must be less than vehicle price');
            return;
        }

        if (interestRate < 0 || interestRate > 30) {
            showError('Interest rate must be between 0% and 30%');
            return;
        }

        const monthlyRate = interestRate / 12;
        const numPayments = selectedTerm;
        
        // Calculate monthly payment
        let monthlyPayment;
        if (monthlyRate === 0) {
            // Handle 0% interest case to avoid division by zero
            monthlyPayment = loanAmount / numPayments;
        } else {
            monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                            (Math.pow(1 + monthlyRate, numPayments) - 1);
        }
        
        // Calculate total cost and interest
        const totalCost = monthlyPayment * numPayments;
        const totalInterest = totalCost - loanAmount;

        // Update UI with formatted numbers
        monthlyPaymentEl.textContent = `$${formatCurrency(Math.round(monthlyPayment))}`;
        totalInterestEl.textContent = `$${formatCurrency(Math.round(totalInterest))}`;
        totalCostEl.textContent = `$${formatCurrency(Math.round(totalCost))}`;
        
        // Update the button text to show it was calculated
        calculateBtn.querySelector('span').textContent = 'Recalculate';
    }

    function resetResults() {
        monthlyPaymentEl.textContent = '$0';
        totalInterestEl.textContent = '$0';
        totalCostEl.textContent = '$0';
        calculateBtn.querySelector('span').textContent = 'Calculate Monthly Payment';
    }

    function showError(message) {
        alert(message);
        resetResults();
    }

    // Auto-fill vehicle price from car details if available
    function autoFillVehiclePrice() {
        const carPriceText = carPriceEl.textContent.trim();
        const priceMatch = carPriceText.match(/\$([\d,]+)/);
        if (priceMatch && priceMatch[1]) {
            const price = priceMatch[1].replace(/,/g, '');
            vehiclePriceInput.value = price;
            // Trigger calculation if other fields are filled
            if (downPaymentInput.value && interestRateInput.value) {
                calculatePayment();
            }
        }
    }

    // Initialize
    if (carPriceEl) {
        autoFillVehiclePrice();
        // Update car model in the calculator
        carModelEl.textContent = document.querySelector('.car-title')?.textContent || '2023 Toyota Camry';
    }
});

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

// Smooth scrolling for anchor links and elements with onclick="scrollTo..."
document.addEventListener('DOMContentLoaded', function() {
    // Handle regular anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            document.querySelector(targetId)?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scrollToCalculator function to window object
    window.scrollToCalculator = function() {
        document.getElementById('calculator')?.scrollIntoView({
            behavior: 'smooth'
        });
        return false; // Prevent default anchor behavior
    };
});

// Loan Calculator Functionality
function calculateLoan() {
    // Get input values
    const vehiclePrice = parseFloat(document.getElementById('vehiclePrice').value) || 0;
    const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
    const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) || 60;
    
    // Validate inputs
    if (downPayment >= vehiclePrice) {
        alert('Down payment must be less than the vehicle price');
        return;
    }
    
    // Calculate loan amount
    const loanAmount = vehiclePrice - downPayment;
    
    // Calculate monthly interest rate
    const monthlyRate = (interestRate / 100) / 12;
    
    // Calculate monthly payment using the formula: P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    // Where P = loan amount, r = monthly interest rate, n = number of payments
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                          (Math.pow(1 + monthlyRate, loanTerm) - 1);
    
    // Calculate total payment and total interest
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;
    
    // Display results
    document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalInterest').textContent = `$${totalInterest.toFixed(2)}`;
    
    // Show results with animation
    const resultElement = document.getElementById('calcResult');
    resultElement.style.opacity = '0';
    setTimeout(() => {
        resultElement.style.opacity = '1';
    }, 100);
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for input changes
    const inputs = ['vehiclePrice', 'downPayment', 'interestRate', 'loanTerm'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', calculateLoan);
            element.addEventListener('input', calculateLoan);
        }
    });
    
    // Initial calculation
    calculateLoan();
});

// Change main image when thumbnail is clicked
function changeMainImage(imageSrc, thumbnailElement) {
    // Update main image
    const mainImage = document.querySelector('.car-main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnailElement.classList.add('active');
}

// Add loading animation
function showLoading() {
    document.body.style.cursor = 'wait';
}

function hideLoading() {
    document.body.style.cursor = 'default';
}
