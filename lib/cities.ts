export type CityData = {
  city: string;
  slug: string;
  country: string;
  kicker: string;
  motto: string;
  flag: string[]; // 3-color stripe
  intro: string;
  stats: [string, string][];
  hero: { img: string; caption: string };
  galleryStrip: string[];
  neighborhoods: { n: string; name: string; sub: string; body: string; img: string; accent: string }[];
  eat: [string, string, string][]; // [name, desc, category]
  do: [string, string, string][];  // [name, desc, duration]
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
      body: "Where Selin lives, more or less. Roasteries in converted homes, the tailor's, the framer's, the bookshop that still does cash. The good Nairobi morning happens here.",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop",
      accent: "black",
    },
    {
      n: "04",
      name: "Gigiri",
      sub: "UN belt · diplomatic · quiet streets",
      body: "Roads in straight lines, embassies behind hedges, Village Market on a Saturday. The closest thing Nairobi has to a suburb, and the easiest place to get a courier on Sunday.",
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
    [
      "The traffic is real",
      "Plan two big things a day, not five. Move with the day, not against it.",
    ],
    [
      "The altitude is real too",
      "Drink twice the water. Skip the second beer the first night.",
    ],
    [
      "Sundays are sleepy",
      "Most galleries shut, half the cafés close — lean into a Karura morning and a long lunch.",
    ],
    [
      "After dark, drive — don't walk",
      "Even short distances. It's how the city works, not a scare-quote.",
    ],
  ],
};

export const NEIGHBORING_GUIDES: NeighboringGuide[] = [
  {
    city: "Mombasa",
    slug: "mombasa",
    kicker: "Old town · port",
    flag: ["#C8302C", "#FDFBF6", "#0F0F0E"],
    img: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=900&q=80&auto=format&fit=crop",
    note: "Coast hub. Swahili stone houses, dhow harbour, fort.",
  },
  {
    city: "Lamu",
    slug: "lamu",
    kicker: "Stone island",
    flag: ["#0F0F0E", "#C8302C", "#1B5E3F"],
    img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop",
    note: "Donkeys, dhows, no cars. The country's quietest island.",
  },
  {
    city: "Kisumu",
    slug: "kisumu",
    kicker: "Lakeside",
    flag: ["#1B5E3F", "#E2D2AE", "#0F0F0E"],
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop",
    note: "Lake Victoria's edge. Slow afternoons, fresh tilapia.",
  },
  {
    city: "Eldoret",
    slug: "eldoret",
    kicker: "Highland city · runners",
    flag: ["#1B5E3F", "#FDFBF6", "#0F0F0E"],
    img: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=900",
    note: "Champion country. The runners' capital.",
  },
];

export const ALL_CITIES = [NAIROBI]; // extend later
