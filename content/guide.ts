// The local guide. Each area has Eat, See and Shop lists, in order of our favorites.
// To add a place, copy a line and change it. `group` is optional (used for the Finger Lakes).

export type Place = {
  name: string;
  note?: string;
  address?: string;
  url?: string;
  group?: string;
};

export type Area = {
  slug: string;
  name: string;
  distance: string;
  intro: string;
  eat: Place[];
  see: Place[];
  shop: Place[];
};

export const areas: Area[] = [
  {
    slug: "webster",
    name: "Webster",
    distance: "Right here",
    intro:
      "Our hometown, a suburb on Lake Ontario and Irondequoit Bay, northeast of Rochester. Its motto is “Where life is worth living,” and the parks, trails and water make the case.",
    eat: [
      { name: "Taka House Japanese Restaurant", note: "Our go-to for takeout.", address: "809 Ridge Rd", url: "http://takahouse.com/" },
      { name: "Ferrari Pizza Bar", note: "Our favorite pizza.", address: "1900 Empire Blvd", url: "https://www.ferraripizza.com/" },
      { name: "Hooligan's Eastside Grill", note: "Best sports bar around.", address: "809 Ridge Rd", url: "https://www.hooliganseastsidegrill.com/" },
      { name: "Cobblestone on Main", note: "A local hot spot. Its sister spot, Pub 235, is at 235 North Ave.", address: "109 W. Main St", url: "https://www.cobblestoneonmain.com/visit" },
      { name: "Mamma Lor's Cafe", note: "Jon and Amanda's pick. There's a second location at 1319 Lake Rd.", address: "1891 Ridge Rd", url: "https://www.mamalorscafe.com/" },
      { name: "Flaherty's Three Flags Inn", note: "Easy, casual dinner.", address: "1200 Bay Rd", url: "https://flahertys.com/" },
      { name: "JoJo's Bistro and Wine Bar", note: "Michael's pick.", address: "42 E. Main St", url: "https://restaurantjojo.com/" },
      { name: "Roc Style Chicken & Burger", note: "Garbage plates and chicken sandwiches.", address: "5 W. Main St", url: "http://roc.style/" },
      { name: "Simply Crepes", note: "Sweet and savory crepes.", address: "1229 Bay Rd", url: "https://www.simplycrepes.com/webster-penfield" },
      { name: "Seasoning Thai Bistro", note: "Austin and Jackie's pick.", address: "657 Ridge Rd", url: "https://www.seasoningthaibistro.com/" },
    ],
    see: [
      { name: "Bay Creek Paddling Center", note: "Kayaks and paddleboards on the bay.", url: "https://www.baycreek.com/" },
      { name: "Webster Park", note: "Creek trails, a fishing pier and Lake Ontario shoreline. Beautiful in the fall.", url: "https://www.monroecounty.gov/parks-webster" },
      { name: "Gosnell Big Woods and Big Field", note: "Old woods and a huge open field with trails.", url: "http://webstertrails.org/gosnell-big-woods-preserve/" },
      { name: "Hojack Trail", note: "A 3.5-mile trail very close to the cottage.", url: "https://www.alltrails.com/trail/us/new-york/webster-hojack-trail" },
      { name: "Lake Road", note: "Our favorite drive. Follow our driving tour.", url: "/guide/driving-tour" },
      { name: "South Bay Marina", note: "Boat rentals on Irondequoit Bay.", url: "https://southbaymarinany.com/boat-rentals/" },
      { name: "Whiting Road Nature Preserve", note: "A local favorite for walking.", url: "http://webstertrails.org/whiting-road-nature-preserve/" },
      { name: "Webster Arboretum", note: "Gardens for anyone who loves plants.", url: "https://www.websterarboretum.org/" },
      { name: "North Ponds Park", note: "An easy loop around the ponds.", url: "https://www.alltrails.com/trail/us/new-york/north-ponds-park-trail" },
      { name: "Lucien Morin Park", note: "Wetland hiking near the bay.", url: "https://www.monroecounty.gov/parks-wetlands" },
    ],
    shop: [
      { name: "Curated by Justin", address: "44 E. Main St", url: "https://www.curatedbyjustin.com/" },
      { name: "Kittelberger Florist & Gifts", address: "263 North Ave", url: "https://www.kittelbergerflorist.com/" },
      { name: "LaLa of Webster", address: "38 E. Main St", url: "https://lalaofwebster.com/" },
      { name: "Evie Boutique", note: "Clothing, just outside the village.", address: "1778 Empire Blvd", url: "https://www.shopevie.com/" },
      { name: "Nest Things", address: "11 E. Main St", url: "https://www.facebook.com/nestthings/" },
      { name: "RSalon and Spa", note: "An Aveda salon.", address: "28 E. Main St", url: "https://rsalon.com/" },
      { name: "Mod 4 U", address: "10 North Ave", url: "https://www.facebook.com/Mod4U/" },
      { name: "The North Bee", address: "27 North Ave", url: "https://www.thenorthbeeshop.com/" },
      { name: "The Garage Sale Store", address: "8 W. Main St" },
      { name: "Whimsies of Webster", address: "32 E. Main St" },
    ],
  },
  {
    slug: "rochester",
    name: "Rochester",
    distance: "About 20 minutes",
    intro:
      "The Flower City is a short drive west, with big parks on the lake, great museums and a lot of good food.",
    eat: [
      { name: "Fiamma Centro", note: "Our top pick for Italian.", address: "4 Elton St", url: "https://fiammarochester.com/" },
      { name: "Hose 22", note: "Trisha's pick.", address: "56 Stutson St", url: "https://www.hose22.com/" },
      { name: "Old Pueblo Grill", note: "Mexican street food.", address: "55 Russell St", url: "https://oldpueblogrillroc.com/" },
      { name: "Nosh", note: "A fan favorite.", address: "47 Russell St", url: "https://www.noshroc.com/" },
      { name: "Tony D's", note: "Michael's pick.", address: "288 Exchange St", url: "https://www.tonyds.net/" },
      { name: "Han Noodle Bar", note: "Austin and Jackie's pick.", address: "687 Monroe Ave", url: "http://hannoodlebar.com/" },
      { name: "Dogtown", note: "Amanda and Jon's pick.", address: "691 Monroe Ave", url: "https://dogtownhots.com/" },
      { name: "Dinosaur Bar-B-Que", note: "Best barbecue.", address: "99 Court St", url: "https://www.dinosaurbarbque.com/rochester/" },
      { name: "Pane Vino on the River", note: "Best patio.", address: "175 N. Water St", url: "https://panevinorochester.com/" },
      { name: "Napa Wood Fired Pizzeria", note: "Best pizza.", address: "573 S. Clinton Ave", url: "http://napawoodfired.com/" },
    ],
    see: [
      { name: "Durand-Eastman Park", note: "977 acres with about a mile of Lake Ontario shoreline.", address: "1200 Kings Hwy N.", url: "https://www.monroecounty.gov/parks-durandeastman" },
      { name: "Highland Park", note: "An Olmsted park and home of the Lilac Festival.", address: "180 Reservoir Ave", url: "https://www.monroecounty.gov/parks-highland" },
      { name: "Ontario Beach Park", note: "A lakefront beach where the Genesee River meets the lake.", address: "180 Beach Ave", url: "https://www.monroecounty.gov/parks-ontariobeach" },
      { name: "RMSC Science Center & Planetarium", note: "Hands-on exhibits and planetarium shows.", address: "657 East Ave", url: "https://rmsc.org/" },
      { name: "George Eastman Museum", note: "The photography museum, with Eastman's house and gardens.", address: "900 East Ave", url: "https://www.eastman.org/" },
      { name: "Memorial Art Gallery", note: "About 5,000 years of art under one roof.", address: "500 University Ave", url: "https://mag.rochester.edu/" },
      { name: "The Strong National Museum of Play", note: "A whole museum about play.", address: "1 Manhattan Square Dr.", url: "https://www.museumofplay.org/" },
      { name: "Rochester Public Market", note: "Open Tuesdays, Thursdays and Saturdays, all year.", address: "280 N. Union St", url: "https://cityofrochester.gov/publicmarket/" },
      { name: "Genesee Riverway Trail", note: "24 miles for walking, running and biking.", url: "https://www.cityofrochester.gov/grt/" },
      { name: "High Falls", note: "A waterfall downtown. Best seen from the Pont de Rennes Bridge.", url: "https://www.cityofrochester.gov/" },
    ],
    shop: [
      { name: "Rochester Public Market", address: "280 N. Union St", url: "https://cityofrochester.gov/publicmarket/" },
      { name: "Parkleigh", note: "Gifts, plus a MacKenzie-Childs shop at 235 Park Ave.", address: "215 Park Ave", url: "https://www.parkleigh.com/" },
      { name: "Record Archive", address: "33 1/3 Rockwood St", url: "https://recordarchive.com/" },
      { name: "House of Guitars", address: "645 Titus Ave", url: "https://houseofguitars.com/" },
      { name: "Warehouse 127", address: "120 Railroad St", url: "https://www.wh127home.com/" },
      { name: "Peppermint", address: "145 Culver Rd", url: "https://shop-peppermint.com/" },
      { name: "Eleventh Hour Gift Shop", address: "1922 Monroe Ave", url: "https://www.facebook.com/EleventhHourGift/" },
      { name: "Craft Company No. 6", address: "785 University Ave", url: "https://craftcompany.com/" },
      { name: "Arena's", address: "260 East Ave", url: "https://arenasforlife.com/" },
    ],
  },
  {
    slug: "erie-canal",
    name: "Erie Canal",
    distance: "About 25 minutes",
    intro:
      "Fairport, Pittsford and Bushnell's Basin sit right on the canal. Walk the towpath, watch the boats go under the lift bridge, and stay for dinner.",
    eat: [
      { name: "Mulconry's Irish Pub", note: "Our pick.", address: "17 Liftbridge Ln E., Fairport", url: "http://mulconrys.com/" },
      { name: "Moonlight Creamery", note: "Best ice cream.", address: "36 West Ave, Fairport", url: "https://moonlightcreamery.com/" },
      { name: "TK's Pizzeria", note: "Best pizza.", address: "27 Liftbridge Ln E., Fairport", url: "http://www.tkspizzeria.com/" },
      { name: "Rustic Taco", note: "Tacos with a twist. Moved here from Lake Road in Webster.", address: "30 Fairport Village Landing, Fairport", url: "https://rustictacobar.com/" },
      { name: "Simply Crepes", address: "7 Schoen Pl, Pittsford", url: "https://www.simplycrepes.com/" },
      { name: "Aladdin's Natural Eatery", note: "Eat right on the canal.", address: "8 Schoen Pl, Pittsford", url: "http://www.myaladdins.com/" },
      { name: "The Basin Pub", note: "Burgers.", address: "637 Pittsford-Victor Rd, Bushnell's Basin", url: "http://thebasinpub.com/" },
      { name: "Pittsford Farms Dairy", note: "More great ice cream.", address: "44 N. Main St, Pittsford", url: "https://www.pittsfordfarmsdairy.com/" },
      { name: "Pane Vino on Monroe", note: "Great patio.", address: "3400 Monroe Ave, Pittsford", url: "https://panevinorochester.com/" },
      { name: "Erie Grill", note: "Brunch.", address: "41 N. Main St, Pittsford", url: "https://www.eriegrill.com/" },
    ],
    see: [
      { name: "Erie Canal towpath", note: "Walk or bike between Fairport and Pittsford.", url: "https://www.ptny.org/cycle-the-erie-canal/trail-map" },
      { name: "The Cannery", note: "A good stop for a meal.", address: "25 Parce Ave, Fairport" },
      { name: "Perinton Park", note: "Sit by the water and relax.", address: "99 O'Connor Rd, Fairport", url: "https://perinton.org/" },
      { name: "Fairport Lift Bridge", note: "Watch the boats pass under it.", address: "Fairport" },
      { name: "Erie Canal Boat Company", note: "Kayak rentals, plus adaptive cycling and paddling.", address: "Fairport", url: "https://eriecanalboatcompany.com/" },
      { name: "Schoen Place", note: "Canal-side shops in Pittsford.", address: "Pittsford", url: "http://www.pittsfordbusiness.com/schoen-place/" },
      { name: "Great Embankment Park", note: "Where the canal runs high above the valley.", address: "Bushnell's Basin" },
      { name: "Colonial Belle Cruises", note: "Canal boat rides. (585) 223-9470.", address: "400 Packett's Landing, Fairport", url: "https://www.colonialbelle.com/" },
      { name: "Sam Patch tours", note: "Canal tours. (585) 662-5748.", address: "12 Schoen Pl, Pittsford", url: "https://www.sampatch.org/" },
      { name: "Breweries", note: "Fairport Brewing, Triphammer Bierwerks, Lock 32 and Copper Leaf all pour a good pint, often with live music." },
      { name: "Erie Canal Adventures", note: "Rent a canal boat for 3, 4 or 7 nights. (315) 986-3011.", address: "Fairport", url: "https://eriecanaladventures.com/" },
    ],
    shop: [
      { name: "Main Street Mercantile", address: "62 N. Main St, Fairport", url: "https://www.mainstreetmercantile.com/" },
      { name: "Diane Prince Furniture & Gifts", address: "92 S. Main St, Fairport", url: "http://dianeprincefurniture.com/" },
      { name: "Lombardi's Gourmet Imports", address: "124 N. Main St, Fairport", url: "https://lombardisgourmet.net/" },
      { name: "Purple Moon Cottage", note: "Gifts, collectibles and consignment furniture.", address: "581 Whitney Rd W., Fairport", url: "https://purplemooncottage.com/" },
      { name: "Chandeliers Boutique", address: "1 S. Main St, Pittsford", url: "https://chandeliers-btq.com/" },
      { name: "SJ's Village Boutique", address: "25 S. Main St, Pittsford" },
      { name: "Breathe at Home", address: "23 S. Main St, Pittsford", url: "https://pittsford.breatheyoga.com/" },
      { name: "Via Girasole Wine Bar", address: "3 Schoen Pl, Pittsford", url: "http://www.winebarinpittsfordny.com/" },
      { name: "Seven Story Brewing", note: "Right on the canal.", address: "604 Pittsford-Victor Rd, Bushnell's Basin", url: "https://sevenstorybrewing.com/" },
      { name: "Abbott's Frozen Custard", note: "Also right on the canal.", address: "624 Pittsford-Victor Rd, Bushnell's Basin", url: "https://www.abbottscustard.com/" },
    ],
  },
  {
    slug: "finger-lakes",
    name: "Finger Lakes",
    distance: "A day trip",
    intro:
      "There are eleven Finger Lakes (twelve, if you count Cazenovia), and you should see at least one. Skaneateles is Trisha's favorite.",
    eat: [
      { group: "Skaneateles", name: "Rosalie's Cucina", note: "Italian.", address: "841 W. Genesee St", url: "https://www.rosaliescucina.com/" },
      { group: "Skaneateles", name: "The Sherwood Inn", note: "Lake views.", address: "26 W. Genesee St", url: "https://sherwoodinns.com/" },
      { group: "Skaneateles", name: "The Krebs", note: "For a special occasion.", address: "53 W. Genesee St", url: "https://www.thekrebs.com/" },
      { group: "Skaneateles", name: "Blue Water Grill", note: "Pub food.", address: "11 W. Genesee St", url: "https://www.bluewatergrill.com/" },
      { group: "Cayuga Lake", name: "1833 Kitchen & Bar", note: "Brunch.", address: "391 Main St, Aurora", url: "https://1833kitchen.com/" },
      { group: "Cayuga Lake", name: "Fargo Bar & Grill", note: "Burgers.", address: "384 Main St, Aurora", url: "https://fargogrill.com/" },
      { group: "Cayuga Lake", name: "The Boatyard", note: "Casual.", address: "525 Old Taughannock Blvd, Ithaca", url: "https://theboatyardny.com/" },
      { group: "Canandaigua Lake", name: "Nolan's on the Lake", note: "Roast beef and lobster rolls.", address: "726 S. Main St, Canandaigua", url: "https://www.nolansonthelake.com/" },
      { group: "Canandaigua Lake", name: "Rose Tavern", note: "Lake views.", address: "770 S. Main St, Canandaigua", url: "https://www.rosetavern.com/" },
      { group: "Seneca Lake", name: "Blue Point Grill", note: "Lake views at the Harbor Hotel.", address: "16 N. Franklin St, Watkins Glen", url: "https://www.watkinsglenharborhotel.com/watkins-glen-ny-dining" },
    ],
    see: [
      { group: "Skaneateles", name: "Mid-Lakes Navigation", note: "Boat tours on the lake.", address: "3 W. Genesee St", url: "https://www.midlakesnavigation.com/" },
      { group: "Skaneateles", name: "Mirbeau Inn & Spa", note: "Gardens and spa treatments.", address: "851 W. Genesee St", url: "https://www.skaneateles.mirbeau.com/" },
      { group: "Skaneateles", name: "Thayer Park", note: "Sit by the water.", address: "E. Genesee St" },
      { group: "Canandaigua Lake", name: "CMAC", note: "Summer concerts.", address: "Canandaigua" },
      { group: "Canandaigua Lake", name: "Sand Bar", note: "Drinks on the water.", url: "https://www.lakehousecanandaigua.com/" },
      { group: "Cayuga Lake", name: "MacKenzie-Childs", note: "Tours and gardens overlooking the lake.", address: "3260 NY-90, Aurora", url: "https://www.mackenzie-childs.com/" },
      { group: "Cayuga Lake", name: "Buttermilk Falls and Taughannock Falls", note: "Two of the best waterfall hikes near Ithaca.", url: "https://parks.ny.gov/" },
      { group: "Cayuga Lake", name: "Ithaca Farmers Market", note: "Weekends at Steamboat Landing.", address: "545 3rd St, Ithaca", url: "https://ithacamarket.com/" },
      { group: "Seneca Lake", name: "Watkins Glen State Park", note: "The gorge trail is unforgettable.", url: "https://parks.ny.gov/parks/142/" },
      { group: "Seneca Lake", name: "Seneca Lake Wine Trail", note: "Herman J. Wiemer in Dundee is a favorite.", url: "https://senecalakewine.com/" },
      { group: "Seneca Lake", name: "Boat tours", note: "Belhurst Castle dinner cruises, True Love Schooner sails, or rent your own from Stivers Seneca Marine.", url: "https://sailtruelove.com/" },
    ],
    shop: [
      { group: "Cayuga Lake", name: "The Outlet at MacKenzie-Childs", note: "The famous checked pottery, with lake views.", address: "3260 NY-90, Aurora", url: "https://www.mackenzie-childs.com/" },
      { group: "Cayuga Lake", name: "Marmalade Mercantile", address: "414 N. Meadow St, Ithaca", url: "https://marmalademercantile.com/" },
      { group: "Skaneateles", name: "Drooz and Company", address: "36 E. Genesee St", url: "https://droozandcompany.com/" },
      { group: "Skaneateles", name: "The Local Branch", address: "4 Jordan St", url: "https://thelocalbranch.co/" },
      { group: "Skaneateles", name: "Skaneateles 300", address: "2 W. Genesee St", url: "https://skaneateles300.com/" },
      { group: "Skaneateles", name: "Nest 58", address: "58 W. Genesee St", url: "https://www.nest58.com/" },
      { group: "Skaneateles", name: "Rhubarb Kitchen & Garden", address: "59 E. Genesee St" },
      { group: "Skaneateles", name: "Skaneateles Jewelry", address: "15 Jordan St", url: "https://www.cnydiamond.com/" },
      { group: "Canandaigua Lake", name: "F. Oliver's", note: "Olive oils and vinegars.", address: "129 S. Main St, Canandaigua", url: "https://folivers.com/" },
      { group: "Canandaigua Lake", name: "Renaissance The Goodie II Shoppe", address: "56 S. Main St, Canandaigua" },
    ],
  },
];

export const drivingTour = {
  intro:
    "Webster's best views are along the bay and the lake. Bring comfortable shoes, and bikes if you have them.",
  stops: [
    { title: "Start at the Bay Bridge", text: "Take the Bay Road exit north toward Lake Road and turn left. You'll pass Sandbar Park and reach the Irondequoit Bay outlet, where the swing bridge is closed to cars from April through November. Mayer's Marina, on the left, has a pier for looking out at the shoreline and the boats." },
    { title: "Head east on Lake Road", text: "Around Vosburg Road you'll find fields and trails: the Hojack Trail (3.5 miles, Lake Road to Phillips Road), Vosburg Hollow, the Gosnell trails, Big Woods and Big Field, and Whiting Road Nature Preserve." },
    { title: "Stop at Webster Park", text: "Parking, a fishing pier, paths along the water, playgrounds (two toddler-friendly ones off the second Holt Road lot), seasonal tennis and pickleball courts, and restrooms." },
    { title: "Keep going to Pultneyville", text: "About 12 minutes and 9.5 miles further east on Lake Road. B. Forman Park, on the lake side, has a playground, restrooms and charcoal grills for a picnic. Open seasonally." },
  ],
};
