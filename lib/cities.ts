export type CityData = {
  city: string;
  slug: string;
  country: string;
  kicker: string;
  motto: string;
  flag: string[];
  intro: string;
  stats: [string, string][];
  hero: { img: string; caption: string };
  galleryStrip: string[];
  neighborhoods: { n: string; name: string; sub: string; body: string; img: string; accent: string }[];
  eat: [string, string, string][];
  do: [string, string, string][];
  stays: { name: string; area: string; note: string; img: string }[];
  fortyEight: { day: string; t: string; title: string; note: string }[];
  getAround: [string, string][];
  practical: [string, string][];
  honest: [string, string][];
};

export type NeighboringGuide = {
  city: string;
  slug: string;
  kicker: string;
  flag: string[];
  img: string;
  note: string;
};

// ─── NAIROBI ──────────────────────────────────────────────────────────────────

export const NAIROBI: CityData = {
  city: "Nairobi",
  slug: "nairobi",
  country: "Kenya",
  kicker: "The capital",
  motto: "Soft landing. Hard pivot to wild.",
  flag: ["#1B5E3F", "#FDFBF6", "#C8302C"],
  intro:
    "Most of Kenya begins here, in a city that doesn't try to please you and is all the better for it. The light is sharp, the coffee is excellent, the traffic is operatic, and the design districts now keep their own hours. You can land at JKIA, eat at Inti by lunchtime, walk Karura's red dirt by four, and drink Tusker on a rooftop by seven. Then — and only then — does the wild make sense.",
  stats: [
    ["Population", "≈ 5.0M"],
    ["Altitude", "1,795m"],
    ["Climate", "Mild · 14–26°C"],
    ["Best time", "Jan–Mar · Jul–Sep"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES · USD widely"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1400&q=80&auto=format&fit=crop",
    caption: "Westlands looking north · golden hour",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    "https://images.pexels.com/photos/35648217/pexels-photo-35648217.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Karen",
      sub: "Forested · slow · founder bungalows",
      body: "Old Nairobi, named for Blixen. Indigenous gardens, leafy lanes, the original Talisman lunch, and the kind of weekend houses you can actually walk between.",
      img: "https://images.pexels.com/photos/35648217/pexels-photo-35648217.jpeg?auto=compress&cs=tinysrgb&w=900",
      accent: "green",
    },
    {
      n: "02",
      name: "Westlands",
      sub: "Verticals · cocktail bars · tech hubs",
      body: "The city's restless centre — towers under construction, rooftops over construction, every African capital represented at the bar at Hero. Loud, then suddenly not.",
      img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
    {
      n: "03",
      name: "Kilimani · Lavington",
      sub: "Design cafés · independent everything",
      body: "Roasteries in converted homes, the tailor's, the framer's, the bookshop that still does cash. The good Nairobi morning happens here.",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
    {
      n: "04",
      name: "Gigiri",
      sub: "UN belt · diplomatic · quiet streets",
      body: "Roads in straight lines, embassies behind hedges, Village Market on a Saturday. The closest thing Nairobi has to a suburb.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
  ],
  eat: [
    ["Inti", "Latin-Nairobi cooking, Westlands", "Tasting"],
    ["Cultiva", "Farm-to-table, Karen — book ahead", "Long lunch"],
    ["About Thyme", "Tree-house garden in Kileleshwa", "Dinner"],
    ["Talisman", "The old Karen lunch — still right", "Lunch"],
    ["Mama Oliech", "Tilapia, no fuss, Kilimani", "Lunch"],
    ["Hero", "Rooftop cocktails, Westlands", "Drinks"],
  ],
  do: [
    ["Karura Forest", "Indigenous canopy, red dirt running paths", "1.5h"],
    ["Nairobi National Park", "Lions with the skyline behind", "Half-day"],
    ["David Sheldrick", "The 11am elephant feed", "1h"],
    ["Giraffe Centre", "Yes, the kiss photo. Worth it.", "1h"],
    ["Karen Blixen Museum", "Out of Africa, in person", "1h"],
    ["Maasai Market", "Saturdays at Village Market", "2h"],
  ],
  stays: [
    {
      name: "Hemingways Nairobi",
      area: "Karen · classic",
      note: "Old-school silver service. Bath rituals. Fireplace lobby.",
      img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Giraffe Manor",
      area: "Langata · iconic",
      note: "Breakfast with the necks. Book 9 months ahead.",
      img: "https://images.pexels.com/photos/35648217/pexels-photo-35648217.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "House of Waine",
      area: "Karen · boutique",
      note: "11 rooms, eclectic, real garden. Our quiet pick.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "08:30", title: "Coffee at Connect", note: "Lavington · the morning ritual" },
    { day: "Day 01", t: "10:00", title: "Karura red-dirt walk", note: "Two hours under indigenous canopy" },
    { day: "Day 01", t: "13:00", title: "Long lunch at Cultiva", note: "Karen · 4 courses, no rush" },
    { day: "Day 01", t: "16:00", title: "Sheldrick · last feed", note: "Slip in with the locals at 16:00" },
    { day: "Day 01", t: "19:30", title: "Drinks at Hero", note: "Westlands rooftop · golden hour" },
    { day: "Day 02", t: "07:30", title: "Nairobi National Park", note: "Lions on the city plain · half-day drive" },
    { day: "Day 02", t: "13:30", title: "Mama Oliech", note: "Tilapia, ugali, no menu" },
    { day: "Day 02", t: "16:00", title: "Maasai Market", note: "Saturdays at Village Market" },
    { day: "Day 02", t: "19:30", title: "Dinner · About Thyme", note: "Garden tables · long evening" },
  ],
  getAround: [
    ["Uber / Bolt", "The default. ~$3–8 across town."],
    ["Boda boda", "Motorcycle taxi — fast in traffic, helmet is yours to insist on."],
    ["Matatu", "Public minibus. Cultural icon. Not for first 48 hours."],
    ["Walk", "Inside Karen and Kilimani, yes. Crossing main roads, never."],
  ],
  practical: [
    ["From airport", "JKIA · 30–90 min by car"],
    ["Plug type", "Type G · UK"],
    ["Currency", "KES — USD accepted in tourism"],
    ["Language", "English · Swahili"],
    ["Cash etiquette", "Tip 10% · round up"],
    ["Sim card", "Safaricom kiosk at JKIA · 5min"],
  ],
  honest: [
    ["The traffic is real", "Plan two big things a day, not five. Move with the day, not against it."],
    ["The altitude is real too", "Drink twice the water. Skip the second beer the first night."],
    ["Sundays are sleepy", "Most galleries shut, half the cafés close — lean into a Karura morning and a long lunch."],
    ["After dark, drive — don't walk", "Even short distances. It's how the city works, not a scare-quote."],
  ],
};

// ─── MOMBASA ──────────────────────────────────────────────────────────────────

export const MOMBASA: CityData = {
  city: "Mombasa",
  slug: "mombasa",
  country: "Kenya",
  kicker: "The old port",
  motto: "Spice in the air. Salt in the stone.",
  flag: ["#C8302C", "#FDFBF6", "#0F0F0E"],
  intro:
    "Mombasa doesn't introduce itself — it envelops you. The air is thick with cardamom and ocean. Fort Jesus sits at the harbour mouth exactly as the Portuguese left it. Old Town's coral-rag lanes have been walked by Arab traders, Swahili merchants, and British colonials, each leaving something behind. The food is the best argument for slowing down: biryani rice that arrives in its own pot, grilled fish so fresh it still tastes of the reef. You come for the coast. You stay because it reconfigures something.",
  stats: [
    ["Population", "≈ 1.2M"],
    ["Altitude", "Sea level"],
    ["Climate", "Tropical · 24–33°C"],
    ["Best time", "Jan–Mar · Jul–Oct"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES · USD near coast"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop",
    caption: "Mombasa Old Harbour · dhow at anchor",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Old Town",
      sub: "Swahili stone · carved doors · Fort Jesus",
      body: "The oldest part of the island, where coral-rag walls have absorbed four centuries of history. Walk the lanes at dusk when the light turns the stone to copper and the calls to prayer overlap.",
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
    {
      n: "02",
      name: "Nyali",
      sub: "North Coast · malls · beach hotels",
      body: "Where the city crosses the Nyali Bridge and exhales. Newer builds, quiet streets after 9pm, and the fastest access to North Coast beach strips. Less charm, more function.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
    {
      n: "03",
      name: "Likoni",
      sub: "Ferry crossing · local market · South Coast gateway",
      body: "The short ferry crossing to Likoni is Mombasa's best free show — motorcycles, goats, commuters, and the Indian Ocean. South of here the coast turns quieter, more local, less tourist.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "04",
      name: "Tudor · Mkomani",
      sub: "Residential · local restaurants · real price",
      body: "Where Mombasa people actually eat. Mandazi with coconut chai at 7am, pilau from a pot that's been simmering since dawn. Come here if you want the city without the performance.",
      img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
  ],
  eat: [
    ["Tamarind Restaurant", "Dhow dining on the Old Harbour — the squid", "Dinner"],
    ["Jahazi Coffee House", "Rooftop in Old Town, cardamom chai", "Morning"],
    ["Singh's Market", "Biryani cooked properly, no shortcuts", "Lunch"],
    ["Zamani Coffeehouse", "Swahili snacks, coral-wall courtyard", "Breakfast"],
    ["Moorings", "Floating restaurant, grilled crayfish", "Lunch"],
    ["Shehnai", "Indian-coast cooking, Tudor Road", "Dinner"],
  ],
  do: [
    ["Fort Jesus", "Portuguese fort, UNESCO — go at golden hour", "2h"],
    ["Old Town walk", "Carved doors, spice stalls, coral lanes", "2h"],
    ["Haller Park", "Hippos, giraffes, the famous tortoise Owen", "2h"],
    ["Mombasa Marine Park", "Snorkelling reef just off Nyali beach", "Half-day"],
    ["Likoni Ferry", "Best people-watching in East Africa, free", "30min"],
    ["Bombolulu Workshops", "Disability arts collective, worth the stop", "1h"],
  ],
  stays: [
    {
      name: "Voyager Beach Resort",
      area: "Nyali · north coast",
      note: "Reliable, seafront, good pool. The solid base.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Tamarind Village",
      area: "Nyali · boutique",
      note: "Quiet, well-run, walking distance to the dhow restaurant.",
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "The Moorings",
      area: "Mtwapa creek · different",
      note: "A floating hotel — genuinely unusual. Sundowners on the water.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "07:30", title: "Chai at Jahazi", note: "Old Town rooftop · cardamom, warm bread" },
    { day: "Day 01", t: "09:00", title: "Fort Jesus", note: "Best before the heat — arrive at opening" },
    { day: "Day 01", t: "11:00", title: "Old Town walk", note: "Follow the carved doors south toward the harbour" },
    { day: "Day 01", t: "13:30", title: "Lunch at Singh's", note: "Biryani, naan, no menu, no fuss" },
    { day: "Day 01", t: "19:30", title: "Tamarind dhow dinner", note: "Old Harbour sunset, grilled fish, dark water" },
    { day: "Day 02", t: "08:00", title: "Haller Park", note: "Owen the tortoise, giraffes, morning cool" },
    { day: "Day 02", t: "11:30", title: "Mombasa Marine Park snorkel", note: "Glass-bottom boat or fins — your call" },
    { day: "Day 02", t: "14:00", title: "Likoni ferry crossing", note: "Free, brief, the whole city on one boat" },
    { day: "Day 02", t: "19:00", title: "Sundowners at The Moorings", note: "Creek water, nothing to do, nowhere to be" },
  ],
  getAround: [
    ["Tuk-tuk", "The Old Town standard. Negotiate before you board, ~200–400 KES."],
    ["Bolt / Uber", "Available — more reliable than hailing on the street."],
    ["Likoni Ferry", "Free foot crossing, runs every 15 min. Essential."],
    ["Boda boda", "Fast through traffic. Insist on a helmet. Useful for North Coast."],
  ],
  practical: [
    ["From Nairobi", "1h flight SGR train 4.5h · Moi Int'l Airport"],
    ["Plug type", "Type G · UK"],
    ["Currency", "KES — USD accepted near coast resorts"],
    ["Language", "Swahili · English"],
    ["Best season", "Jan–Mar dry and clear, Jul–Sep cool and calm"],
    ["Health", "Malaria zone — prophylaxis recommended"],
  ],
  honest: [
    ["The heat is not negotiable", "By 11am you want shade. Plan your sightseeing for early morning or after 4pm."],
    ["Old Town after dark is fine — with company", "The lanes are quiet and mostly safe, but go with a local guide the first time."],
    ["The coast is not just Diani", "Most visitors rush to Diani and miss Mombasa itself. Give the city two days first."],
    ["Bargain, but not aggressively", "Prices are often inflated for tourists. A calm counter-offer is respected; haggling theatrics are not."],
  ],
};

// ─── LAMU ─────────────────────────────────────────────────────────────────────

export const LAMU: CityData = {
  city: "Lamu",
  slug: "lamu",
  country: "Kenya",
  kicker: "The island",
  motto: "No cars. No rush. That's the whole point.",
  flag: ["#0F0F0E", "#C8302C", "#1B5E3F"],
  intro:
    "Lamu is the oldest living town in East Africa. There are no motor vehicles on the island. The streets are wide enough for two donkeys side by side, and the buildings that line them have been standing since the 14th century. Time here doesn't slow down — it reorganises itself around the tides, the dhow schedules, and the call to prayer. You will have your itinerary rearranged by the island without anyone asking. This is not a problem. It's the service.",
  stats: [
    ["Population", "≈ 35,000"],
    ["Altitude", "Sea level"],
    ["Climate", "Tropical · 26–34°C"],
    ["Best time", "Jun–Oct · Jan–Mar"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES · limited card use"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1400&q=80&auto=format&fit=crop",
    caption: "Lamu waterfront · dhow at anchor · early morning",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Lamu Town",
      sub: "UNESCO · carved doors · the museum",
      body: "The island's main settlement. A UNESCO World Heritage Site that functions as a living neighbourhood, not a museum. Narrow lanes, donkey dung, and the occasional cat that owns the intersection.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
    {
      n: "02",
      name: "Shela",
      sub: "White sand · Peponi Hotel · quieter",
      body: "Fifteen minutes walk south along the waterfront, Shela is where the dhows are and where Peponi sits. The beach here is long, white, and mostly empty outside July.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
    {
      n: "03",
      name: "Matondoni",
      sub: "Boatbuilders · the old craft",
      body: "The west side of the island, where dhows have been made by hand for generations. No restaurants, no wifi. Come early, bring water, watch someone work in silence.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "04",
      name: "Kipungani",
      sub: "Far south · mangroves · solitude",
      body: "The quietest corner of Lamu, reachable only by boat. One lodge, no neighbours. The kind of place where the plan is: arrive, breathe, stay.",
      img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
  ],
  eat: [
    ["Peponi Hotel", "Seafood on the water, Shela — the pilau", "Dinner"],
    ["Whispers", "Rooftop in Lamu Town, fresh coconut fish", "Lunch"],
    ["Bush Gardens", "Waterfront, cold Tusker, grilled crab", "Dinner"],
    ["Lamu House", "Courtyard breakfast, slow mornings", "Breakfast"],
    ["Seashore Lodge", "Lamu pilau, the real version", "Lunch"],
    ["Stop Over", "No-menu, no-frills, very right", "Lunch"],
  ],
  do: [
    ["Dhow sailing", "Half-day at sea, fishing or sundown — essential", "Half-day"],
    ["Lamu Museum", "Fort, Swahili culture, excellent signage", "2h"],
    ["Shela Beach walk", "30 min south along the waterfront, long and empty", "1h"],
    ["Matondoni village", "Watch dhow-builders work, no commentary needed", "Half-day"],
    ["Donkey Sanctuary", "The island's other transport service, well-run", "1h"],
    ["Sunset from the Swahili House", "Rooftop at Lamu Town, the daily ritual", "1h"],
  ],
  stays: [
    {
      name: "Peponi Hotel",
      area: "Shela · the classic",
      note: "The one you've heard about. Seafront. Worth every shilling.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "The Majlis",
      area: "Manda Island · exclusive",
      note: "Across the water, boat transfer, total quiet. Our honeymoon pick.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Lamu House",
      area: "Lamu Town · boutique",
      note: "14 rooms in a coral-rag townhouse. Courtyard breakfast, books on the roof.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "07:00", title: "Waterfront at dawn", note: "Before the donkeys, before the heat" },
    { day: "Day 01", t: "09:00", title: "Lamu Museum", note: "Fort and Swahili rooms — 2 hours well spent" },
    { day: "Day 01", t: "11:30", title: "Walk to Shela", note: "30 min south, white sand, almost no one" },
    { day: "Day 01", t: "13:00", title: "Lunch at Peponi", note: "Seafood, sea breeze, no decision needed" },
    { day: "Day 01", t: "17:00", title: "Sunset dhow", note: "1.5h on the channel as the light drops" },
    { day: "Day 02", t: "06:30", title: "Dhow to Matondoni", note: "Early. The boatbuilders start at first light." },
    { day: "Day 02", t: "11:00", title: "Donkey Sanctuary", note: "Brief, gentle, worth it" },
    { day: "Day 02", t: "13:00", title: "Bush Gardens", note: "Grilled crab on the waterfront" },
    { day: "Day 02", t: "17:00", title: "Rooftop · Swahili House", note: "The island's best sunset angle" },
  ],
  getAround: [
    ["On foot", "Lamu Town is walkable in 20 minutes. Most streets are too narrow for anything else."],
    ["Donkey", "Still the working transport of the island. Treat them well — they outrank tourists here."],
    ["Motorboat taxi", "For Shela, Manda Island, and Matondoni — negotiate at the waterfront."],
    ["Dhow", "The old way. Book through your hotel the night before."],
  ],
  practical: [
    ["From Nairobi", "1h flight to Lamu (Manda Island airport), daily"],
    ["From Mombasa", "1h flight or 6–8h road to Malindi then boat"],
    ["Cash", "Bring KES — card machines are unreliable"],
    ["Dress code", "Conservative in Lamu Town. Cover shoulders and knees."],
    ["Best months", "Jun–Sep (dry, windy, perfect sailing)"],
    ["Health", "Malaria zone — prophylaxis recommended"],
  ],
  honest: [
    ["It will rearrange your schedule", "Dhows run on wind and tide. Your plans will adapt. This is correct."],
    ["Bring cash. Lots of it.", "ATMs exist but fail. USD works; KES is better. Arrive prepared."],
    ["The heat is serious after 11am", "Siesta is not laziness — it's biology. Move accordingly."],
    ["Respect the conservative culture", "Lamu is a predominantly Muslim town. Dress accordingly in town; swimwear is for the beach only."],
  ],
};

// ─── KISUMU ───────────────────────────────────────────────────────────────────

export const KISUMU: CityData = {
  city: "Kisumu",
  slug: "kisumu",
  country: "Kenya",
  kicker: "Lake Victoria",
  motto: "The slow coast. The honest second city.",
  flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"],
  intro:
    "Kisumu sits at the edge of the largest lake in Africa, and it has the unhurried disposition to match. This is western Kenya — Luo country, omena fish drying on the shore, ngege (tilapia) on every menu, sunsets that go on longer than seems physically possible. It's not a city that performs for visitors. The fish market opens at 4am whether you're watching or not. The hippos at Dunga Beach come out when they feel like it. The Impala Sanctuary will ask you nothing. You will love it or it will bore you — both responses are valid and it doesn't care either way.",
  stats: [
    ["Population", "≈ 600,000"],
    ["Altitude", "1,131m"],
    ["Climate", "Tropical · 17–30°C"],
    ["Best time", "Dec–Mar · Jul–Sep"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&q=80&auto=format&fit=crop",
    caption: "Lake Victoria at Dunga Beach · dusk",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Milimani",
      sub: "Hillside · hotels · restaurants",
      body: "The residential and commercial hilltop above the lake. Most of the better guesthouses and NGO offices sit here, with the kind of views that make you linger over breakfast.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "02",
      name: "Dunga Beach",
      sub: "Hippos · fishermen · lake sunsets",
      body: "South of town, where the fishing canoes come in and the hippos come out. The best sundowner in Kisumu involves a plastic chair, cold beer, and watching the lake turn orange.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
    {
      n: "03",
      name: "Kondele",
      sub: "Market · transport hub · local pace",
      body: "The city's busiest matatu stage and market district. Come for the fish stalls, the omena sellers, the price of things as they actually are. Not a tourist quarter — that's the point.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
    {
      n: "04",
      name: "Mamboleo",
      sub: "Industrial edge · real Kisumu",
      body: "The working western quarter, home to the central market and the Kisumu International Airport road. Less polished, more honest, and the place to find the city as it actually runs.",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
  ],
  eat: [
    ["Kiboko Bay", "Tilapia on the lake, wooden deck, slow service (plan for it)", "Dinner"],
    ["Aga Khan Club", "Colonial dining room, well-kept, easy lunch", "Lunch"],
    ["Tilapia Hotel", "The original. Simple, correct, busy", "Lunch"],
    ["Dunga Beach stalls", "Grilled ngege at sunset, no menu, very good", "Sundowner"],
    ["Java House", "Reliable, air-conditioned, fast wifi", "Breakfast"],
    ["Bon Appetit", "Local favourite, Milimani Road", "Dinner"],
  ],
  do: [
    ["Impala Sanctuary", "Small, uncrowded, impalas and hippos in one loop", "2h"],
    ["Dunga Beach", "Hippo watching, fishermen, sunset beers", "2h"],
    ["Kisumu Museum", "Regional history, well-curated, underrated", "1.5h"],
    ["Kit Mikayi", "Sacred rock formation — 1h from town, worth it", "Half-day"],
    ["Ruma National Park", "Roan antelope — rare — 2h south", "Full day"],
    ["Lake Victoria boat ride", "Out toward the islands, any morning", "2h"],
  ],
  stays: [
    {
      name: "Kiboko Bay Resort",
      area: "Dunga Beach · lakefront",
      note: "On the water, hippos at dusk, simple rooms that work.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Imperial Hotel",
      area: "Milimani · classic",
      note: "The heritage choice. Colonial bones, updated comfort.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Sovereign Hotel",
      area: "Town centre · modern",
      note: "Reliable business hotel — clean, central, good breakfast.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "07:00", title: "Dunga fish market", note: "The boats come in before sunrise — go early" },
    { day: "Day 01", t: "09:30", title: "Impala Sanctuary", note: "Small loop, impalas at close range, hippos in the water" },
    { day: "Day 01", t: "13:00", title: "Tilapia Hotel lunch", note: "Ngege, ugali, no decisions required" },
    { day: "Day 01", t: "16:00", title: "Kisumu Museum", note: "Regional history, unexpectedly good" },
    { day: "Day 01", t: "18:30", title: "Sunset at Dunga Beach", note: "Plastic chair, cold Tusker, hippos at dusk" },
    { day: "Day 02", t: "07:00", title: "Lake Victoria boat", note: "Head out toward the islands, the morning is flat" },
    { day: "Day 02", t: "11:00", title: "Drive to Kit Mikayi", note: "Sacred rock, good light, 1h from town" },
    { day: "Day 02", t: "14:00", title: "Long lunch at Kiboko Bay", note: "On the water, no hurry" },
    { day: "Day 02", t: "17:00", title: "Kondele market", note: "Walk through before things close" },
  ],
  getAround: [
    ["Boda boda", "The dominant local transport. Negotiate first, ~100–300 KES around town."],
    ["Tuk-tuk", "Available near the market and museum areas, good for 2–3 stops."],
    ["Bolt / Uber", "Patchy coverage — use boda boda when apps don't respond."],
    ["Walk", "Milimani to museum is walkable. Town centre is flat and manageable."],
  ],
  practical: [
    ["From Nairobi", "1h flight or 6h road via Nakuru"],
    ["Airport", "Kisumu International · 5km from town"],
    ["Plug type", "Type G · UK"],
    ["Currency", "KES — card machines exist but bring cash"],
    ["Best time", "Dec–March (dry season, clear lake)"],
    ["Health", "Malaria zone — prophylaxis recommended"],
  ],
  honest: [
    ["The pace is real — and non-negotiable", "Things take longer here. Service is slow. The lake is patient. You will need to become patient."],
    ["It's not a tourist city", "Which is exactly why you should go. Expect local restaurants, local prices, local rhythms."],
    ["Hippos at Dunga are unpredictable", "Do not walk on the beach after dark. They come onshore. Not negotiable."],
    ["The road from Nairobi is beautiful but long", "If you're driving, leave early, stop in Nakuru, arrive rested."],
  ],
};

// ─── NAKURU ───────────────────────────────────────────────────────────────────

export const NAKURU: CityData = {
  city: "Nakuru",
  slug: "nakuru",
  country: "Kenya",
  kicker: "Rift Valley",
  motto: "Flamingos at dawn. Rhinos by noon.",
  flag: ["#C8302C", "#E2D2AE", "#1B5E3F"],
  intro:
    "Nakuru has two lives. The first is a functional Rift Valley town — market, matatu stage, hardware shops, decent chai. The second begins at the gates of Lake Nakuru National Park, where flamingos paint the soda lake pink and white rhinos graze with mild disinterest. Hell's Gate is an hour south: a gorge you cycle through past geysers and volcanic walls, the kind of landscape that looks designed by someone with theatrical ambitions. Nakuru is the easiest base for the northern Rift, and it doesn't overcomplicate itself.",
  stats: [
    ["Population", "≈ 570,000"],
    ["Altitude", "1,754m"],
    ["Climate", "Mild · 12–27°C"],
    ["Best time", "Jan–Mar · Jul–Oct"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1400&q=80&auto=format&fit=crop",
    caption: "Lake Nakuru · flamingo colony · first light",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Milimani",
      sub: "Residential · best guesthouses",
      body: "The quieter residential hill above the main town. Good guesthouses, easy access to the park gate, and the kind of morning view over the Rift that recalibrates your expectations of breakfast.",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "02",
      name: "Nakuru Town Centre",
      sub: "Market · matatus · local life",
      body: "The working heart. Gikomba Market, the main stage, hardware shops four deep. Come here for the real price of things and the chai that arrives in a flask.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
    {
      n: "03",
      name: "Lanet",
      sub: "East of town · army · quiet roads",
      body: "Leafy, residential, home to Egerton University campus. A different pace from the market town. Good if you're based here for multiple days.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
    {
      n: "04",
      name: "Elementaita",
      sub: "Soda lake · 45min south · flamingos",
      body: "A smaller, quieter soda lake between Nakuru and Naivasha, with its own flamingo colony and a handful of exceptional lodges. The best-kept secret on the Rift floor.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
  ],
  eat: [
    ["Gilani's", "Long-running Indian restaurant, dependable, central", "Dinner"],
    ["Tipsy's", "Rooftop bar and grill, cold Tusker, town views", "Sundowner"],
    ["Nakuru Sweet Mart", "Samosas, mandazi, the 6am crowd", "Breakfast"],
    ["Jumuia Guesthouse", "Reliable lunch buffet, calm courtyard", "Lunch"],
    ["Bibo Restaurant", "Local favourite, nyama choma, Milimani", "Dinner"],
    ["Sarova Lion Hill", "Lodge restaurant, lakeside setting, worth the trip", "Lunch"],
  ],
  do: [
    ["Lake Nakuru National Park", "Flamingos, rhinos, lions — a compact park that delivers", "Full day"],
    ["Hell's Gate Cycling", "Rent a bike at the gate, cycle the gorge", "Full day"],
    ["Menengai Crater", "Extinct caldera, 10km from town, great views", "Half-day"],
    ["Lake Elementaita", "Quieter soda lake, pelicans and flamingos", "Half-day"],
    ["Hyrax Hill", "Neolithic site, well-preserved, 5min from town", "1.5h"],
    ["Nakuru Museum", "Natural history, Rift Valley context", "1h"],
  ],
  stays: [
    {
      name: "Sarova Lion Hill Lodge",
      area: "Inside Lake Nakuru NP",
      note: "The only lodge inside the park. Wake to flamingos. Book early.",
      img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Sentrim Elementaita",
      area: "Lake Elementaita · 45min",
      note: "Quiet, lakeside, flamingos outside the window. Our pick for a slower stay.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Chester House",
      area: "Milimani · town",
      note: "Reliable mid-range, garden setting, 5min to park gate.",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "06:30", title: "Lake Nakuru NP — dawn drive", note: "Flamingos move at first light — go before 7" },
    { day: "Day 01", t: "10:00", title: "White rhino tracking", note: "South end of the lake, ranger-guided" },
    { day: "Day 01", t: "13:00", title: "Lunch at Sarova Lion Hill", note: "Inside the park — the lakeside terrace" },
    { day: "Day 01", t: "15:30", title: "Afternoon game drive", note: "Lions near Baboon Cliff in the late afternoon" },
    { day: "Day 01", t: "18:00", title: "Sundowner at Tipsy's", note: "Town rooftop, Rift Valley views" },
    { day: "Day 02", t: "07:00", title: "Hell's Gate by bicycle", note: "Rent at the gate, cycle to the gorge and back" },
    { day: "Day 02", t: "12:00", title: "Gorge walk", note: "Into the geothermal gorge — hot springs, red walls" },
    { day: "Day 02", t: "15:00", title: "Lake Elementaita", note: "Drive south, pelicans, flamingos, no crowds" },
    { day: "Day 02", t: "18:00", title: "Bibo nyama choma", note: "Long dinner, end of the Rift day" },
  ],
  getAround: [
    ["Uber / Bolt", "Available in town — more reliable than Kisumu."],
    ["Boda boda", "For short trips around Milimani and town centre."],
    ["Self-drive", "Best for park and Hell's Gate — a 4x4 is not required but improves the experience."],
    ["Organised safari vehicle", "We arrange these — ask us if you're without a car."],
  ],
  practical: [
    ["From Nairobi", "2.5h by road (A104) or 1h flight"],
    ["Park fees", "Lake Nakuru NP: $60 non-resident adult"],
    ["Hell's Gate", "$26 entry + $5 bike hire at gate"],
    ["Currency", "KES — park fees often USD"],
    ["Best time", "Jan–Mar for clear skies; Jul–Oct for wildlife"],
    ["Health", "No malaria risk at this altitude"],
  ],
  honest: [
    ["The flamingos are not guaranteed", "Their numbers fluctuate with the lake's alkalinity. But even on a low day, the rhinos and lions deliver."],
    ["Hell's Gate is better than it sounds", "A park you cycle and walk — no vehicle required. One of Kenya's most underrated experiences."],
    ["Nakuru town is fine, not charming", "Use it as a base. The value is the parks, not the streets."],
    ["Lake Elementaita is worth the detour", "Forty minutes south, fraction of the visitors, equal flamingo density. Don't skip it."],
  ],
};

// ─── NAIVASHA ─────────────────────────────────────────────────────────────────

export const NAIVASHA: CityData = {
  city: "Naivasha",
  slug: "naivasha",
  country: "Kenya",
  kicker: "The lake",
  motto: "Hippos before breakfast. Cycling before lunch.",
  flag: ["#1B5E3F", "#FDFBF6", "#C8302C"],
  intro:
    "Naivasha is where Nairobi comes to exhale. Two hours from the capital on a good day, the lake sits in the Rift Valley floor surrounded by yellow-fever acacias and flower farms. Hell's Gate National Park begins 10 kilometres south: the only park in Kenya where you cycle and walk among the wildlife — no vehicle required, no game drive language, just a hired bicycle and a gorge that opens like a wound in the earth. Come for a long weekend, stay because the hippos come onshore at night and you can hear them from the veranda.",
  stats: [
    ["Population", "≈ 250,000"],
    ["Altitude", "1,884m"],
    ["Climate", "Mild · 10–25°C"],
    ["Best time", "Jan–Mar · Jun–Sep"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1400&q=80&auto=format&fit=crop",
    caption: "Lake Naivasha at dawn · papyrus shore",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "South Lake Road",
      sub: "Lodges · flower farms · hippos",
      body: "The main strip of lakeside lodges and camps. Most visitors stay here, and for good reason — the papyrus shore, the bird life, and the hippos that wander onto the lawns at night.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "02",
      name: "Naivasha Town",
      sub: "Market · transport · chai",
      body: "The commercial centre, 4km from the lake. Loud, functional, good for supplies and the best roadside mandazi. Not the reason you came, but worth an hour.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
    {
      n: "03",
      name: "Crater Lake Sanctuary",
      sub: "Volcanic lake · silent · walking",
      body: "A small volcanic crater lake 20min west of Naivasha, ringed by forest. Walking safari among giraffe and zebra. No vehicles, no noise. The antidote to busy parks.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
    {
      n: "04",
      name: "Kongoni",
      sub: "North shore · quieter · hippo camps",
      body: "The less-visited north shore of the lake, where smaller camps sit in more privacy and the birdlife is exceptional. Pelicans in the morning, fish eagles all day.",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
  ],
  eat: [
    ["Crayfish Camp", "Lake deck, hippos occasionally walk past", "Dinner"],
    ["Elsamere", "Joy Adamson's house, tearoom, lake garden", "Lunch"],
    ["Fisherman's Camp", "Backpacker energy, wood-fired pizza, cold beer", "Dinner"],
    ["La Belle Inn", "Town centre, reliable local food, fast", "Lunch"],
    ["Enashipai Lodge", "Upmarket Sunday lunch buffet — worth it", "Lunch"],
    ["Sanctuary Farm", "Flower farm café, local honey, quiet terrace", "Breakfast"],
  ],
  do: [
    ["Hell's Gate cycling", "Hire a bike at the gate, cycle the gorge — essential", "Full day"],
    ["Crescent Island walk", "Walk among hippos and giraffe on a floating island", "2h"],
    ["Boat ride on the lake", "Fish eagles, hippos, pelicans — 1 hour on the water", "1h"],
    ["Crater Lake walk", "Volcanic crater, forest, walking safari", "Half-day"],
    ["Elsamere Museum", "Joy Adamson's home, Born Free, well-preserved", "1.5h"],
    ["Flower farm visit", "Kenya grows 38% of Europe's cut flowers — see where", "2h"],
  ],
  stays: [
    {
      name: "Enashipai Resort",
      area: "South Lake Road · premium",
      note: "Beautiful rooms, lake access, excellent service. Our top pick.",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Crater Lake Camp",
      area: "Crater Lake Sanctuary",
      note: "Tented camp inside the sanctuary. Walking safari from your tent.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Crayfish Camp",
      area: "South Lake Road · classic",
      note: "Long-running, laid-back, on the water. The original Naivasha camp.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "07:00", title: "Boat ride on the lake", note: "Fish eagles, hippos, pelicans at dawn" },
    { day: "Day 01", t: "09:30", title: "Crescent Island walk", note: "Walking among giraffe and wildebeest, no vehicle" },
    { day: "Day 01", t: "13:00", title: "Lunch at Elsamere", note: "Joy Adamson's garden, tearoom on the lake" },
    { day: "Day 01", t: "16:00", title: "Crater Lake afternoon walk", note: "20min drive, volcanic ring, forest silence" },
    { day: "Day 01", t: "19:00", title: "Hippos on the lawn", note: "Stay at Crayfish or Enashipai — they come at dusk" },
    { day: "Day 02", t: "07:30", title: "Hell's Gate by bicycle", note: "10km from town. Cycle from the gate into the gorge." },
    { day: "Day 02", t: "12:00", title: "Gorge walk", note: "Into the volcanic gorge — geothermal steam, red walls" },
    { day: "Day 02", t: "15:00", title: "Flower farm visit", note: "Call ahead — most allow afternoon tours" },
    { day: "Day 02", t: "18:30", title: "Sundowner at Crayfish", note: "Lake deck, Tusker, Rift Valley dark" },
  ],
  getAround: [
    ["Self-drive", "The easiest way — the A104 from Nairobi is well-signed and well-paved."],
    ["Matatu from Nairobi", "2h from Nyamakima stage, KES 400 — fine if you're not pressed."],
    ["Boda boda", "For South Lake Road hops between camps."],
    ["Bicycle", "Hell's Gate provides hire at the gate. For everything else, they're not ideal."],
  ],
  practical: [
    ["From Nairobi", "2h by road via A104 (Mai Mahiu)"],
    ["Hell's Gate fees", "$26 entry + $5 bike hire"],
    ["Currency", "KES — bring cash for camps and smaller operators"],
    ["Best time", "Jun–Sep (cool and dry)"],
    ["Wildlife note", "Hippos are dangerous on land — do not walk between them and the water at night"],
    ["Health", "No malaria risk at this altitude"],
  ],
  honest: [
    ["Naivasha is a weekend city", "Two nights is perfect. Three is luxurious. One is not enough to do Hell's Gate and the lake both."],
    ["Hell's Gate on a weekday", "Weekends bring Nairobi families with speakers and picnics. It's still great. Weekdays are better."],
    ["The hippo rule", "They are territorial and very fast. Do not walk between them and water after dark. This is not decoration."],
    ["Flower farms require advance notice", "Most require a call 24h ahead. We arrange this if it's on your itinerary."],
  ],
};

// ─── ELDORET ──────────────────────────────────────────────────────────────────

export const ELDORET: CityData = {
  city: "Eldoret",
  slug: "eldoret",
  country: "Kenya",
  kicker: "Highland city",
  motto: "The altitude makes champions. So does the quiet.",
  flag: ["#1B5E3F", "#FDFBF6", "#0F0F0E"],
  intro:
    "Eldoret is where Kenya's running story begins. Sitting at 2,100 metres on the edge of the Uasin Gishu plateau, this highland city produces more world-record holders per square kilometre than any place on earth. The thin air and red dirt roads of the surrounding Nandi Hills have shaped Eliud Kipchoge, David Rudisha, and hundreds more. Visitors come expecting a trophy — a signed vest, a glimpse of someone famous training at dawn. What they find, more often, is something quieter: the sight of fifty schoolchildren running barefoot on a highland road and understanding, in their bones, what the altitude is doing to them.",
  stats: [
    ["Population", "≈ 475,000"],
    ["Altitude", "2,100m"],
    ["Climate", "Cool · 10–22°C"],
    ["Best time", "Year-round · dry Jun–Sep"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES"],
  ],
  hero: {
    img: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1400",
    caption: "Iten Road · dawn training · 2,400m",
  },
  galleryStrip: [
    "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Iten",
      sub: "Home of Champions · 2,400m · red dirt tracks",
      body: "Thirty kilometres north of Eldoret, Iten is where the world's best distance runners train. You can run the same red dirt roads at 5:30am. The altitude will remind you of the difference.",
      img: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=900",
      accent: "red",
    },
    {
      n: "02",
      name: "Eldoret Town Centre",
      sub: "Market · Moi University · commercial",
      body: "A functional highland town with a covered market, the wide Uganda Road, and the occasional tractor. The commercial centre is honest and busy — not polished, but it works.",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "03",
      name: "Kerio Valley",
      sub: "Escarpment · views · remote roads",
      body: "The dramatic escarpment east of Eldoret, where the plateau drops into the Kerio Valley floor. The views are spectacular, the road is a controlled adventure, and the silence at the top is complete.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
    {
      n: "04",
      name: "Nandi Hills",
      sub: "Tea farms · forest · highland cool",
      body: "The green tea-covered hills south of Eldoret, where the air is cool and the rows of tea plants run to the horizon. A working landscape that is quietly beautiful.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
  ],
  eat: [
    ["Barnley's", "The reliable Eldoret choice — nyama choma, cold Tusker", "Dinner"],
    ["Sirikwa Hotel", "Long-running, central, the business lunch", "Lunch"],
    ["Baraka Fresh", "Juices, light meals, the morning crowd", "Breakfast"],
    ["Kerio View", "Escarpment edge restaurant, dramatic views, decent food", "Lunch"],
    ["Java House", "Reliable chain, good espresso, fast wifi", "Breakfast"],
    ["New Wagon Wheel", "Old colonial restaurant, still serving, still worth it", "Dinner"],
  ],
  do: [
    ["Run the Iten roads", "5:30am, red dirt, thin air — the full experience", "Dawn"],
    ["High Altitude Training Centre", "Visit Iten's world-famous training hub", "Half-day"],
    ["Kerio Valley viewpoint", "30km from town, escarpment views, tea farms", "Half-day"],
    ["Nandi Hills tea farm", "Pick tea, see processing, buy direct", "Half-day"],
    ["Eldoret Marathon route", "Walk or run the city's famous race road", "2h"],
    ["Moi University campus", "Sprawling highland campus, worth a walk through", "1h"],
  ],
  stays: [
    {
      name: "Kerio View Hotel",
      area: "Iten · escarpment",
      note: "On the valley edge, the rooms face the drop. Dramatic and calm.",
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Sirikwa Hotel",
      area: "Eldoret town · central",
      note: "The dependable choice in town. Clean, central, well-run.",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Cherangani Hills Camp",
      area: "North · wilderness",
      note: "For the serious adventurer — highland forest, trout streams, silence.",
      img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "05:30", title: "Run the Iten roads", note: "Thin air, red dirt, morning dark. Bring headlamp." },
    { day: "Day 01", t: "08:00", title: "Breakfast at HATC", note: "High Altitude Training Centre cafe, watch the athletes" },
    { day: "Day 01", t: "10:00", title: "Kerio Valley escarpment", note: "30min drive, the plateau drops away below you" },
    { day: "Day 01", t: "13:00", title: "Lunch at Kerio View", note: "The valley in front of you, ugali and fish" },
    { day: "Day 01", t: "16:00", title: "Nandi Hills tea farm", note: "The light through the rows in the afternoon" },
    { day: "Day 01", t: "19:00", title: "Nyama choma at Barnley's", note: "Long evening, cold beer, highland cool" },
    { day: "Day 02", t: "06:00", title: "Dawn at Iten", note: "Watch the morning training sessions begin" },
    { day: "Day 02", t: "10:00", title: "Cherangani Hills walk", note: "Indigenous forest, trout streams, birdsong" },
    { day: "Day 02", t: "15:00", title: "Drive back through Nandi", note: "Stop whenever the tea rows get you" },
  ],
  getAround: [
    ["Self-drive", "Best for Iten, Kerio Valley, and Nandi Hills — distances require a vehicle."],
    ["Matatu to Iten", "Regular service from Eldoret town, 45min, KES 80."],
    ["Boda boda", "Around town and for short distances."],
    ["Bolt", "Available in Eldoret town — more limited than Nairobi."],
  ],
  practical: [
    ["From Nairobi", "5h road or 1h flight to Eldoret Airport"],
    ["Altitude note", "2,100m in town, 2,400m in Iten — acclimatise before running hard"],
    ["Currency", "KES — bring cash for Iten and rural areas"],
    ["Best time", "Jun–Sep (dry, cool, clear)"],
    ["Clothing", "Layers. Morning temperatures can drop to 10°C."],
    ["Health", "No malaria risk at this altitude"],
  ],
  honest: [
    ["The altitude will slow you down", "You will breathe harder, sleep more, and feel the first day. Plan lighter than you think."],
    ["Iten is 30km from Eldoret", "Not a walk away. You need a vehicle or matatu. Factor the time."],
    ["It's not a tourist city", "Which is the appeal. Eldoret has not been packaged for visitors. This is its value."],
    ["The running community is welcoming", "Most training groups will let you join their early run if you ask the night before. Ask through your hotel."],
  ],
};

// ─── MALINDI ──────────────────────────────────────────────────────────────────

export const MALINDI: CityData = {
  city: "Malindi",
  slug: "malindi",
  country: "Kenya",
  kicker: "The coast",
  motto: "Portuguese stone. Coral reef. Italian pasta. Only here.",
  flag: ["#7BCEEA", "#FDFBF6", "#C8302C"],
  intro:
    "Malindi is an improbable combination that somehow works. A 15th-century Portuguese pillar stands at the edge of an Indian Ocean reef. A Vasco da Gama cross, placed in 1498, overlooks a beach where Italian restaurateurs serve pasta to Kenyan fishermen. The marine national park begins 200 metres offshore, and the snorkelling is as good as anywhere on the coast. North of town, the Arabuko-Sokoke forest harbours six endemic bird species and the world's largest population of elephant shrews. Malindi doesn't do one thing well — it does four things well and doesn't make a fuss about any of them.",
  stats: [
    ["Population", "≈ 220,000"],
    ["Altitude", "Sea level"],
    ["Climate", "Tropical · 25–34°C"],
    ["Best time", "Oct–Mar · Jun–Aug"],
    ["Timezone", "EAT · UTC+3"],
    ["Currency", "KES · EUR near Italian quarter"],
  ],
  hero: {
    img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1400&q=80&auto=format&fit=crop",
    caption: "Malindi Bay · reef at low tide · morning",
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
  ],
  neighborhoods: [
    {
      n: "01",
      name: "Old Town · Vasco da Gama",
      sub: "Portuguese history · pillar · market",
      body: "The original Malindi, where the Vasco da Gama pillar sits above the bay and the fish market runs from 4am. Walk from the pillar south along the waterfront and let the centuries layer.",
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop",
      accent: "red",
    },
    {
      n: "02",
      name: "Silversands",
      sub: "Italian quarter · beach hotels",
      body: "North of town along the beach road, where the Italian investment built a string of beach hotels and restaurants in the 1980s and never fully left. Pasta is very good. The espresso is better than Nairobi.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
      accent: "sand",
    },
    {
      n: "03",
      name: "Marine Park · Casuarina",
      sub: "Reef · snorkelling · glass-bottom boats",
      body: "The southern stretch, where the national park reef lies just offshore and the glass-bottom boats go out every morning. The reef is recovering after the 1998 bleaching — it's not Diani, but it's honest and good.",
      img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
      accent: "green",
    },
    {
      n: "04",
      name: "Arabuko-Sokoke Forest",
      sub: "16km north · endemic birds · forest walks",
      body: "One of the last remaining coastal forests in East Africa. Six bird species found nowhere else on earth. The golden-rumped elephant shrew. A trail system that rewards early starts and patience.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
  ],
  eat: [
    ["I Love Pizza", "The Silversands classic. Wood-fired, long table, the right noise", "Dinner"],
    ["Old Man and the Sea", "Fish restaurant, waterfront, reliable for 30 years", "Dinner"],
    ["Baobab Restaurant", "Swahili coast cooking, baobab garden", "Lunch"],
    ["Driftwood Club", "Beach bar, cold beer, grilled fish at midday", "Lunch"],
    ["Roberto's", "Italian run, simple, very good pasta", "Dinner"],
    ["Malindi Fish Market", "Pick your fish, they grill it — the only real option at 7am", "Breakfast"],
  ],
  do: [
    ["Malindi Marine Park snorkelling", "Coral garden, turtles, parrotfish — glass-bottom or fins", "Half-day"],
    ["Vasco da Gama pillar", "Oldest European monument in sub-Saharan Africa, still standing", "1h"],
    ["Arabuko-Sokoke Forest", "Endemic birds, elephant shrews, guided walk essential", "Half-day"],
    ["Gede Ruins", "14th century Swahili city, 20km south, well-preserved", "2h"],
    ["Watamu Marine Park", "30min south, arguably better reef, definitely fewer boats", "Full day"],
    ["Falconry of Kenya", "Unexpected and excellent, 20min from town", "1.5h"],
  ],
  stays: [
    {
      name: "Driftwood Beach Club",
      area: "Silversands · classic",
      note: "The Malindi institution. Beachfront, pool, unchanged in the best way.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Barracuda Inn",
      area: "Casuarina · boutique",
      note: "Small, well-run, near the marine park. Our quiet pick.",
      img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop",
    },
    {
      name: "Che Shale",
      area: "Ras Shaka · remote",
      note: "40min north, completely isolated, tidal lagoon. Only for the committed.",
      img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    },
  ],
  fortyEight: [
    { day: "Day 01", t: "06:00", title: "Fish market at dawn", note: "Boats come in before light — go early, buy something" },
    { day: "Day 01", t: "08:30", title: "Vasco da Gama pillar", note: "1498, still standing, still correct" },
    { day: "Day 01", t: "10:00", title: "Marine Park snorkel", note: "Book glass-bottom or take fins — 2h on the reef" },
    { day: "Day 01", t: "13:30", title: "Lunch at Old Man and the Sea", note: "Grilled crayfish, cold Tusker, waterfront" },
    { day: "Day 01", t: "17:00", title: "Driftwood sundowners", note: "The beach, the bar, the Malindi ritual" },
    { day: "Day 02", t: "06:30", title: "Arabuko-Sokoke Forest", note: "Endemic birds, go with a KWS guide, arrive early" },
    { day: "Day 02", t: "11:00", title: "Gede Ruins", note: "30min south, 14th century — the overgrown city" },
    { day: "Day 02", t: "14:00", title: "Watamu Marine Park", note: "Better reef, fewer tourists — the afternoon is perfect" },
    { day: "Day 02", t: "19:00", title: "Dinner at I Love Pizza", note: "Long table, wood-fired, the Italian quarter at night" },
  ],
  getAround: [
    ["Tuk-tuk", "The default for Old Town and Silversands. Negotiate, ~200–400 KES."],
    ["Boda boda", "Fast, available, useful for Arabuko-Sokoke and Gede."],
    ["Self-drive", "Best for Watamu, Gede, and Arabuko — distances add up."],
    ["Bolt", "Limited but available in Malindi town."],
  ],
  practical: [
    ["From Nairobi", "1h flight to Malindi Airport or 6h road via Mombasa"],
    ["From Mombasa", "2h road north, or 30min flight"],
    ["Marine Park fees", "$20 non-resident adult"],
    ["Currency", "KES — Euro accepted in Italian quarter"],
    ["Best season", "Oct–Mar for calm seas; Jun–Aug for cooler air"],
    ["Health", "Malaria zone — prophylaxis recommended"],
  ],
  honest: [
    ["The Italian restaurants are genuinely good", "It sounds like a joke. It isn't. The pasta is very good and has been for 30 years."],
    ["Watamu is better for reef", "If snorkelling is your priority, go to Watamu first. Malindi has more history."],
    ["Arabuko-Sokoke requires a guide", "The forest is large and the birds are shy. A KWS ranger guide is $15 and essential."],
    ["Low season (Apr–May) is real", "The long rains close many lodges and the sea is rough. Go between October and March for best conditions."],
  ],
};

// ─── CITY MAP ─────────────────────────────────────────────────────────────────

export const CITIES_MAP: Record<string, CityData> = {
  nairobi: NAIROBI,
  mombasa: MOMBASA,
  lamu: LAMU,
  kisumu: KISUMU,
  nakuru: NAKURU,
  naivasha: NAIVASHA,
  eldoret: ELDORET,
  malindi: MALINDI,
};

// ─── NEIGHBORING GUIDES per city ──────────────────────────────────────────────

export const NEIGHBORS: Record<string, NeighboringGuide[]> = {
  nairobi: [
    { city: "Naivasha", slug: "naivasha", kicker: "Rift Valley lake", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", note: "Hippos and Hell's Gate — 2h from the capital." },
    { city: "Nakuru", slug: "nakuru", kicker: "Flamingos · rhinos", flag: ["#C8302C", "#E2D2AE", "#1B5E3F"], img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop", note: "Rift Valley base. Compact park, big wildlife." },
    { city: "Mombasa", slug: "mombasa", kicker: "Old port · coast", flag: ["#C8302C", "#FDFBF6", "#0F0F0E"], img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop", note: "Swahili stone and Indian Ocean. 1h by air." },
    { city: "Kisumu", slug: "kisumu", kicker: "Lake Victoria", flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"], img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop", note: "The slow west. Lake sunsets, fresh tilapia." },
  ],
  mombasa: [
    { city: "Lamu", slug: "lamu", kicker: "Stone island", flag: ["#0F0F0E", "#C8302C", "#1B5E3F"], img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop", note: "Donkeys, dhows, no cars. Kenya's quietest island." },
    { city: "Malindi", slug: "malindi", kicker: "The coast", flag: ["#7BCEEA", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop", note: "Portuguese pillar, coral reef, Italian pasta." },
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "Gateway city. Karura, Westlands, the wild just south." },
    { city: "Naivasha", slug: "naivasha", kicker: "Rift Valley lake", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", note: "Hippos and cycling. The highland counterpoint." },
  ],
  lamu: [
    { city: "Mombasa", slug: "mombasa", kicker: "Old port · coast", flag: ["#C8302C", "#FDFBF6", "#0F0F0E"], img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop", note: "The coast hub. Swahili stone, Fort Jesus, dhow harbour." },
    { city: "Malindi", slug: "malindi", kicker: "The coast", flag: ["#7BCEEA", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80&auto=format&fit=crop", note: "Halfway between Mombasa and Lamu. Marine park, ruins." },
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "1h flight. The only practical way to begin." },
    { city: "Kisumu", slug: "kisumu", kicker: "Lake Victoria", flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"], img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop", note: "The west. A different Kenya entirely." },
  ],
  kisumu: [
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "6h road or 1h air. The logical gateway." },
    { city: "Nakuru", slug: "nakuru", kicker: "Flamingos · rhinos", flag: ["#C8302C", "#E2D2AE", "#1B5E3F"], img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop", note: "East through the Rift. Flamingos, rhinos, Hell's Gate." },
    { city: "Eldoret", slug: "eldoret", kicker: "Highland city", flag: ["#1B5E3F", "#FDFBF6", "#0F0F0E"], img: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=900", note: "2h north. Champions country and highland cool." },
    { city: "Naivasha", slug: "naivasha", kicker: "Rift Valley lake", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", note: "3h east. Hippos, Hell's Gate, flower farms." },
  ],
  nakuru: [
    { city: "Naivasha", slug: "naivasha", kicker: "Rift Valley lake", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", note: "45min south. Hippos, Hell's Gate, flower farms." },
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "2.5h road. The natural start and end point." },
    { city: "Kisumu", slug: "kisumu", kicker: "Lake Victoria", flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"], img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop", note: "3h west. Lake sunsets and fresh tilapia." },
    { city: "Eldoret", slug: "eldoret", kicker: "Highland city", flag: ["#1B5E3F", "#FDFBF6", "#0F0F0E"], img: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=900", note: "2h north. The runners' capital and Kerio Valley." },
  ],
  naivasha: [
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "2h road. The city that makes Naivasha make sense." },
    { city: "Nakuru", slug: "nakuru", kicker: "Flamingos · rhinos", flag: ["#C8302C", "#E2D2AE", "#1B5E3F"], img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop", note: "45min north. Pink lake, white rhinos, Hell's Gate." },
    { city: "Kisumu", slug: "kisumu", kicker: "Lake Victoria", flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"], img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop", note: "3h west. Africa's largest lake and the slow coast." },
    { city: "Mombasa", slug: "mombasa", kicker: "Old port · coast", flag: ["#C8302C", "#FDFBF6", "#0F0F0E"], img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop", note: "After the highlands — the Indian Ocean awaits." },
  ],
  eldoret: [
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "5h road or 1h flight. The logical gateway." },
    { city: "Kisumu", slug: "kisumu", kicker: "Lake Victoria", flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"], img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop", note: "2h south. Lake sunsets and the slow west." },
    { city: "Nakuru", slug: "nakuru", kicker: "Flamingos · rhinos", flag: ["#C8302C", "#E2D2AE", "#1B5E3F"], img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop", note: "2h south through the Rift. Pink flamingos, white rhinos." },
    { city: "Naivasha", slug: "naivasha", kicker: "Rift Valley lake", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", note: "3h south. Hippos, cycling, the weekend highland." },
  ],
  malindi: [
    { city: "Lamu", slug: "lamu", kicker: "Stone island", flag: ["#0F0F0E", "#C8302C", "#1B5E3F"], img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop", note: "2h north by road or boat. No cars, no rush." },
    { city: "Mombasa", slug: "mombasa", kicker: "Old port · coast", flag: ["#C8302C", "#FDFBF6", "#0F0F0E"], img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop", note: "2h south. Fort Jesus, Old Town, dhow harbour." },
    { city: "Nairobi", slug: "nairobi", kicker: "The capital", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&q=80&auto=format&fit=crop", note: "1h flight. The gateway to all of Kenya." },
    { city: "Naivasha", slug: "naivasha", kicker: "Rift Valley lake", flag: ["#1B5E3F", "#FDFBF6", "#C8302C"], img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", note: "After the coast, the highland. Hippos and Hell's Gate." },
  ],
};

export const NEIGHBORING_GUIDES = NEIGHBORS.nairobi;
export const ALL_CITIES = Object.values(CITIES_MAP);
