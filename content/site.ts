// Everything that shows up across the site. Edit here, not in the pages.

export const site = {
  name: "The Nest Cottage",
  legalName: "THENEST-COTTAGE LLC",
  url: "https://thenest-cottage.com",
  description:
    "A lakeside cottage in Webster, NY, for travel nurses and longer stays near Rochester.",
  address: {
    street: "533 Forest Lawn Road",
    city: "Webster",
    state: "NY",
    zip: "14580",
  },
  phone: "585.645.2958",
  phoneHref: "tel:+15856452958",
  smsHref: "sms:+15856452958",
  email: "thenestcottage2022@gmail.com",
  instagram: "https://www.instagram.com/thenestcottage2022/",
  furnishedFinder: "https://www.furnishedfinder.com/property/423247_1",
  furnishedFinderReviews: "https://www.furnishedfinder.com/property/423247_1#reviews",
  matterport: "https://my.matterport.com/show/?m=UFpAPNqqYGc",
};

export const nav = [
  { href: "/#the-cottage", label: "The cottage" },
  { href: "/stay", label: "Guest info" },
  { href: "/guide", label: "Local guide" },
  { href: "/contact", label: "Contact" },
];

// The quick facts under the hero.
export const stayFacts = [
  { label: "Stays", value: "4 to 13+ weeks" },
  { label: "Guests", value: "Up to 2" },
  { label: "Check-in", value: "3:00 pm" },
  { label: "Check-out", value: "11:00 am" },
  { label: "To Rochester General", value: "About 15 min" },
];

export const reviews = [
  {
    title: "I fell in love with the Nest!",
    name: "Danielle",
    date: "July 2023",
    stay: "About two months on a travel contract",
    text: "The commute was easy, the decor and gardens are lovely, and Michael and Trisha were wonderful hosts. A golden find.",
  },
  {
    title: "Amazing place to stay!",
    name: "Leila",
    date: "January 2023",
    stay: "Starting a contract away from home",
    text: "It checked every box for a home away from home. I felt safe and welcome, the drive to Rochester General was under 15 minutes, and the owners made sure I had more than I needed. Great for a solo traveler or a family.",
  },
];

// What's in the cottage. Taken from the listing photos, so double-check it.
export const amenities = [
  { title: "Two bedrooms", text: "Each with a comfortable bed and a ceiling fan. One has a desk for charting or paperwork." },
  { title: "Full kitchen", text: "Gas range, dishwasher, full-size fridge, microwave and a coffee maker." },
  { title: "Living room", text: "A fireplace, a big TV and a big front window looking toward the lake." },
  { title: "Sunroom", text: "Windows on three sides and a door out to the patio." },
  { title: "Washer and dryer", text: "In the mudroom, with a place to drop your bag and shoes at the door." },
  { title: "Outside", text: "A stamped patio with a fire table, a grill, gardens and a front deck with a view of Lake Ontario." },
];
