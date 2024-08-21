interface Industry {
  [key: string]: string[];
}
interface butt {
   head:string,
   link:string
}

export function convert(mon: string) {
  let month;
  if (mon == "01") {
    month = "Jan";
  } else if (mon == "02") {
    month = "Feb";
  } else if (mon == "03") {
    month = "March";
  } else if (mon == "04") {
    month = "April";
  } else if (mon == "05") {
    month = "May";
  } else if (mon == "06") {
    month = "June";
  } else if (mon == "07") {
    month = "July";
  } else if (mon == "08") {
    month = "Aug";
  } else if (mon == "09") {
    month = "Sept";
  } else if (mon == "10") {
    month = "Oct";
  } else if (mon == "11") {
    month = "Nov";
  } else {
    month = "Dec";
  }
  return month;
}

const indus: butt[] = [
  {
    head:"Electric and Hybrid Vehicles",
    link:"/electric-and-hybrid-vehicles"
  },
  {
    head:"Vehicles and Components",
    link:"/vehicles-components"
  },
  {
    head:"Shared Mobility",
    link:"/shared-mobility"
  },
  {
    head:"Tire",
    link:"/tire"
  },
  {
    head:"Connectivity Technology",
    link:"/connectivity-technology"
  },
  {
    head:"Sensors, Electronics, and Electrical Equipment",
    link:"/sensors-electronics-and-electrical-equipment"
  },
]

const industries: Industry = {
  "Electric and Hybrid Vehicles": [
    "Battery Technology & Manufacturing",
    "EV Powertrains",
    "Charging Infrastructure",
    "Hybrid Systems",
    "EV, Components & Services"
  ],
  "Vehicles and Components": [
    "Chassis & Design",
    "Engine & Components",
    "Transmission Systems",
    "Braking Systems",
    "Fuel Systems"
  ],
  "Shared Mobility": [
    "Car Sharing",
    "Ride Hailing",
    "Bike Sharing",
    "Scooter Sharing",
    "Integrated & Autonomous Mobility Services"
  ],
  "Tire": [
    "Manufacturing",
    "Design",
    "Recycling",
    "Performance Testing",
    "Distribution"
  ],
  "Connectivity Technology": [
    "Telematics & Services",
    "Vehicle-to-Everything (V2X)",
    "Infotainment Systems",
    "Navigation Systems",
    "Advanced Vehicle Safety & Connectivity Systems"
  ],
  "Sensors, Electronics, and Electrical Equipment": [
    "LIDAR",
    "RADAR",
    "Cameras",
    "Control Units",
    "Electrical & Electronic Components"
  ]
};

// Example usage
console.log(industries["Electric and Hybrid Vehicles"]);
console.log(industries["Shared Mobility"]);
export  {industries,indus};