// RakthaSangraha - Main JavaScript File

// DOM Elements
let currentTab = 'inventory';

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  renderStats();
  renderBloodInventory();
  renderUrgentRequests();
  renderDistricts();
  setupEventListeners();
  setupTabs();
}

// Setup Event Listeners
function setupEventListeners() {
  // Login Buttons
  document.getElementById('donorLoginBtn').addEventListener('click', () => openModal('donorLoginModal'));
  document.getElementById('operatorLoginBtn').addEventListener('click', () => openModal('operatorLoginModal'));
  
  // Close Modal Buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeAllModals());
  });
  
  // Donor Registration Form
  document.getElementById('donorForm').addEventListener('submit', handleDonorSubmit);
  
  // Blood Request Form
  document.getElementById('bloodRequestForm').addEventListener('submit', handleBloodRequest);
  
  // Login Forms
  document.getElementById('donorLoginForm').addEventListener('submit', handleDonorLogin);
  document.getElementById('operatorLoginForm').addEventListener('submit', handleOperatorLogin);
  
  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

// Setup Tab Navigation
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  currentTab = tab;
  
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === tab) {
      btn.classList.add('active');
    }
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
    if (content.id === `${tab}Tab`) {
      content.classList.remove('hidden');
    }
  });
}

// Render Dashboard Stats
function renderStats() {
  const { stats } = AppData;
  
  document.getElementById('bloodBanksCount').textContent = formatNumber(stats.bloodBanks);
  document.getElementById('hospitalsCount').textContent = formatNumber(stats.hospitals);
  document.getElementById('activeDonorsCount').textContent = formatNumber(stats.activeDonors);
  document.getElementById('criticalRequestsCount').textContent = formatNumber(stats.criticalRequests);
}

// Render Blood Inventory
function renderBloodInventory() {
  const container = document.getElementById('bloodInventoryGrid');
  container.innerHTML = '';
  
  AppData.bloodInventory.forEach((item, index) => {
    const status = getInventoryStatus(item.units);
    const percentage = Math.min((item.units / 400) * 100, 100);
    
    const card = document.createElement('div');
    card.className = 'blood-card bg-white rounded-2xl p-6 shadow-lg card-hover animate-slide-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
            <span class="text-white text-xl font-bold">${item.group}</span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-800">Blood Group ${item.group}</h3>
            <p class="text-sm text-gray-500">${item.banks} blood banks</p>
          </div>
        </div>
        <span class="status-badge status-${status.toLowerCase()}">${status}</span>
      </div>
      
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-gray-600">Units Available</span>
          <span class="text-2xl font-bold gradient-text">${item.units}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill ${status.toLowerCase()}" style="width: ${percentage}%"></div>
        </div>
      </div>
      
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-500">Demand: <span class="font-medium text-gray-700">${item.demand}</span></span>
        <button class="text-red-600 font-medium hover:text-red-700 transition-colors" onclick="showToast('info', 'Details for ${item.group} blood type')">
          View Details →
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Render Urgent Requests
function renderUrgentRequests() {
  const container = document.getElementById('urgentRequestsGrid');
  container.innerHTML = '';
  
  AppData.urgentRequests.forEach((request, index) => {
    const card = document.createElement('div');
    card.className = 'urgent-card bg-white rounded-2xl p-6 shadow-lg card-hover animate-slide-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-gray-800">${request.hospital}</h3>
            <p class="text-sm text-gray-500 flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              ${request.location}
            </p>
          </div>
        </div>
        <span class="priority-badge priority-${request.priority.toLowerCase()}">${request.priority}</span>
      </div>
      
      <div class="flex items-center gap-4 mb-4">
        <div class="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg">
          <span class="text-red-600 font-bold text-lg">${request.bloodType}</span>
          <span class="text-red-600 text-sm">Blood Type</span>
        </div>
        <div class="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
          <span class="text-gray-800 font-bold text-lg">${request.units}</span>
          <span class="text-gray-600 text-sm">Units</span>
        </div>
      </div>
      
      <p class="text-sm text-gray-600 mb-4 line-clamp-2">${request.note}</p>
      
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-400 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          ${formatDateTime(request.dateTime)}
        </span>
        <button onclick="handleRespond(${request.id})" class="btn btn-primary text-sm py-2 px-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Respond
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Render Districts
// Render Districts
function renderDistricts() {
  const container = document.getElementById('districtsGrid');
  container.innerHTML = '';
  
  AppData.districts.forEach((district, index) => {
    const card = document.createElement('div');
    card.className = 'district-card bg-white rounded-2xl p-6 shadow-lg card-hover animate-slide-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-lg font-bold text-gray-800">${district.name}</h3>
          <p class="text-sm text-gray-500">${district.bloodBanks} Blood Banks</p>
        </div>
        <span class="status-badge status-${district.status.toLowerCase()}">
          ${district.status}
        </span>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
          <p class="text-2xl font-bold gradient-text">
            ${formatNumber(district.totalUnits)}
          </p>
          <p class="text-xs text-gray-600">Total Units</p>
        </div>

        <div class="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 text-center">
          <p class="text-2xl font-bold text-amber-700">
            ${district.criticalTypes}
          </p>
          <p class="text-xs text-gray-600">Critical Types</p>
        </div>
      </div>
      
      <button class="w-full btn btn-secondary text-sm"
              onclick="openDistrictModal('${district.name}')">
        View District Details
      </button>
    `;
    
    container.appendChild(card);
  });
}


// Handle Respond Button
function handleRespond(requestId) {
  const request = AppData.urgentRequests.find(r => r.id === requestId);
  if (request) {
    showToast('success', `Response sent to ${request.hospital} for ${request.bloodType} blood type!`);
  }
}

// Handle Donor Form Submit
function handleDonorSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('donorName');
  
  openModal('successModal');
  document.getElementById('successMessage').textContent = 
    `Thank you ${name}! Your registration as a blood donor has been received. Our team will contact you shortly.`;
  
  e.target.reset();
}

// Handle Blood Request Submit
function handleBloodRequest(e) {

  e.preventDefault();

  const formData = new FormData(e.target);

  // Create new urgent request object
  const newRequest = {
    id: Date.now(),
    hospital: formData.get("hospitalName"),
    location: formData.get("location"),
    bloodType: formData.get("bloodGroup"),
    units: formData.get("units"),
    note: formData.get("notes") || "Blood required urgently",
    dateTime: new Date().toISOString(),
    priority: formData.get("urgency")
  };

  // Add request to urgent requests list
  AppData.urgentRequests.unshift(newRequest);

  // Re-render urgent requests section
  renderUrgentRequests();

  // Show success popup
  openModal("successModal");
  document.getElementById("successMessage").textContent =
    `Blood request from ${newRequest.hospital} has been added to urgent requests successfully.`;


  // Reset form
  e.target.reset();
}


// Handle Login Forms
function handleDonorLogin(e) {
  e.preventDefault();
  closeAllModals();
  showToast('success', 'Welcome back, Donor! Login successful.');
}

function handleOperatorLogin(e) {
  e.preventDefault();
  closeAllModals();
  showToast('success', 'Welcome back, Operator! Login successful.');
}

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}
// --------------------------------
// District Blood Bank Modal Logic
// --------------------------------

function openDistrictModal(districtName) {

  const modal = document.getElementById("districtModal");
  const title = document.getElementById("modalTitle");
  const list = document.getElementById("modalBanksList");

  // Set popup title
  title.textContent = `${districtName} – Blood Banks`;

  // Clear existing list
  list.innerHTML = "";

  // Get blood banks for selected district
  const banks = districtBloodBanks[districtName];

  // If no banks found
  if (!banks || banks.length === 0) {

    list.innerHTML = `
      <p class="text-center text-gray-500 mt-6">
        No blood banks listed yet for this district.
      </p>
    `;

  } else {

    // Populate blood bank cards
    banks.forEach(bank => {

      list.innerHTML += `
        <div class="border border-gray-200 rounded-xl p-4 hover:shadow transition">
          
          <h4 class="font-semibold text-gray-800 mb-1">
            ${bank.name}
          </h4>

          <p class="text-sm text-gray-600 mb-1">
            📍 ${bank.address}
          </p>

          <p class="text-sm text-gray-700 mb-1">
            📞 ${bank.contact}
          </p>

          <p class="text-sm text-red-600">
            📧 ${bank.email}
          </p>

        </div>
      `;

    });

  }

  // Show modal
  modal.classList.add("active");
  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";
}

// Close popup
function closeDistrictModal() {
  const modal = document.getElementById("districtModal");
  modal.classList.remove("active");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Toast Notification System
function showToast(type, message) {
  const container = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icons = {
    success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
    error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  };
  
  toast.innerHTML = `
    <div class="toast-icon">${icons[type]}</div>
    <div class="flex-1">
      <p class="font-medium text-gray-800">${type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <p class="text-sm text-gray-600">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Utility Functions
function getInventoryStatus(units) {
  if (units > 100) return 'Surplus';
  if (units > 30) return 'Adequate';
  return 'Low';
}

function formatNumber(num) {
  return num.toLocaleString('en-IN');
}

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Populate Blood Group Dropdowns
function populateBloodGroups() {
  const selects = document.querySelectorAll('select[name="bloodGroup"]');
  selects.forEach(select => {
    AppData.bloodGroups.forEach(group => {
      const option = document.createElement('option');
      option.value = group;
      option.textContent = group;
      select.appendChild(option);
    });
  });
}

// Call on load
document.addEventListener('DOMContentLoaded', populateBloodGroups);
