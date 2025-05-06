module.exports = [
  {
    name: "Paracetamol",
    description: "Pain reliever and fever reducer",
    dosages: ["500mg", "650mg"],
    packageSizes: ["10 tablets", "20 tablets"],
    prescription: false,
    prices: {
      Nigeria: {
        "500mg": 100,
        "650mg": 120,
      },
      Ghana: {
        "500mg": 80,
        "650mg": 100,
      },
    },
  },
  {
    name: "Amoxicillin",
    description: "Used to treat bacterial infections",
    dosages: ["250mg", "500mg"],
    packageSizes: ["capsules", "syrup"],
    prescription: true,
    prices: {
      Nigeria: {
        "250mg": 150,
        "500mg": 200,
      },
      Kenya: {
        "250mg": 130,
        "500mg": 180,
      },
    },
  },
  {
    name: "Ibuprofen",
    description: "Reduces fever and treats pain or inflammation",
    dosages: ["200mg", "400mg"],
    packageSizes: ["24 tablets", "12 tablets"],
    prescription: false,
    prices: {
      Nigeria: {
        "200mg": 90,
        "400mg": 160,
      },
      Ghana: {
        "200mg": 75,
        "400mg": 140,
      },
    },
  },
  {
    name: "Vitamin C",
    description: "Boosts immune system",
    dosages: ["100mg", "500mg"],
    packageSizes: ["30 tablets", "60 tablets"],
    prescription: false,
    prices: {
      Nigeria: {
        "100mg": 70,
        "500mg": 120,
      },
    },
  },
];
