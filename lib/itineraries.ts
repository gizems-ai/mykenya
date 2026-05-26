export type ItineraryDay = {
  day: string;
  location: string;
  title: string;
  items: string[];
  stay: string;
};

export type ItineraryLodge = {
  name: string;
  nights: string;
  region: string;
  note: string;
};

export type ItineraryProgram = {
  n: string;
  slug: string;
  title: string;
  kicker: string;
  nights: string;
  group: string;
  route: string;
  from: string;
  accent: string;
  img: string;
  intro: string;
  forWhom: string[];
  includes: string[];
  days: ItineraryDay[];
  lodges: ItineraryLodge[];
  practical: [string, string][];
  honest: [string, string][];
};

export const PROGRAMS: ItineraryProgram[] = [
  {
    n: "01",
    slug: "seven-days-first-time",
    title: "Seven Days for the First Time",
    kicker: "The classic arc, edited",
    nights: "7 nights",
    group: "2 travellers",
    route: "Nairobi → Masai Mara → Diani",
    from: "From $4,800 / couple",
    accent: "#C8302C",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80&auto=format&fit=crop",
    intro: "Seven days is the right amount to do Kenya without rushing it. Two nights in Nairobi to land properly, three nights in the Mara to get the animals in your bones, then two nights on the Diani reef to decompress. We've run this arc more times than we can count — it works every time.",
    forWhom: [
      "First-time Kenya visitors",
      "Couples wanting the safari + beach combination",
      "Travellers with limited time who want the full contrast",
      "Anyone who hasn't been to Africa before",
    ],
    includes: [
      "All domestic flights (Wilson → Mara airstrip → Ukunda)",
      "Airport transfers, start and end",
      "All stays as listed — full board in the Mara, breakfast in Nairobi, half board at Diani",
      "Private game drives with KWS-certified Maasai guide",
      "DSWT Elephant Orphanage entrance",
      "Giraffe Centre visit",
      "Reef snorkeling trip (1×) at Diani",
      "Pre-departure briefing call with Selin",
    ],
    days: [
      {
        day: "Day 1",
        location: "Nairobi",
        title: "Arrive. Don't rush.",
        items: [
          "JKIA pickup, transfer to Hemingways Nairobi in Karen (30 min)",
          "Afternoon at leisure — pool, rooftop gin, a nap",
          "Dinner at the hotel — Kenyan lamb, good wine, early night",
        ],
        stay: "Hemingways Nairobi · Karen",
      },
      {
        day: "Day 2",
        location: "Nairobi",
        title: "The city, at its best",
        items: [
          "08:00 — David Sheldrick Wildlife Trust elephant orphanage feeding (arrive early, it fills up)",
          "10:30 — Karen Blixen Museum · the house, the coffee, the view of the Ngong Hills",
          "13:00 — Lunch at Talisman, Karen's best terrace",
          "15:30 — Giraffe Centre — you'll feed one from the deck, this is the photo you'll send home",
          "Evening — city drive through Westlands and Kilimani, early dinner, pack light for the Mara (strict bag limits)",
        ],
        stay: "Hemingways Nairobi · Karen",
      },
      {
        day: "Day 3",
        location: "Masai Mara",
        title: "Into the Mara",
        items: [
          "08:30 — Transfer to Wilson Airport (domestic terminal)",
          "10:00 — Bush flight to Mara airstrip (approx. 45 min) — the view on approach is the first wow",
          "12:00 — Settle in, camp lunch, meet your guide",
          "16:00 — First game drive — golden hour, cat movement. Your guide knows where they were this morning.",
          "19:00 — Sundowner in the bush. Gin and tonic, kopje views, the plains turning copper.",
          "20:30 — Camp dinner under canvas",
        ],
        stay: "Sand River Masai Mara",
      },
      {
        day: "Day 4",
        location: "Masai Mara",
        title: "Full day, your pace",
        items: [
          "05:30 — Wake-up coffee and rusks at your tent",
          "06:15 — Dawn drive — this is the one. Cats are still moving, the light is flat and perfect.",
          "09:30 — Bush breakfast by the river. Eggs, toast, real coffee. Your guide eats with you.",
          "12:30 — Midday rest. The bush quietens at noon. Swim if there's a pool, read if there isn't.",
          "16:00 — Afternoon drive. The herds move again after 4pm.",
          "18:45 — Sundowner. A different kopje each evening.",
          "20:00 — Dinner. Usually long, usually good.",
        ],
        stay: "Sand River Masai Mara",
      },
      {
        day: "Day 5",
        location: "Masai Mara",
        title: "Walking morning, then coast",
        items: [
          "06:00 — Walking safari with Maasai guide and armed ranger. The bush from ankle height is a different country.",
          "09:00 — Final camp breakfast, check out",
          "11:00 — Airstrip departure, bush flight south to Ukunda (Diani)",
          "13:30 — Beach arrival. Check in, lunch, a swim. The temperature jump from Mara elevation to sea level takes an hour to believe.",
          "Afternoon — free. The reef is right there.",
        ],
        stay: "The Sands at Nomad · Diani",
      },
      {
        day: "Day 6",
        location: "Diani Beach",
        title: "Reef, dhow, nothing",
        items: [
          "07:00 — Early reef snorkel before the wind picks up. Marine park side, your guide knows the coral.",
          "10:00 — Dhow excursion — a traditional boat, cold drinks, a sandbank if the tide's right",
          "13:00 — Long beach lunch at the lodge",
          "Afternoon — entirely yours. Kitesurf lesson if you want one. Hammock if you don't.",
          "Evening — sunset walk along Diani's best stretch, dinner",
        ],
        stay: "The Sands at Nomad · Diani",
      },
      {
        day: "Day 7",
        location: "Diani → home",
        title: "Last morning, slow departure",
        items: [
          "Final breakfast on the terrace",
          "Morning at leisure — a last swim, a last papaya",
          "Transfer to Ukunda airstrip → Mombasa Moi → JKIA connection or direct international",
          "Selin sends you home with a list of places you didn't make this time. For next time.",
        ],
        stay: "—",
      },
    ],
    lodges: [
      { name: "Hemingways Nairobi", nights: "2 nights", region: "Karen · Nairobi", note: "Kenya's best boutique hotel in the green suburb Karen. Rooftop bar, garden suites, closest good hotel to JKIA and the Giraffe Centre." },
      { name: "Sand River Masai Mara", nights: "3 nights", region: "Masai Mara", note: "Eight tents on the Mara river. Private conservancy, migration front-row, Maasai guide, no fences. The camp most people remember longest." },
      { name: "The Sands at Nomad", nights: "2 nights", region: "Diani Beach", note: "Adults-only on Diani's best stretch. Barefoot luxury, reef snorkeling, dhow dinners. The transition from bush to beach in under two hours." },
    ],
    practical: [
      ["Flights", "International into JKIA Nairobi. We coordinate all domestic legs."],
      ["Visa", "eVisa online — apply at least 72h before departure. We send you the link."],
      ["Vaccines", "Yellow fever cert. required. Malaria prophylaxis recommended for Mara and coast."],
      ["Currency", "USD for most lodge payments. KES for tips and markets. We brief you fully."],
      ["Luggage", "Strict 15kg limit on bush flights. We advise exactly what to pack."],
      ["Climate", "Nairobi cool (1,700m), Mara variable (chilly at dawn), Diani hot and humid."],
    ],
    honest: [
      ["You won't see everything in 7 days", "But you'll see enough to understand Kenya. The first trip is always the one that makes you book the second."],
      ["The Mara can disappoint", "If you expect 50 lions guaranteed, it will. If you go ready to watch and wait, it won't. We set expectations correctly before you land."],
      ["April–May is wet", "Both Mara and coast get rain in the long rains. Great for price, harder for weather. We'll tell you if your dates are risky."],
      ["This is a starting line", "Seven days is our shortest Kenya arc. People regularly come back for 14. We build in enough so you understand what more would look like."],
    ],
  },

  {
    n: "02",
    slug: "honeymoon-bush-barefoot",
    title: "Honeymoon — Bush & Barefoot",
    kicker: "The arc people keep asking us to recreate",
    nights: "10 nights",
    group: "Couple",
    route: "Masai Mara → Lamu",
    from: "From $12,800 / couple",
    accent: "#1B5E3F",
    img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&q=80&auto=format&fit=crop",
    intro: "A private camp in the Mara. A bush flight north. A Swahili stone house in Lamu. In that order, with nothing rushed. We've been building this arc for eight years — it is, by some margin, the best honeymoon in Africa. The transition from savannah to Indian Ocean is the thing people come back to describe, years later.",
    forWhom: [
      "Newlyweds and honeymooners",
      "Anniversary and milestone couples",
      "Those who've done the Maldives and want something with more substance",
      "Couples who want luxury without performance",
    ],
    includes: [
      "Private vehicle and guide for all Mara drives — your car, nobody else",
      "Bush flights: Wilson → Mara, Mara → Lamu",
      "All stays as listed — fully inclusive in the Mara, half board in Lamu",
      "In-tent couples massage (Mara, night 3)",
      "Private sunset dhow cruise in Lamu",
      "Swahili cooking class with chef Amina",
      "Nairobi hotel night on arrival",
      "Pre-departure briefing call and full on-the-ground briefing",
    ],
    days: [
      {
        day: "Day 1",
        location: "Nairobi",
        title: "Arrive. The city is the beginning.",
        items: [
          "JKIA pickup → Hemingways Nairobi in Karen",
          "Settle in. The garden suite. The rooftop gin bar.",
          "Welcome dinner — Selin's table recommendation in Karen",
          "Early night. Tomorrow the bush starts at dawn.",
        ],
        stay: "Hemingways Nairobi · Karen",
      },
      {
        day: "Day 2",
        location: "Masai Mara",
        title: "Into the Mara. The first drive.",
        items: [
          "09:00 — Wilson Airport, bush flight to Mara (45 min). The approach is the first moment.",
          "12:00 — Arrive camp. Your guide meets you at the airstrip.",
          "12:30 — Camp lunch, introduction, afternoon rest",
          "16:00 — First private game drive. Golden hour. The herds are moving.",
          "19:00 — Sundowner on a kopje, just the two of you and the guide",
          "20:00 — Private dinner by the fire, outside your tent",
        ],
        stay: "Angama Mara",
      },
      {
        day: "Day 3",
        location: "Masai Mara",
        title: "The morning that changes things",
        items: [
          "05:45 — Coffee and rusks at your tent. The camp is silent.",
          "06:30 — Dawn drive. Your guide tracked through the night. The leopard is two kilometres north.",
          "09:30 — Bush breakfast in the field. Eggs on a fire, a tablecloth, nobody around.",
          "12:00 — Back to camp. Pool, tent, long lunch.",
          "15:00 — Couples massage on your veranda. Booked. The masseuse is on-site.",
          "17:00 — Sundowner drive. This is the light.",
          "20:00 — Private dinner. Table outside, lanterns in the sand, the guide steps away.",
        ],
        stay: "Angama Mara",
      },
      {
        day: "Day 4",
        location: "Masai Mara",
        title: "Walking morning, slow afternoon",
        items: [
          "06:00 — Walking safari with Maasai guide and armed ranger. One hour minimum on foot.",
          "09:00 — Breakfast in camp",
          "10:30 — Conservation talk with the camp's ecology team",
          "13:00 — Lunch, siesta, the long slow afternoon",
          "16:30 — Final game drive in the Mara. You'll be back — but not today.",
          "19:30 — Last camp dinner. Your guide talks through tomorrow's bush flight.",
        ],
        stay: "Angama Mara",
      },
      {
        day: "Day 5",
        location: "Masai Mara → Lamu",
        title: "The handover. Bush to island.",
        items: [
          "08:00 — Airstrip. Bush flight south to Wilson Airport, Nairobi (45 min).",
          "10:30 — Connection flight: Wilson → Lamu (55 min). The view over the coast on descent.",
          "12:30 — Boat transfer from Lamu airstrip to your island. The donkeys replace the vehicles.",
          "13:30 — Check in. A Swahili stone house on the water. The channel at the window.",
          "Afternoon — completely free. Eat somewhere your captain recommends.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Day 6",
        location: "Lamu",
        title: "The town. Slowly.",
        items: [
          "08:00 — Breakfast on the terrace over the channel",
          "10:00 — Lamu Old Town walk with a local guide. Swahili architecture, the fort, the museum.",
          "13:00 — Lunch at a courtyard restaurant in the medina. Ask the guide, not TripAdvisor.",
          "Afternoon — Shela beach. The walk from the old town along the waterfront takes 20 minutes.",
          "18:30 — Private sunset dhow cruise on the channel. Your captain, cold drinks, the sky.",
          "20:30 — Dinner back at the hotel. The calamari is the house dish — it's the reason people come back.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Day 7",
        location: "Lamu",
        title: "The reef. The creek.",
        items: [
          "07:30 — Sunrise over the tidal flats. Bring coffee to the terrace.",
          "09:00 — Snorkeling at Manda tidal flat, or a morning dhow to the reef off Manda Island",
          "12:30 — Long lunch. Grilled fish, coconut rice, the ceiling fan, nowhere to be.",
          "Afternoon — mangrove creek kayak with a guide. One of the quietest hours in Kenya.",
          "Evening — free. The town has a couple of good rooftop bars.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Day 8",
        location: "Lamu",
        title: "Cooking class day",
        items: [
          "08:00 — Morning market walk. Your cooking class starts here, buying the pilau spices.",
          "10:00 — Swahili cooking class with chef Amina. Three dishes, your kitchen, her recipes.",
          "13:00 — Eat what you made. It's better than you think.",
          "Afternoon — the beach. A book. No phone if you can help it.",
          "Evening — rooftop dinner. The best table in the house, Selin has pre-arranged it.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Day 9",
        location: "Lamu",
        title: "The slow day",
        items: [
          "No plan. That's the plan.",
          "A dhow to a sandbank if you want to see one. The captain knows one nobody visits.",
          "Lunch wherever you end up.",
          "A walk through the back alleys of the old town. Get slightly lost. It's very small.",
          "Last Lamu dinner. The place you should have found earlier.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Day 10",
        location: "Lamu → home",
        title: "The last morning",
        items: [
          "Slow breakfast. The channel one more time.",
          "Boat to Lamu airstrip, flight to Nairobi, international connection",
          "Most couples message us within 48 hours of landing home. We're ready for it.",
        ],
        stay: "—",
      },
    ],
    lodges: [
      { name: "Hemingways Nairobi", nights: "1 night", region: "Karen · Nairobi", note: "Night 1 arrival buffer. The rooftop is worth staying up for. Better than any airport hotel." },
      { name: "Angama Mara", nights: "3 nights", region: "Mara Triangle", note: "Cliff-top tents over the Oloololo Escarpment. The Out of Africa ridge. The most romantic camp in Kenya. Two suites at the end of the deck have uninterrupted views." },
      { name: "Peponi Hotel", nights: "5 nights", region: "Shela · Lamu", note: "Family-run for 50 years. The Lamu classic. Ask for the room with the channel view. The calamari is the house dish and the reason people keep returning." },
    ],
    practical: [
      ["Flights", "International into JKIA Nairobi. We coordinate Wilson → Mara and Mara → Lamu domestic legs."],
      ["Visa", "eVisa online — 72h before departure. We send you the link and check it for you."],
      ["Vaccines", "Yellow fever cert. Malaria prophylaxis for Mara and Lamu."],
      ["Luggage", "Strict 15kg limit on bush flights. We give you a packing list tuned to this arc."],
      ["Lamu note", "No cars on the island. Donkeys and feet. Bags handled by porters. Completely worth it."],
      ["Budget", "The Mara camps are the main cost variable — we have options at multiple price points."],
    ],
    honest: [
      ["Book the Mara six months out", "Angama and the equivalent camps fill up — especially July to October migration season. This is not marketing. We've had to reroute couples who waited."],
      ["Lamu in April is wet", "The north coast monsoon runs April–May. We redirect you to Diani or push dates if your timing is fixed. Worth knowing upfront."],
      ["The arc sounds simple", "It is — that's the point. The transfers are the part people underestimate. We handle every single one so you never have to think about it."],
      ["We'll ask about your relationship", "Not to be intrusive. To brief the camps correctly. A three-month couple and a seven-year couple have different honeymoons. Both are right."],
    ],
  },

  {
    n: "03",
    slug: "slow-kenya",
    title: "Slow Kenya",
    kicker: "One place at a time",
    nights: "14 nights",
    group: "Solo or couple",
    route: "Watamu → Lamu",
    from: "From $6,400 / person",
    accent: "#C8302C",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
    intro: "Fourteen days and two places. No airports between them, just a coastal transfer. Watamu is a marine park village where the reef sits ten minutes from your door and the days are governed by tide tables. Lamu is the oldest living city in East Africa and it moves at the pace of a donkey. Together they make the best fortnight in Kenya.",
    forWhom: [
      "Solo travellers seeking genuine quiet and depth",
      "Couples who want to slow down properly",
      "Writers, photographers, readers — people who need time",
      "Anyone who has been to Bali four times and wants something harder to reach",
    ],
    includes: [
      "Nairobi → Watamu flight and return Lamu → Nairobi flight",
      "Road or boat coastal transfer from Watamu to Lamu",
      "All stays as listed — half board throughout",
      "Marine park snorkeling × 3 (Watamu)",
      "Guided creek kayak (Watamu)",
      "Gede Ruins guided walk",
      "Swahili cooking class (Lamu)",
      "Sunset dhow cruise (Lamu, 1×)",
      "Full WhatsApp support throughout — Selin's number",
    ],
    days: [
      {
        day: "Days 1–2",
        location: "Nairobi → Watamu",
        title: "Land, then slow down",
        items: [
          "Fly into Nairobi JKIA, connection to Malindi airstrip (55 min)",
          "Transfer to Watamu — 25 minutes south on a tarmac road",
          "Check in. Your room faces the marine park bay.",
          "Day 2: no agenda. A first swim, a first fish dinner at a local restaurant, a first real night of no obligations.",
        ],
        stay: "Turtle Bay · Watamu",
      },
      {
        day: "Days 3–4",
        location: "Watamu",
        title: "The reef, the creek, the rhythm",
        items: [
          "Day 3: Morning snorkel in the marine park — coral gardens, turtles, whale sharks in season (Oct–Mar). Your guide reads the tide.",
          "Afternoon: Mida Creek boat trip with a birdguide. 200+ species. The silence in the mangroves is worth the trip.",
          "Day 4: Hire a bicycle. Ride to Gede Ruins — a 15th-century Swahili city abandoned and swallowed by forest. Strange and perfect.",
          "Afternoon back at the bay. A hammock. A book. That's it.",
        ],
        stay: "Turtle Bay · Watamu",
      },
      {
        day: "Days 5–7",
        location: "Watamu",
        title: "Deep coast days",
        items: [
          "Day 5: Second marine park session — earlier start, the park is yours.",
          "Watamu village walk in the afternoon: the mosque, the fishing boats coming in, the market.",
          "Day 6: Sea kayak hire. Paddle south along the coastline, a beach lunch.",
          "Day 7: A completely free day. Your choice. Or nothing at all — which is also correct.",
          "Evening: turtle conservation walk if nesting season. The rangers know you.",
        ],
        stay: "Turtle Bay · Watamu",
      },
      {
        day: "Day 8",
        location: "Watamu → Lamu",
        title: "The coastal transfer",
        items: [
          "Option A: Road transfer Watamu → Malindi → Mombasa, then Mombasa ferry and north coast road to Lamu (full day, local experience)",
          "Option B: Short Malindi → Lamu flight (45 min) — we book based on your preference",
          "Arrive Lamu by boat from the airstrip or by vehicle-to-ferry",
          "Check in. The donkeys. The narrow streets. The smell of cardamom from a bakery.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Days 9–10",
        location: "Lamu",
        title: "The old town, slowly",
        items: [
          "Day 9: A guided walk through Lamu Old Town with a local historian guide. The Swahili houses, the fort, the Riyadha Mosque. Half day — don't rush the museum.",
          "Lunch in a courtyard. Ask the guide, not TripAdvisor.",
          "Day 10: Shela beach. The walk from old town takes 20 minutes along the waterfront.",
          "Afternoon: Sunset dhow cruise. Your captain, cold drinks, the channel turning orange.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Days 11–12",
        location: "Lamu",
        title: "Mangroves, cooking, the sandbank",
        items: [
          "Day 11: Mangrove creek kayak or dhow — an hour of silence in a forest of roots.",
          "Snorkel off Manda Island tidal flat.",
          "Day 12: Swahili cooking class with chef Amina. Start at the market for the spices. Eat what you make.",
          "Afternoon: free. Get lost in the old town alleys — the island is tiny, you'll find your way back.",
        ],
        stay: "Peponi Hotel · Shela · Lamu",
      },
      {
        day: "Days 13–14",
        location: "Lamu → home",
        title: "The long goodbye",
        items: [
          "Day 13: Ask your captain to take you to a sandbank nobody visits. Bring a book and a lunch box.",
          "Return for a last rooftop sunset.",
          "Day 14: Slow breakfast, boat to airstrip, Lamu → Nairobi → international connection.",
          "You'll have at least three journal entries and one conversation you'll keep having for years.",
        ],
        stay: "—",
      },
    ],
    lodges: [
      { name: "Turtle Bay", nights: "7 nights", region: "Watamu", note: "Eco-certified, PADI 5-star, right on the marine park bay. The snorkeling team has been running this for 20 years. It's not fancy — it's the right kind of right." },
      { name: "Peponi Hotel", nights: "7 nights", region: "Shela · Lamu", note: "Family-run for 50 years. The original Lamu hotel. The channel terrace for breakfast is the reason people keep coming back. The calamari is the house dish." },
    ],
    practical: [
      ["Flights", "Nairobi → Malindi (Turtle Bay transfer) and Lamu → Nairobi at end. We coordinate."],
      ["Visa", "eVisa online. We send you the link."],
      ["Coast note", "April–May is monsoon season on both stretches. November can bring short rains. We advise if your timing is risky."],
      ["Lamu access", "No cars. You arrive by boat from the airstrip. Bags handled by porters. This is not a problem — it's the point."],
      ["Connectivity", "Watamu: good signal, Turtle Bay has WiFi. Lamu: Safaricom works, Peponi has WiFi, but the town will make you want to put your phone down."],
      ["Solo travel", "Both Watamu and Lamu are well-established solo destinations. We brief you on the specific streets and rhythms. It's safe. We wouldn't send you otherwise."],
    ],
    honest: [
      ["Fourteen days sounds long", "It isn't. By day five in Watamu you'll stop counting. By day ten in Lamu you'll be annoyed it ends."],
      ["Watamu is not a luxury destination", "It's a good, real, well-run coastal eco resort. Not ultra-glamorous. That's the point — the setting is the luxury, not the thread count."],
      ["Lamu is a Muslim town", "Dress modestly away from the beach. Shoulders covered, knees covered in the old town. It's not difficult and it's worth understanding why."],
      ["The best meals are not at your hotel", "We give you a local restaurant list for both locations. Don't eat every meal at the lodge."],
    ],
  },

  {
    n: "04",
    slug: "family-kenya-first-trip-with-kids",
    title: "Family Kenya — first trip with kids",
    kicker: "Logistics simplified, kid-tested",
    nights: "10 nights",
    group: "Family of 4",
    route: "Nairobi → Masai Mara → Watamu",
    from: "From $14,000 / family of 4",
    accent: "#1B5E3F",
    img: "/single-mother-safari.jpg",
    intro: "We've sent 240+ families to Kenya. We know the camps where kids get their own vehicle. We know which pools are gated, where to find a pediatrician on call, and which stretches of reef a 7-year-old can snorkel safely. We also know what breaks — and we prevent that. This arc is the one families come back to extend on the second trip.",
    forWhom: [
      "Families with children aged 5 and up",
      "Parents who want an adventure but refuse to sacrifice sleep",
      "Families where one partner is more cautious and one is more adventurous — this arc works for both",
      "Anyone who has been told Kenya isn't for kids",
    ],
    includes: [
      "All domestic flights (Nairobi → Mara, Mara → Watamu)",
      "Airport and camp transfers throughout",
      "Giraffe Manor breakfast (pre-booked — this fills up 6 months out)",
      "DSWT Elephant Orphanage visit",
      "Family-suite accommodation at all properties",
      "Game drives with family-specialist Maasai guide",
      "Maasai cultural visit for kids (beading, jumping, animal tracking)",
      "Marine park family snorkel × 2 (Watamu)",
      "Pediatrician on-call briefing and number",
      "Full pre-departure briefing with packing list for kids",
    ],
    days: [
      {
        day: "Day 1",
        location: "Nairobi",
        title: "Arrive. The giraffes are first.",
        items: [
          "JKIA pickup, transfer to hotel in Karen",
          "Afternoon: Giraffe Centre — the kids will feed a Rothschild giraffe from a raised deck. This is the photo that comes home on fridge magnets.",
          "Short drive through Nairobi suburbs before dinner",
          "Early dinner, early bed — the kids have a 5:30am call in a few days",
        ],
        stay: "Hemingways Nairobi · Karen",
      },
      {
        day: "Day 2",
        location: "Nairobi",
        title: "The elephants. The magic hour.",
        items: [
          "08:00 — David Sheldrick Wildlife Trust orphanage. The elephant keepers arrive with the orphaned calves — feeding time, 45 minutes. Kids can touch them.",
          "10:30 — Karen Blixen Museum. Worth 40 minutes for the parents, 20 minutes for the kids.",
          "13:00 — Lunch at a family-friendly Karen restaurant",
          "15:00 — Giraffe Manor afternoon tea — the giraffes put their heads in the windows. Pre-booked.",
          "Evening — hotel dinner, early night, pack light for the Mara (15kg limit per person)",
        ],
        stay: "Hemingways Nairobi · Karen",
      },
      {
        day: "Day 3",
        location: "Masai Mara",
        title: "First game drive. Best day.",
        items: [
          "09:00 — Wilson Airport, bush flight to Mara (45 min). Kids usually love this.",
          "12:00 — Arrive camp, family suite, meet your guide",
          "13:00 — Camp lunch. Kids usually eat better at bush camps than anywhere else.",
          "16:00 — First family game drive. Your guide pitches it for the kids: tracking stories, dung beetles, bird calls.",
          "19:00 — Sundowner — juice for the kids, something stronger for the parents",
          "20:00 — Camp dinner. Kids usually fall asleep in their chairs.",
        ],
        stay: "Governors' Camp · Masai Mara",
      },
      {
        day: "Day 4",
        location: "Masai Mara",
        title: "Full Mara day. The lion story.",
        items: [
          "06:00 — Dawn drive (optional for younger kids, otherwise 07:30 start)",
          "09:30 — Bush breakfast in the field",
          "12:00 — Midday camp. Pool time. Kids actually nap.",
          "16:00 — Afternoon drive — this is usually when families see the lion. Your guide knows the prides.",
          "19:00 — Sundowner, camp dinner",
        ],
        stay: "Governors' Camp · Masai Mara",
      },
      {
        day: "Day 5",
        location: "Masai Mara",
        title: "Maasai village. Bush school.",
        items: [
          "07:00 — Early walk with the Maasai guide — tracking, reading prints, bird identification",
          "10:00 — Maasai village visit. The kids try the jumping dance. There is beadwork to take home.",
          "13:00 — Lunch, siesta",
          "16:00 — Last game drive in the Mara. Your guide knows you're leaving tomorrow.",
          "20:00 — Camp bonfire, hot chocolate for the kids",
        ],
        stay: "Governors' Camp · Masai Mara",
      },
      {
        day: "Day 6",
        location: "Masai Mara",
        title: "Full day, your pace",
        items: [
          "Families with younger kids: slow morning, pool, optional short afternoon drive",
          "Families with older kids: dawn-to-dusk drive option with packed lunch in the field",
          "Evening: last camp dinner. The guide talks through the coast. The kids probably want to stay.",
        ],
        stay: "Governors' Camp · Masai Mara",
      },
      {
        day: "Day 7",
        location: "Mara → Watamu",
        title: "The coast. A completely different Kenya.",
        items: [
          "08:30 — Airstrip departure, bush flight to Ukunda → Mombasa connection → Malindi",
          "Transfer to Watamu (25 min). The temperature difference from Mara elevation hits immediately.",
          "Afternoon: a swim in the pool, dinner on the terrace, early night",
          "The kids discover the ocean in the morning",
        ],
        stay: "Turtle Bay · Watamu",
      },
      {
        day: "Day 8",
        location: "Watamu",
        title: "Reef morning",
        items: [
          "07:30 — Marine park snorkel session. The guide picks the calm pocket for kids.",
          "Kids 5+ can snorkel with supervision. Under 5 — glass-bottom boat option available.",
          "10:00 — Beach time. Watamu's main beach is family-safe.",
          "Afternoon: Creek boat trip with birdguide. Slower pace, great for curious kids.",
          "Evening: fish and chips at the lodge, early night",
        ],
        stay: "Turtle Bay · Watamu",
      },
      {
        day: "Day 9",
        location: "Watamu",
        title: "Turtle beach day",
        items: [
          "09:00 — Watamu Turtle Watch visit — the conservation project that manages nesting beaches",
          "Late morning: second marine park snorkel session",
          "Afternoon: free beach day. If nesting season, evening turtle nest walk.",
          "Last family dinner at the lodge. The parents have wine. The kids argue about who saw the best animal.",
        ],
        stay: "Turtle Bay · Watamu",
      },
      {
        day: "Day 10",
        location: "Watamu → home",
        title: "Last morning",
        items: [
          "Slow breakfast, final swim",
          "Transfer to Malindi airstrip → Nairobi connection → international departure",
          "Most families message us within a week. We have a Day 11 waiting for whenever they come back.",
        ],
        stay: "—",
      },
    ],
    lodges: [
      { name: "Hemingways Nairobi", nights: "2 nights", region: "Karen · Nairobi", note: "Large family suite available. Garden views, pool, within 15 minutes of the Giraffe Centre and Sheldrick Trust. The safest starting hotel in Nairobi for families." },
      { name: "Governors' Camp", nights: "4 nights", region: "Masai Mara", note: "The family-specialist choice in the Mara. Family tents with connecting rooms, pools, a junior ranger programme, and a guide team experienced with children. Gated, safe, and real." },
      { name: "Turtle Bay", nights: "3 nights", region: "Watamu", note: "The best family beach hotel on the north coast. Marine park on the doorstep, safe beach, experienced snorkel guides who've worked with kids for 15 years." },
    ],
    practical: [
      ["Age minimum", "We send families with children from age 4. Game drives: 5+. Snorkeling: 7+ without support. We brief you on your specific children."],
      ["Health", "Yellow fever cert. Malaria prophylaxis: essential for both Mara and coast. We recommend pediatric-dose options. Pediatrician on call number provided."],
      ["Luggage", "15kg per person on bush flights. Kids' bags count. We give you a packing list calibrated for the arc."],
      ["Game drives", "All family drives are in a 7-seater vehicle with a dedicated guide. No shared vehicles."],
      ["Swimming", "All three properties have pools. Watamu beach is safe for supervised swimming. Marine park snorkel is guided."],
      ["Flights", "All domestic connections coordinated. We don't put families on bus transfers."],
    ],
    honest: [
      ["It's not a resort holiday", "The camps are real and the animals are real. Some children are overwhelmed on the first drive — that's normal and it always settles. We brief you on what to expect."],
      ["The migration is seasonal", "Late July to October in the Mara. Outside this window, you'll still see plenty — just not the crossing. We tell you the truth about what you'll see in your window."],
      ["Kids change the rhythm", "The 5:30am drive is optional. We build in afternoon rest. The schedule is yours, not the camp's."],
      ["Giraffe Manor books 6 months out", "The afternoon tea session is easier, but breakfast in the house requires early booking. We handle this as soon as you confirm. Don't delay."],
    ],
  },
];

export const PROGRAMS_MAP: Record<string, ItineraryProgram> = Object.fromEntries(
  PROGRAMS.map((p) => [p.slug, p])
);
