// Buyers Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    initializeTabs();
    
    // Farm map interactions
    initializeFarmMap();
    
    // Mock data for different farms
    initializeFarmData();
    
    // Batch tab switching
    initializeBatchTabs();
});

// Tab Switching
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
}

// Farm Map Interactions
function initializeFarmMap() {
    const farmMarkers = document.querySelectorAll('.farm-marker');
    const farmFilter = document.getElementById('farmFilter');
    
    // Farm marker click events
    farmMarkers.forEach(marker => {
        marker.addEventListener('click', () => {
            // Remove active class from all markers
            farmMarkers.forEach(m => m.classList.remove('active'));
            
            // Add active class to clicked marker
            marker.classList.add('active');
            
            // Update farm details
            const farmId = marker.getAttribute('data-farm');
            updateFarmDetails(farmId);
        });
    });
    
    // Farm filter change event
    if (farmFilter) {
        farmFilter.addEventListener('change', (e) => {
            const selectedFarm = e.target.value;
            
            if (selectedFarm === 'all') {
                // Show all markers
                farmMarkers.forEach(marker => {
                    marker.style.display = 'block';
                });
            } else {
                // Hide all markers except selected
                farmMarkers.forEach(marker => {
                    const farmId = marker.getAttribute('data-farm');
                    marker.style.display = farmId === selectedFarm ? 'block' : 'none';
                });
                
                // Update details for selected farm
                updateFarmDetails(selectedFarm);
                
                // Make selected marker active
                farmMarkers.forEach(m => m.classList.remove('active'));
                const selectedMarker = document.querySelector(`[data-farm="${selectedFarm}"]`);
                if (selectedMarker) {
                    selectedMarker.classList.add('active');
                }
            }
        });
    }
}

// Farm Data Management
function initializeFarmData() {
    // Mock farm data
    window.farmData = {
        '2bh': {
            name: '2BH Farm - Nakuru County',
            harvest: '31 Oct 2024',
            temperature: '2.1°C',
            humidity: '72%',
            shelfLife: '10 days',
            status: 'online'
        },
        'noahsjoy': {
            name: 'NoahsJoy Farm - Kiambu County',
            harvest: '28 Oct 2024',
            temperature: '3.2°C',
            humidity: '68%',
            shelfLife: '12 days',
            status: 'online'
        },
        'marylil': {
            name: 'MaryLil Chili Farms - Meru County',
            harvest: '30 Oct 2024',
            temperature: '2.8°C',
            humidity: '70%',
            shelfLife: '14 days',
            status: 'online'
        },
        'bavarian': {
            name: 'Not Bavarian Herbs - Nyeri County',
            harvest: '29 Oct 2024',
            temperature: '2.5°C',
            humidity: '75%',
            shelfLife: '8 days',
            status: 'online'
        }
    };
}

// Update Farm Details Panel
function updateFarmDetails(farmId) {
    const farmData = window.farmData[farmId];
    if (!farmData) return;
    
    // Update farm info elements
    const farmName = document.getElementById('farm-name');
    const harvestDate = document.getElementById('harvest-date');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const shelfLife = document.getElementById('shelf-life');
    
    if (farmName) farmName.textContent = farmData.name;
    if (harvestDate) harvestDate.textContent = farmData.harvest;
    if (temperature) temperature.textContent = farmData.temperature;
    if (humidity) humidity.textContent = farmData.humidity;
    if (shelfLife) shelfLife.textContent = farmData.shelfLife;
    
    // Animate the update
    const farmInfoCard = document.getElementById('farm-info');
    if (farmInfoCard) {
        farmInfoCard.style.transform = 'scale(0.98)';
        farmInfoCard.style.opacity = '0.8';
        
        setTimeout(() => {
            farmInfoCard.style.transform = 'scale(1)';
            farmInfoCard.style.opacity = '1';
        }, 150);
    }
}

// Mock API calls for demonstration
function mockAPICall(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 'success',
                data: 'Mock data response',
                timestamp: new Date().toISOString()
            });
        }, 1000);
    });
}

// Action button handlers
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('action-btn')) {
        const action = e.target.textContent;
        
        // Show loading state
        const originalText = e.target.textContent;
        e.target.textContent = 'Loading...';
        e.target.disabled = true;
        
        // Mock API call
        mockAPICall('action')
            .then(() => {
                // Show success message
                showNotification(`${action} request sent successfully!`, 'success');
            })
            .catch(() => {
                showNotification('Action failed. Please try again.', 'error');
            })
            .finally(() => {
                // Restore button
                e.target.textContent = originalText;
                e.target.disabled = false;
            });
    }
    
    if (e.target.classList.contains('place-order-btn')) {
        // Handle place order button
        e.target.style.background = '#16a34a';
        e.target.textContent = 'ORDER PROCESSING...';
        
        setTimeout(() => {
            e.target.style.background = '#22c55e';
            e.target.textContent = 'PLACE ORDER';
            showNotification('Order request submitted successfully!', 'success');
        }, 2000);
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 0.9rem;
    `;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Real-time data simulation
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Update random temperature values
        const temperatures = ['2.1°C', '2.3°C', '1.9°C', '2.5°C'];
        const humidities = ['72%', '68%', '74%', '69%'];
        
        const tempElement = document.getElementById('temperature');
        const humidityElement = document.getElementById('humidity');
        
        if (tempElement) {
            tempElement.textContent = temperatures[Math.floor(Math.random() * temperatures.length)];
        }
        
        if (humidityElement) {
            humidityElement.textContent = humidities[Math.floor(Math.random() * humidities.length)];
        }
        
        // Add subtle flash effect to indicate update
        [tempElement, humidityElement].forEach(element => {
            if (element) {
                element.style.background = '#fef3c7';
                setTimeout(() => {
                    element.style.background = 'transparent';
                }, 500);
            }
        });
        
    }, 10000); // Update every 10 seconds
}

// Initialize real-time updates
setTimeout(simulateRealTimeUpdates, 2000);

// QR Code interaction simulation
document.addEventListener('click', function(e) {
    if (e.target.closest('.batch-qr') || e.target.closest('.batch-qr-large')) {
        showNotification('QR Code scanned! Batch details loaded.', 'success');
        
        // Simulate data loading
        const batchElements = document.querySelectorAll('.batch-item, .featured-batch');
        batchElements.forEach(element => {
            element.style.border = '2px solid #22c55e';
            setTimeout(() => {
                element.style.border = '';
            }, 1000);
        });
    }
});

// Enhanced farm marker interactions
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.farm-marker')) {
        const marker = e.target.closest('.farm-marker');
        const circle = marker.querySelector('circle');
        if (circle) {
            circle.setAttribute('r', '12');
        }
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.farm-marker')) {
        const marker = e.target.closest('.farm-marker');
        const circle = marker.querySelector('circle');
        if (circle && !marker.classList.contains('active')) {
            circle.setAttribute('r', '8');
        }
    }
});

// Batch Tab Switching
function initializeBatchTabs() {
    const batchTabs = document.querySelectorAll('.batch-tab');
    const batchContents = document.querySelectorAll('.featured-batch');
    
    batchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetBatch = tab.getAttribute('data-batch');
            
            // Remove active class from all tabs
            batchTabs.forEach(t => t.classList.remove('active'));
            
            // Hide all batch contents
            batchContents.forEach(content => content.classList.add('hidden'));
            
            // Activate clicked tab
            tab.classList.add('active');
            
            // Show corresponding batch content
            const targetContent = document.getElementById(`batch-${targetBatch}`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                
                // Add smooth transition effect
                targetContent.style.opacity = '0';
                targetContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateY(0)';
                    targetContent.style.transition = 'all 0.3s ease';
                }, 100);
            }
        });
    });
}