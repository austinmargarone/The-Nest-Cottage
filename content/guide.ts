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
      "Webster is an outdoors enthusiast’s paradise. Gorgeous parks, trails and walking paths. Lake Ontario and Irondequoit Bay are both highlights.",
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
      "Although Webster can keep you busy exploring, don’t forget about the City of Rochester. There is so much to do and see. Everything on this list is just about a 20-minute drive from The Nest Cottage. ROC, Flour City and Flower City are all terms of endearment for our fair city.",
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
    distance: "About 24 minutes",
    intro:
      "It would be a shame to come to the area and not see the Erie Canal. I grew up in Fairport, a charming village that lies along the canal. I absolutely adore the canal and the village of Fairport. You will too. It’s just a 24-minute drive from The Nest Cottage. I also put in some options in the village of Pittsford and the hamlet of Bushnell’s Basin. Both are charming places you should see as well.",
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
      "This Upstate girl would be remiss if I didn’t encourage you to see at least one of the 11 Finger Lakes while you are here visiting. If you have the time, they are absolutely stunning and well worth the journey. My favorite Finger Lake is Skaneateles Lake. Nothing compares in my book. The three runners-up are Canandaigua Lake, Cayuga Lake and Seneca Lake.",
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
  intro: [
    "The best things about living in Webster are the proximity to the bay, the lake and all the incredible parks, fields and trails. We visit a field or park in the area daily. On the weekend we enjoy taking a drive down Lake Road to Pultneyville. I put together this driving tour so that you can see all the beauty that Webster has to offer.",
    "Tip: be sure to bring comfortable hiking boots or sneakers, and possibly your bikes, on your journey.",
  ],
  stops: [
    { title: "Start at the Bay Bridge", text: ["Drive over the Bay Bridge and exit on Bay Road heading north towards Lake Road. Take a left: you will pass Sandbar Park. Continue to the end, the Irondequoit Bay Outlet Bridge. The “Swing Bridge” is closed to cars April through November so that boats have access from Irondequoit Bay to Lake Ontario.", "Mayer’s Marina will be on your left. You can park on the right-hand side and walk along the short walkway that leads out to a pier. Stop and take in the stunning vista of the shoreline, the birds and all the boating activity."] },
    { title: "Head east on Lake Road", text: ["Continue on your journey heading east back down Lake Road. Pass Bay Road. You will come to Vosburg Road shortly, on your right. You might consider taking a detour, as there are gobs of beautiful fields and connecting trails that run across Webster.", "The Hojack Trail, Vosburg Hollow, Gosnell Trails, Gosnell Big Woods Preserve, Gosnell Big Field, Whiting Road Nature Preserve and Webster County Park are all worth a visit. If you brought your bikes, you might want to ride the 3.5-mile multi-use Hojack Trail. It runs from Lake Road to Phillips Road."] },
    { title: "Take a rest at Webster Park", text: ["After you’re done enjoying the trails, head back to Lake Road via Baker Road. As you continue down Lake Road, be sure to take a rest at Webster Park. On your left-hand side you will find an ample parking lot. Park and walk over the bridge across the creek, and you will come to the large fishing pier. If you continue up the path, you will take in stunning views through the trees.", "If you have children, there is a playground just at Holt Road (on the southeast side of Lake Road) where the kiddos can get out and run and play. If they are very young, go a short hop down Holt Road to the second parking lot on your right. Park there and cross over the creek, and you will find two playgrounds that are age-appropriate for toddlers. If you like tennis or pickleball, take the very next road; it will wind up to the courts. There are bathrooms there as well. Open seasonally."] },
    { title: "Lunch at County Line Road", text: ["Now that everyone is back in the car, head back to Lake Road and continue east. You will reach the end of town at County Line Road. Are you hungry? We used to send everyone to Rustic Taco, just over the county line. Sadly, that location has closed, but the restaurant has moved to the village of Fairport, and it’s still worth the trip."] },
    { title: "Bonus: Pultneyville", text: ["If you decide to continue to Pultneyville, you will have a 12-minute, 9.5-mile drive down Lake Road. There is a lovely park, B. Forman Park, just past Pultneyville on the lake side. There are restrooms and a playground. Open seasonally.", "Grab the blanket we provide and sit out and enjoy the stunning view. There are charcoal grills available, and if you choose to pack a picnic, feel free to use the cooler from the mud room."] },
  ],
};
