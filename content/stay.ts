// Guest info and "What to pack".

export const houseRules = [
  { title: "Check-in: 3:00 pm", text: "Flexible when permissible." },
  { title: "Check-out: 11:00 am", text: "Flexible when permissible." },
  { title: "Max of 2 guests", text: "The Nest Cottage sleeps a maximum of two guests." },
  { title: "Age requirement", text: "You must be 25 or older to book The Nest Cottage." },
  { title: "No parties", text: "We do not allow parties at this property. Yes, we are officially party poopers." },
  { title: "No pets", text: "Although we love fur babies, we cannot accommodate pets. It is our policy for the comfort of all our guests. Trust me, no one wants to be sneezing and sniffling due to allergies. \"ACHOO!\" \"Bless you!\"" },
  { title: "Local boarding tip", text: "If you need a boarding option, we recommend that you book in advance. When we travel, we board Madi, and she loves it! Paws and Claws, (585) 600-7297, 23 Linden Park, Rochester, NY. And no, we get nothing for this recommendation. Zip, zero, nothing, I tell you!" },
  { title: "Quiet hours: 10:00 pm to 9:00 am", text: "The Nest Cottage is located in a wonderful lakeside community called Forest Lawn. We appreciate that you kindly respect our friends and neighbors by keeping the noise down after 10 pm and before 9 am. Thank you so very much. This way everyone can enjoy the lakeside location." },
];

export const bestTimes = [
  { what: "Growing season", when: "April 17 to November 2" },
  { what: "Outdoor activities", when: "Late June to early September, best in the second week of August" },
  { what: "Hot-weather activities", when: "July to mid-August, best in the last week of July" },
  { what: "Muggiest stretch", when: "June 12 to September 18" },
  { what: "Snow season", when: "November 14 to April 11, most snow in February" },
];

// Average monthly high/low in °F.
export const temps = [
  { month: "Jan", high: 30, low: 21, note: "Freezing cold, cloudiest month" },
  { month: "Feb", high: 32, low: 22, note: "Coldest stretch, snowiest month" },
  { month: "Mar", high: 39, low: 32, note: "Still wintry" },
  { month: "Apr", high: 50, low: 39, note: "Chilly and wet" },
  { month: "May", high: 61, low: 50, note: "Mild and wet" },
  { month: "Jun", high: 77, low: 56, note: "Pleasant, wettest month, longest day" },
  { month: "Jul", high: 82, low: 61, note: "Hottest and muggiest month" },
  { month: "Aug", high: 80, low: 60, note: "Warm, clearest month" },
  { month: "Sep", high: 73, low: 53, note: "Comfortable, rainy" },
  { month: "Oct", high: 58, low: 48, note: "Peak fall color" },
  { month: "Nov", high: 46, low: 37, note: "Chilly, latest sunrise" },
  { month: "Dec", high: 36, low: 29, note: "Wintry, shortest day" },
];

const summer = ["Tank tops", "Short- and long-sleeve tees", "A light sweater", "Shorts", "Pants or jeans", "Flip flops", "Sneakers"];

export const packing = [
  { season: "Summer", note: "Summer can be beautifully pleasant, or wet, muggy, hot and humid.", items: summer },
  { season: "Fall", note: "Fall is usually gorgeous, not too hot or too cool, and the colors are amazing.", items: [...summer, "A heavy sweater", "A light water-resistant jacket", "Fleece or a vest", "Hiking boots", "Rain boots", "Hat, scarf and gloves"] },
  { season: "Winter", note: "Winter is beautiful, but come prepared, as it is more fun if you are dressed for the weather.", items: [...summer.filter((i) => i !== "Flip flops"), "A heavy sweater", "A quilted jacket or anorak", "Fleece or a vest", "Snow boots", "Hat, scarf and gloves"] },
  { season: "Spring", note: "Spring is often damp and bone-chilling. I call it \"Mud Season.\" It's best in late spring, when everything is in bloom. Come prepared for whatever may be.", items: [...summer, "A light water-resistant jacket", "Fleece", "Hiking boots", "Rain boots", "Hat, scarf and gloves"] },
];
