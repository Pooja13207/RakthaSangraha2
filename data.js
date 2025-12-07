// RakthaSangraha - Data Configuration File
// Edit this file to update the UI automatically

const AppData = {
  // Dashboard Statistics
  stats: {
    bloodBanks: 156,
    hospitals: 89,
    activeDonors: 12450,
    criticalRequests: 23
  },

  // Blood Inventory Data
  bloodInventory: [
    { group: "A+", units: 245, banks: 42, demand: "High" },
    { group: "A-", units: 28, banks: 18, demand: "Critical" },
    { group: "B+", units: 189, banks: 38, demand: "Medium" },
    { group: "B-", units: 15, banks: 12, demand: "Critical" },
    { group: "AB+", units: 78, banks: 25, demand: "Low" },
    { group: "AB-", units: 22, banks: 10, demand: "Critical" },
    { group: "O+", units: 312, banks: 48, demand: "High" },
    { group: "O-", units: 45, banks: 22, demand: "High" }
  ],

  // Urgent Blood Requests
  urgentRequests: [
    {
      id: 1,
      hospital: "City General Hospital",
      location: "Bangalore Central",
      bloodType: "O-",
      units: 4,
      note: "Emergency surgery patient - immediate need",
      dateTime: "2024-12-05 14:30",
      priority: "Critical"
    },
    {
      id: 2,
      hospital: "Apollo Medical Center",
      location: "Koramangala",
      bloodType: "AB-",
      units: 2,
      note: "Cancer patient undergoing treatment",
      dateTime: "2024-12-05 13:15",
      priority: "Urgent"
    },
    {
      id: 3,
      hospital: "Manipal Hospital",
      location: "Whitefield",
      bloodType: "B-",
      units: 3,
      note: "Accident victim - multiple injuries",
      dateTime: "2024-12-05 12:45",
      priority: "Critical"
    },
    {
      id: 4,
      hospital: "Fortis Healthcare",
      location: "Bannerghatta Road",
      bloodType: "A-",
      units: 2,
      note: "Scheduled heart surgery tomorrow",
      dateTime: "2024-12-05 11:00",
      priority: "Urgent"
    },
    {
      id: 5,
      hospital: "Narayana Health",
      location: "Electronic City",
      bloodType: "O+",
      units: 5,
      note: "Maternity emergency case",
      dateTime: "2024-12-05 10:30",
      priority: "Critical"
    }
  ],

  // District-Wise Data
// District-Wise Data
// District-Wise Data (All Karnataka Districts – Alphabetical Order)
districts: [
  { name: "Bagalkote", totalUnits: 220, bloodBanks: 8, criticalTypes: 4, status: "Low" },
  { name: "Ballari", totalUnits: 230, bloodBanks: 9, criticalTypes: 3, status: "Low" },
  { name: "Belagavi", totalUnits: 450, bloodBanks: 18, criticalTypes: 3, status: "Low" },
  { name: "Bengaluru Rural", totalUnits: 380, bloodBanks: 12, criticalTypes: 4, status: "Low" },
  { name: "Bengaluru Urban", totalUnits: 1250, bloodBanks: 45, criticalTypes: 2, status: "Adequate" },
  { name: "Bidar", totalUnits: 180, bloodBanks: 6, criticalTypes: 4, status: "Low" },
  { name: "Chamarajanagar", totalUnits: 190, bloodBanks: 7, criticalTypes: 3, status: "Low" },
  { name: "Chikkaballapura", totalUnits: 240, bloodBanks: 8, criticalTypes: 3, status: "Low" },
  { name: "Chikkamagaluru", totalUnits: 310, bloodBanks: 10, criticalTypes: 3, status: "Low" },
  { name: "Chitradurga", totalUnits: 260, bloodBanks: 9, criticalTypes: 3, status: "Low" },
  { name: "Dakshina Kannada", totalUnits: 720, bloodBanks: 22, criticalTypes: 2, status: "Adequate" },
  { name: "Davanagere", totalUnits: 430, bloodBanks: 13, criticalTypes: 3, status: "Low" },
  { name: "Dharwad", totalUnits: 295, bloodBanks: 9, criticalTypes: 3, status: "Low" },
  { name: "Gadag", totalUnits: 210, bloodBanks: 7, criticalTypes: 3, status: "Low" },
  { name: "Hassan", totalUnits: 460, bloodBanks: 16, criticalTypes: 2, status: "Adequate" },
  { name: "Haveri", totalUnits: 260, bloodBanks: 8, criticalTypes: 3, status: "Low" },
  { name: "Kalaburagi", totalUnits: 190, bloodBanks: 8, criticalTypes: 6, status: "Critical" },
  { name: "Kodagu", totalUnits: 160, bloodBanks: 6, criticalTypes: 3, status: "Low" },
  { name: "Kolar", totalUnits: 310, bloodBanks: 10, criticalTypes: 4, status: "Low" },
  { name: "Koppal", totalUnits: 160, bloodBanks: 6, criticalTypes: 4, status: "Low" },
  { name: "Mandya", totalUnits: 420, bloodBanks: 14, criticalTypes: 2, status: "Adequate" },
  { name: "Mysuru", totalUnits: 890, bloodBanks: 28, criticalTypes: 1, status: "Adequate" },
  { name: "Raichur", totalUnits: 170, bloodBanks: 6, criticalTypes: 4, status: "Low" },
  { name: "Ramanagara", totalUnits: 260, bloodBanks: 9, criticalTypes: 3, status: "Low" },
  { name: "Shivamogga", totalUnits: 520, bloodBanks: 14, criticalTypes: 2, status: "Adequate" },
  { name: "Tumakuru", totalUnits: 340, bloodBanks: 11, criticalTypes: 3, status: "Low" },
  { name: "Udupi", totalUnits: 380, bloodBanks: 11, criticalTypes: 2, status: "Adequate" },
  { name: "Uttara Kannada", totalUnits: 350, bloodBanks: 12, criticalTypes: 3, status: "Low" },
  { name: "Vijayapura", totalUnits: 200, bloodBanks: 7, criticalTypes: 4, status: "Low" },
  { name: "Vijayanagara", totalUnits: 150, bloodBanks: 5, criticalTypes: 3, status: "Low" },
  { name: "Yadgir", totalUnits: 140, bloodBanks: 5, criticalTypes: 5, status: "Critical" }
],


  // Blood Groups for dropdowns
  bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],

  // Urgency Levels
  urgencyLevels: ["Urgent", "Critical"]
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppData;
}
// Blood Banks by District

// Blood Banks by District – All Karnataka Districts
const districtBloodBanks = {
  "Bagalkote": [
    {
      name: "Bagalkote District Blood Bank",
      address: "District Hospital Campus, Bagalkote",
      contact: "9876543101",
      email: "bagalkote.district@bloodbank.org"
    },
    {
      name: "Navanagar Blood Center",
      address: "Navanagar Main Road, Bagalkote",
      contact: "9876543102",
      email: "navanagar@bloodbank.org"
    }
  ],

  "Ballari": [
    {
      name: "Ballari District Blood Bank",
      address: "Civil Hospital Road, Ballari",
      contact: "9876543111",
      email: "ballari.district@bloodbank.org"
    },
    {
      name: "VIMS Blood Center",
      address: "Vijayanagara Institute Campus, Ballari",
      contact: "9876543112",
      email: "vims.ballari@bloodbank.org"
    }
  ],

  "Belagavi": [
    {
      name: "KLE Hospital Blood Bank",
      address: "Nehru Nagar, Belagavi",
      contact: "9876543121",
      email: "kle.belagavi@bloodbank.org"
    },
    {
      name: "Belagavi Red Cross Blood Bank",
      address: "Club Road, Belagavi",
      contact: "9876543122",
      email: "redcross.belagavi@bloodbank.org"
    }
  ],

  "Bengaluru Rural": [
    {
      name: "Bengaluru Rural District Blood Bank",
      address: "District Hospital, Hoskote",
      contact: "9876543131",
      email: "blr.rural@bloodbank.org"
    },
    {
      name: "Doddaballapura Blood Center",
      address: "Bus Stand Road, Doddaballapura",
      contact: "9876543132",
      email: "doddaballapura@bloodbank.org"
    }
  ],

  "Bengaluru Urban": [
    {
      name: "BMCRI Blood Bank",
      address: "Victoria Hospital Campus, KR Market, Bengaluru",
      contact: "9876543141",
      email: "bmcri.blr@bloodbank.org"
    },
    {
      name: "St John’s Blood Bank",
      address: "St John’s Medical College, Koramangala, Bengaluru",
      contact: "9876543142",
      email: "stjohns.blr@bloodbank.org"
    },
    {
      name: "Lions Blood Centre",
      address: "Basavanagudi, Bengaluru",
      contact: "9876543143",
      email: "lions.blr@bloodbank.org"
    }
  ],

  "Bidar": [
    {
      name: "Bidar District Blood Bank",
      address: "District Hospital, Bidar",
      contact: "9876543151",
      email: "bidar.district@bloodbank.org"
    },
    {
      name: "Basavakalyan Blood Center",
      address: "Main Road, Basavakalyan",
      contact: "9876543152",
      email: "basavakalyan@bloodbank.org"
    }
  ],

  "Chamarajanagar": [
    {
      name: "Chamarajanagar District Blood Bank",
      address: "District Hospital Campus, Chamarajanagar",
      contact: "9876543161",
      email: "chamarajanagar@bloodbank.org"
    },
    {
      name: "Kollegal Blood Center",
      address: "Court Road, Kollegal",
      contact: "9876543162",
      email: "kollegal@bloodbank.org"
    }
  ],

  "Chikkaballapura": [
    {
      name: "Chikkaballapura District Blood Bank",
      address: "Near KSRTC Bus Stand, Chikkaballapura",
      contact: "9876543171",
      email: "chikkaballapura@bloodbank.org"
    },
    {
      name: "Bagepalli Blood Center",
      address: "Bagepalli Town Hospital, Bagepalli",
      contact: "9876543172",
      email: "bagepalli@bloodbank.org"
    }
  ],

  "Chikkamagaluru": [
    {
      name: "Chikkamagaluru District Blood Bank",
      address: "District Hospital, Chikkamagaluru",
      contact: "9876543181",
      email: "chikkamagaluru@bloodbank.org"
    },
    {
      name: "Kadur Blood Center",
      address: "Kadur Taluk Hospital, Kadur",
      contact: "9876543182",
      email: "kadur@bloodbank.org"
    }
  ],

  "Chitradurga": [
    {
      name: "Chitradurga District Blood Bank",
      address: "Near Fort Area, Chitradurga",
      contact: "9876543191",
      email: "chitradurga@bloodbank.org"
    },
    {
      name: "Hiriyur Blood Center",
      address: "Hiriyur Government Hospital, Hiriyur",
      contact: "9876543192",
      email: "hiriyur@bloodbank.org"
    }
  ],

  "Dakshina Kannada": [
    {
      name: "District Government Blood Bank",
      address: "Wenlock Hospital Campus, Mangaluru",
      contact: "9876543201",
      email: "wenlock.dk@bloodbank.org"
    },
    {
      name: "Father Muller Blood Center",
      address: "Kankanady, Mangaluru",
      contact: "9876543202",
      email: "fathermuller@bloodbank.org"
    }
  ],

  "Davanagere": [
    {
      name: "Davanagere District Blood Bank",
      address: "District Hospital, Davanagere",
      contact: "9876543211",
      email: "davanagere@bloodbank.org"
    },
    {
      name: "JJM Medical College Blood Bank",
      address: "JJM Campus, Davanagere",
      contact: "9876543212",
      email: "jjm.dvg@bloodbank.org"
    }
  ],

  "Dharwad": [
    {
      name: "Dharwad District Blood Bank",
      address: "Civil Hospital Road, Dharwad",
      contact: "9876543221",
      email: "dharwad.district@bloodbank.org"
    },
    {
      name: "SDM Blood Center",
      address: "SDM Hospital, Dharwad",
      contact: "9876543222",
      email: "sdm.dharwad@bloodbank.org"
    }
  ],

  "Gadag": [
    {
      name: "Gadag District Blood Bank",
      address: "Near Railway Station, Gadag",
      contact: "9876543231",
      email: "gadag@bloodbank.org"
    },
    {
      name: "Betageri Blood Center",
      address: "Betageri Town Hospital, Gadag",
      contact: "9876543232",
      email: "betageri@bloodbank.org"
    }
  ],

  "Hassan": [
    {
      name: "Hassan District Blood Bank",
      address: "District Hospital, Hassan",
      contact: "9876543241",
      email: "hassan@bloodbank.org"
    },
    {
      name: "Sri Chamarajendra Hospital Blood Center",
      address: "BM Road, Hassan",
      contact: "9876543242",
      email: "sch.hassan@bloodbank.org"
    }
  ],

  "Haveri": [
    {
      name: "Haveri District Blood Bank",
      address: "District Hospital, Haveri",
      contact: "9876543251",
      email: "haveri@bloodbank.org"
    },
    {
      name: "Ranebennur Blood Center",
      address: "Ranebennur Government Hospital, Ranebennur",
      contact: "9876543252",
      email: "ranebennur@bloodbank.org"
    }
  ],

  "Kalaburagi": [
    {
      name: "GIMS Blood Bank",
      address: "Gulbarga Institute Campus, Kalaburagi",
      contact: "9876543261",
      email: "gims.kalaburagi@bloodbank.org"
    },
    {
      name: "Kalaburagi District Blood Bank",
      address: "Super Market Road, Kalaburagi",
      contact: "9876543262",
      email: "kalaburagi.district@bloodbank.org"
    }
  ],

  "Kodagu": [
    {
      name: "Kodagu District Blood Bank",
      address: "Madikeri District Hospital, Madikeri",
      contact: "9876543271",
      email: "kodagu@bloodbank.org"
    },
    {
      name: "Virajpet Blood Center",
      address: "Taluk Hospital, Virajpet",
      contact: "9876543272",
      email: "virajpet@bloodbank.org"
    }
  ],

  "Kolar": [
    {
      name: "Kolar District Blood Bank",
      address: "Near KSRTC Depot, Kolar",
      contact: "9876543281",
      email: "kolar@bloodbank.org"
    },
    {
      name: "KGF Blood Center",
      address: "Robertsonpet Government Hospital, KGF",
      contact: "9876543282",
      email: "kgf@bloodbank.org"
    }
  ],

  "Koppal": [
    {
      name: "Koppal District Blood Bank",
      address: "District Hospital Campus, Koppal",
      contact: "9876543291",
      email: "koppal@bloodbank.org"
    },
    {
      name: "Gangavathi Blood Center",
      address: "Gangavathi Taluk Hospital, Gangavathi",
      contact: "9876543292",
      email: "gangavathi@bloodbank.org"
    }
  ],

  "Mandya": [
    {
      name: "Mandya District Blood Bank",
      address: "Mandya District Hospital, Mandya",
      contact: "9876543301",
      email: "mandya@bloodbank.org"
    },
    {
      name: "Pandavapura Blood Center",
      address: "Taluk Hospital, Pandavapura",
      contact: "9876543302",
      email: "pandavapura@bloodbank.org"
    }
  ],

  "Mysuru": [
    {
      name: "KR Hospital Blood Bank",
      address: "Irwin Road, Mysuru",
      contact: "9876543311",
      email: "krh.mysuru@bloodbank.org"
    },
    {
      name: "JSS Hospital Blood Bank",
      address: "MG Road, Mysuru",
      contact: "9876543312",
      email: "jss.mysuru@bloodbank.org"
    }
  ],

  "Raichur": [
    {
      name: "Raichur District Blood Bank",
      address: "District Hospital, Raichur",
      contact: "9876543321",
      email: "raichur@bloodbank.org"
    },
    {
      name: "Sindhanur Blood Center",
      address: "Sindhanur Taluk Hospital, Sindhanur",
      contact: "9876543322",
      email: "sindhanur@bloodbank.org"
    }
  ],

  "Ramanagara": [
    {
      name: "Ramanagara District Blood Bank",
      address: "District Hospital, Ramanagara",
      contact: "9876543331",
      email: "ramanagara@bloodbank.org"
    },
    {
      name: "Kanakapura Blood Center",
      address: "Kanakapura Taluk Hospital, Kanakapura",
      contact: "9876543332",
      email: "kanakapura@bloodbank.org"
    }
  ],

  "Shivamogga": [
    {
      name: "Shivamogga District Blood Bank",
      address: "McGann Hospital Campus, Shivamogga",
      contact: "9876543341",
      email: "shivamogga@bloodbank.org"
    },
    {
      name: "Bhadravathi Blood Center",
      address: "Bhadravathi Government Hospital, Bhadravathi",
      contact: "9876543342",
      email: "bhadravathi@bloodbank.org"
    }
  ],

  "Tumakuru": [
    {
      name: "Tumakuru District Blood Bank",
      address: "District Hospital, Tumakuru",
      contact: "9876543351",
      email: "tumakuru@bloodbank.org"
    },
    {
      name: "Siddaganga Blood Center",
      address: "Siddaganga Mutt Campus, Tumakuru",
      contact: "9876543352",
      email: "siddaganga@bloodbank.org"
    }
  ],

  "Udupi": [
    {
      name: "Udupi District Blood Bank",
      address: "District Hospital, Udupi",
      contact: "9876543361",
      email: "udupi@bloodbank.org"
    },
    {
      name: "KMC Manipal Blood Center",
      address: "Kasturba Hospital Campus, Manipal",
      contact: "9876543362",
      email: "kmc.manipal@bloodbank.org"
    }
  ],

  "Uttara Kannada": [
    {
      name: "Karwar District Blood Bank",
      address: "District Hospital, Karwar",
      contact: "9876543371",
      email: "karwar@bloodbank.org"
    },
    {
      name: "Sirsi Blood Center",
      address: "Sirsi Taluk Hospital, Sirsi",
      contact: "9876543372",
      email: "sirsi@bloodbank.org"
    }
  ],

  "Vijayapura": [
    {
      name: "Vijayapura District Blood Bank",
      address: "District Hospital, Vijayapura",
      contact: "9876543381",
      email: "vijayapura@bloodbank.org"
    },
    {
      name: "Sindagi Blood Center",
      address: "Sindagi Taluk Hospital, Sindagi",
      contact: "9876543382",
      email: "sindagi@bloodbank.org"
    }
  ],

  "Vijayanagara": [
    {
      name: "Hosapete Blood Bank",
      address: "Hosapete Government Hospital, Hosapete",
      contact: "9876543391",
      email: "hosapete@bloodbank.org"
    },
    {
      name: "Harapanahalli Blood Center",
      address: "Harapanahalli Taluk Hospital, Harapanahalli",
      contact: "9876543392",
      email: "harapanahalli@bloodbank.org"
    }
  ],

  "Yadgir": [
    {
      name: "Yadgir District Blood Bank",
      address: "District Hospital, Yadgir",
      contact: "9876543401",
      email: "yadgir@bloodbank.org"
    },
    {
      name: "Shorapur Blood Center",
      address: "Shorapur Taluk Hospital, Shorapur",
      contact: "9876543402",
      email: "shorapur@bloodbank.org"
    }
  ]
};

