interface Industry {
  [key: string]: string[];
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


const industries: Industry = {
  "Electric and Hybrid Vehicles": [
    "Battery Technology",
    "Electric Motors",
    "Charging Infrastructure",
    "Hybrid Systems",
    "Vehicle Design"
  ],
  "Vehicles and Components": [
    "Chassis",
    "Engine Components",
    "Transmission Systems",
    "Braking Systems",
    "Fuel Systems"
  ],
  "Shared Mobility": [
    "Car Sharing",
    "Ride Hailing",
    "Bike Sharing",
    "Scooter Sharing",
    "Fleet Management"
  ],
  "Tire": [
    "Manufacturing",
    "Design",
    "Recycling",
    "Performance Testing",
    "Distribution"
  ],
  "Connectivity Technology": [
    "Telematics",
    "Vehicle-to-Everything (V2X)",
    "Infotainment Systems",
    "Navigation Systems",
    "Remote Diagnostics"
  ],
  "Sensors, Electronics, and Electrical Equipment": [
    "LIDAR",
    "RADAR",
    "Cameras",
    "Control Units",
    "Wiring Harnesses"
  ]
};

// Example usage
console.log(industries["Electric and Hybrid Vehicles"]);
console.log(industries["Shared Mobility"]);
export default industries;