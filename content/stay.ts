// Guest info and "What to pack".

export const houseRules = [
  { title: "Check-in and check-out", text: "Check-in is at 3:00 pm and check-out is by 11:00 am. We're flexible when we can be, so just ask." },
  { title: "Up to two guests", text: "The cottage sleeps a maximum of two guests." },
  { title: "Renter must be 25+", text: "The person booking needs to be 25 or older." },
  { title: "No parties or pets", text: "Parties aren't allowed and we can't host pets. If you need boarding, book ahead. Paws and Claws in Rochester, (585) 600-7297, is one option. We don't get anything for recommending them." },
  { title: "Quiet hours, 10 pm to 9 am", text: "Forest Lawn is a small lakeside community, so we ask guests to keep things quiet overnight." },
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
  { season: "Summer", note: "Pleasant, sometimes wet, muggy or hot.", items: summer },
  { season: "Fall", note: "Usually gorgeous, with amazing color.", items: [...summer, "A heavy sweater", "A light water-resistant jacket", "Fleece or a vest", "Hiking boots", "Rain boots", "Hat, scarf and gloves"] },
  { season: "Winter", note: "Beautiful, and a lot more fun when you're dressed for it.", items: [...summer.filter((i) => i !== "Flip flops"), "A heavy sweater", "A quilted jacket or anorak", "Fleece or a vest", "Snow boots", "Hat, scarf and gloves"] },
  { season: "Spring", note: "Damp and chilly early on (locals call it mud season). Late spring, when everything blooms, is the best of it.", items: [...summer, "A light water-resistant jacket", "Fleece", "Hiking boots", "Rain boots", "Hat, scarf and gloves"] },
];
