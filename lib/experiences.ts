export type Experience = {
  tag: string; slug: string; title: string; kicker: string; lead: string;
  blurb: string; region: string; days: string; from: string;
  img: string[]; highlights: string[]; stays: string[];
  season: number[]; // 12 values: 2=Quiet 3=Good 4=Great 5=Peak
  filterTag: string;
};

export const EXPERIENCE_DETAIL: Experience[] = [
  { tag:"01", slug:"safari", title:"Safari", kicker:"Wild Kenya", lead:"Private camps, ranger-led drives, the slow hours.", blurb:"Kenya invented the modern safari — and we choose the camps that still feel like it. Small footprints, private conservancies, guides who grew up on the land.", region:"Mara · Laikipia · Amboseli", days:"4–8 nights", from:"from $640 / night", img:["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop"], highlights:["Private conservancy game drives","Walking safaris with Maasai trackers","Hot-air balloon over the Mara","Hide photography at waterholes"], stays:["Angama Mara","Sirikoi · Lewa","Tortilis · Amboseli"], season:[3,3,2,2,2,3,4,5,5,4,3,3], filterTag:"Wild" },
  { tag:"02", slug:"beach", title:"Beach Escapes", kicker:"Indian Ocean", lead:"Barefoot luxury, white sand, lazy reefs.", blurb:"The Kenyan coast moves at the pace of the tide. We send you to the stretches where the dhow boys still know everyone, and the beach reads like a private one.", region:"Diani · Watamu · Lamu", days:"5–10 nights", from:"from $380 / night", img:["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fit=crop"], highlights:["Private dhow sunset sails","Kite-surf lessons in Diani","Marine reserve snorkeling","Swahili supper clubs at home"], stays:["The Majlis · Lamu","Almanara · Diani","Hemingways · Watamu"], season:[5,5,4,2,2,3,4,4,4,4,4,5], filterTag:"Coast" },
  { tag:"03", slug:"wellness", title:"Wellness", kicker:"Slow systems", lead:"Coastal retreats and bush spas — the gentle reset.", blurb:"We pair clinical rigor with a deeper, slower rhythm: yoga at sunrise, Ayurveda by the reef, breathwork under acacia trees.", region:"Watamu · Naivasha · Laikipia", days:"5–14 nights", from:"from $420 / night", img:["https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80&auto=format&fit=crop"], highlights:["Daily yoga with ocean view","Ayurveda-trained therapists","Forest bath in Karura","Digital-detox bush stays"], stays:["Medina Palms","Enashipai · Naivasha","Segera Retreat"], season:[4,4,3,2,2,4,4,4,5,5,4,4], filterTag:"Wellness" },
  { tag:"04", slug:"honeymoon", title:"Honeymoons", kicker:"For two", lead:"Bush, beach, and the quiet between.", blurb:"Our most-requested arc: a private guide in the Mara, a bush flight to Lamu, a stone house on the water. We tune every transfer so you never see the seams.", region:"Mara → Lamu (typical)", days:"8–12 nights", from:"from $9,400 / couple", img:["https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=900&q=80&auto=format&fit=crop"], highlights:["Private vehicle, end to end","Bush flight, no overland","Sunset dhow with chef","In-villa massage on arrival"], stays:["Sala's Camp","Peponi Hotel · Lamu","Sasaab · Samburu"], season:[5,4,3,2,2,3,4,5,5,4,3,4], filterTag:"Romance" },
  { tag:"05", slug:"nomad", title:"Digital Nomad Stays", kicker:"Long-stay", lead:"Homes with fibre, communities with rhythm.", blurb:"For the month-or-more crowd: vetted villas with proper fibre, co-working communities, a SIM card on your pillow, and a concierge who handles the residency paperwork.", region:"Nairobi · Diani · Watamu", days:"30–90 nights", from:"from $2,800 / month", img:["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop"], highlights:["300+ Mbps verified","Co-working membership","Maid + chef on call","Visa paperwork handled"], stays:["Karen long-stays","Diani Beachfront villas","Watamu studios"], season:[4,4,4,3,3,4,5,5,5,4,4,4], filterTag:"Long-stay" },
  { tag:"06", slug:"family", title:"Family Journeys", kicker:"With kids", lead:"Logistics simplified, kid-tested camps.", blurb:"Giraffe Manor breakfasts, family suites with pools, doctors on call, and an itinerary that respects nap windows. We've sent 240+ families — we know what breaks.", region:"Nairobi · Mara · Watamu", days:"8–12 nights", from:"from $720 / day · family", img:["https://images.pexels.com/photos/35648217/pexels-photo-35648217.jpeg?auto=compress&cs=tinysrgb&w=900","https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop"], highlights:["Family-suite-only camps","Pools at every base","Kid-safe game drives","Pediatrician on call"], stays:["Giraffe Manor","Hemingways Watamu","Mara Bushtops"], season:[4,4,3,2,2,4,5,5,5,4,3,4], filterTag:"With Kids" },
  { tag:"07", slug:"villa", title:"Private Villas", kicker:"Whole-house", lead:"Hand-picked houses with crew.", blurb:"From a six-bed stone house in Lamu Old Town to a cliff-side villa above Watamu's marine park — staffed, stocked, and tuned for groups of 4 to 14.", region:"Lamu · Diani · Karen", days:"5–14 nights", from:"from $1,200 / night", img:["https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop"], highlights:["Full staff — chef, house, security","Pre-stocked groceries","Driver on standby","Private dhow on call"], stays:["Forodhani House","Alfajiri Villas","Robinson Island"], season:[5,5,4,2,2,3,4,4,4,4,4,5], filterTag:"Coast" },
  { tag:"08", slug:"photo", title:"Photography", kicker:"Right light", lead:"Guides, hides, and the right hours.", blurb:"Built with two former National Geographic guides — golden-hour vehicle setups, custom hides, full-frame days, and a backup hard-drive workflow at base camp.", region:"Mara · Samburu · Lamu", days:"6–10 nights", from:"from $980 / night", img:["https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop"], highlights:["Specialist photo guides","Custom mounts + bean bags","Drive-up hides","On-site editing suite"], stays:["Mara Plains Camp","Saruni Samburu","Lamu House"], season:[3,3,2,2,2,3,5,5,5,4,3,3], filterTag:"Wild" },
];

export type DetailCopy = {
  parent: string; intro: string; why: string;
  bestMonths: string; groupSize: string; pace: string; altitude: string;
  sampleDay: { t: string; title: string; note: string }[];
  practical: [string, string][];
  pack: string[];
  honest: [string, string][];
  quotes: { who: string; body: string }[];
  lodges: { name: string; region: string; note: string; img: string }[];
  gallery: string[];
  relatedSlugs: string[];
};

export const DETAIL_COPY: Record<string, DetailCopy> = {
  safari: {
    parent: "Wild Kenya",
    intro: "Kenya invented the modern safari — and most of what passes for one now is still drawn from its template. We don't send anyone to the chain camps with 80 vehicles fighting for the same lion. We send you to private conservancies, to camps that move with the herds, to guides who grew up tracking these animals.",
    why: "A real safari in Kenya is quieter than you think. It's the slow drive, not the lion sighting. It's the long lunch under the acacia, the silence at the sundowner, the second cup of coffee at 5:30am because the day belongs to you. We choose camps that protect that — small, owner-run, deep inside conservancies where the rules tilt toward wildness, not tourism.",
    bestMonths: "Jul – Oct", groupSize: "2 – 8 travellers", pace: "Slow · 2 drives a day", altitude: "1,500 – 2,000m",
    sampleDay: [
      { t: "05:30", title: "Wake-up coffee", note: "Tray of coffee and rusks at your tent. Dawn breaks behind Olololo escarpment." },
      { t: "06:15", title: "Game drive", note: "Out before the light. Your guide reads tracks from last night. Cats are still moving." },
      { t: "09:30", title: "Bush breakfast", note: "Eggs cooked on a fire by the river. Tablecloth, real cutlery, no one for miles." },
      { t: "11:00", title: "Camp · siesta", note: "Back to base. A swim, a book, a nap. The bush gets loud at midday — we don't fight it." },
      { t: "13:00", title: "Long lunch", note: "Three courses under canvas. Guides at the table, talking through the morning." },
      { t: "16:00", title: "Second drive", note: "Out for the golden hours. This is when you'll see the things people come back for." },
      { t: "18:45", title: "Sundowner", note: "Gin and tonic on a kopje. The plains turn copper. The radio goes quiet." },
      { t: "20:00", title: "Dinner under stars", note: "Lanterns, a long table, the night sounds. Then escorted back to your tent." },
    ],
    practical: [["Visa","eVisa online · 72h"],["Vaccine","Yellow fever cert."],["Currency","USD · KES on arrival"],["Plug","Type G · UK style"],["Connectivity","Spotty by design"],["Tipping","Built into your plan"]],
    pack: ["Neutral khakis, greens, browns — no white, no bright blue","A warm fleece for dawn drives — yes, even at the equator","Closed shoes for walking safaris","A real camera, 200mm+ if you have one","Headlamp · sunglasses · wide-brim hat","Leave the safari hat with the leopard print at home"],
    honest: [["You won't see everything","Sometimes the leopard is asleep. The guides won't fake it. The slow days are part of the deal."],["April–May is wet","It's also empty and green and half-price. We'll tell you if it's your move."],["The big migration is a window","Late July through early October — and even then, it's where the herds choose, not where the brochures promise."],["No, you don't tip in dollars at the bar","We brief you fully before you land. None of that 'figure it out' nonsense."]],
    quotes: [
      { who: "Anna & Tom · honeymoon · 2025", body: "Selin moved us between three camps and we never saw a transfer in our lives. The Mara was a dream. Lamu finished us." },
      { who: "Karim family · 4 · 2025", body: "The first family trip where my kids were never bored and I never carried a single bag. The pediatrician on call thing is not a gimmick." },
      { who: "Maya · photographer · 2024", body: "The hides at Ol Pejeta and the photo guide in the Mara were the difference between a portfolio and a holiday." },
    ],
    lodges: [
      { name:"Angama Mara", region:"Mara Triangle · Mara", note:"Glass-fronted tents over the Oloololo escarpment. Slightly impossible views.", img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop" },
      { name:"Sirikoi", region:"Lewa Conservancy · Laikipia", note:"Founder-run, four cottages. Walking, riding, and rhinos behind the fence line.", img:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80&auto=format&fit=crop" },
      { name:"Sala's Camp", region:"Sand River · Mara", note:"Migration crossing point. Six tents, a long lunch table, no Wi-Fi by design.", img:"https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop" },
      { name:"Saruni Samburu", region:"Kalama Conservancy · Samburu", note:"Six lodges on a rocky kopje. Lions below, eagles above, near nobody.", img:"https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop" },
      { name:"Tortilis Camp", region:"Amboseli", note:"Kilimanjaro framed in the dining tent. Elephants pass at breakfast.", img:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80&auto=format&fit=crop" },
      { name:"Mara Plains Camp", region:"Olare Motorogi · Mara", note:"Seven tents on raised decks. Specialist photo vehicles standard.", img:"https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=80&auto=format&fit=crop" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80&auto=format&fit=crop",
    ],
    relatedSlugs: ["honeymoon","photo","family","wellness"],
  },
};

export type JournalEntry = {
  n: string; kicker: string; title: string; excerpt: string;
  read: string; author: string; date: string; img: string; accent: string;
};

export const JOURNAL_ENTRIES: JournalEntry[] = [
  { n:"01", kicker:"Field notes", title:"Three quiet cafés in Nairobi worth a morning", excerpt:"A founder's apartment-turned-roastery in Lavington, a courtyard in Karen with the best Eggs Selin, and a corner bakery in Kilimani where everyone eventually shows up.", read:"4 min", author:"Selin Tapıcı", date:"Mar · 2026", img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop", accent:"red" },
  { n:"02", kicker:"Guide", title:"The boutique stays we send our closest friends to", excerpt:"Twelve houses, camps, and rooms we'd put our own family in. Some you can book direct. Some you can't — that's the whole point of the concierge.", read:"8 min", author:"Selin Tapıcı", date:"Feb · 2026", img:"https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=900&q=80&auto=format&fit=crop", accent:"green" },
  { n:"03", kicker:"Safety", title:"What women travelers actually need to know about Kenya", excerpt:"Practical, plain, no scare-quotes. Where to walk alone after dark, where not to, what to wear in Lamu Old Town, and the WhatsApp numbers we keep on speed dial.", read:"11 min", author:"Wanjiku Mwangi", date:"Feb · 2026", img:"https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=80&auto=format&fit=crop", accent:"black" },
  { n:"04", kicker:"Versus", title:"Diani or Watamu — choosing your stretch of coast", excerpt:"Honeymooners ask us this every week. We did the homework: tide times, kid-friendliness, where you can walk to dinner, where you'd better book the driver.", read:"6 min", author:"Hassan Ali", date:"Jan · 2026", img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop", accent:"red" },
  { n:"05", kicker:"Field notes", title:"A weekend in Iten — running where the world's fastest run", excerpt:"2,400m, red dirt tracks at dawn, 24 Kenyans you've never heard of who could win the Vienna marathon. A two-day visit, slowly.", read:"7 min", author:"Tom O'Neill", date:"Jan · 2026", img:"https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=900", accent:"green" },
  { n:"06", kicker:"Guide", title:"Single-mother safari — how we plan it", excerpt:"The hidden tax of solo travel with kids isn't money — it's logistics. Here's the framework we use to make it feel like a real holiday, not a project.", read:"9 min", author:"Selin Tapıcı", date:"Dec · 2025", img:"https://images.pexels.com/photos/35648217/pexels-photo-35648217.jpeg?auto=compress&cs=tinysrgb&w=900", accent:"sand" },
  { n:"07", kicker:"Conversation", title:"Letter from a Maasai guide — twenty years on the plains", excerpt:"James has tracked the same prides through three generations. We sat with him under a fig tree for an afternoon and asked what the bush is teaching him now.", read:"12 min", author:"James ole Kimani", date:"Dec · 2025", img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop", accent:"black" },
  { n:"08", kicker:"Versus", title:"Mara conservancies, ranked the way we'd actually pick", excerpt:"Olare Motorogi vs Naboisho vs Mara North vs Mara Triangle. Vehicle rules, density, off-road, walking allowed, the lot. The cheat-sheet we keep on our desk.", read:"9 min", author:"Selin Tapıcı", date:"Nov · 2025", img:"https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=80&auto=format&fit=crop", accent:"red" },
  { n:"09", kicker:"Field notes", title:"The dhow boys of Lamu — sunset is at six", excerpt:"How the boats are crewed, how the sails are tied, what to tip, and why the best ones now book up four days out. Plus the captain we always call first.", read:"5 min", author:"Hassan Ali", date:"Nov · 2025", img:"https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=80&auto=format&fit=crop", accent:"green" },
  { n:"10", kicker:"Guide", title:"What it costs · a real Kenya budget, line by line", excerpt:"We tear apart three of our recent itineraries — $9k, $18k, $42k — and show you exactly where the money went. No fluff, no marketing rounding.", read:"10 min", author:"Selin Tapıcı", date:"Oct · 2025", img:"https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80&auto=format&fit=crop", accent:"black" },
  { n:"11", kicker:"Safety", title:"Driving in Kenya — when to, when not to, and why we usually do it for you", excerpt:"Self-drive vs hired driver vs scheduled flights. The honest cost-of-time and cost-of-stress breakdown, with the one stretch of road we still drive ourselves.", read:"7 min", author:"Tom O'Neill", date:"Oct · 2025", img:"https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=900&q=80&auto=format&fit=crop", accent:"sand" },
  { n:"12", kicker:"Conversation", title:"On AI and the soft edges of a journey — a note from Selin", excerpt:"We use AI for the smart logistics. Never for the calls that matter. Why the soul of the trip has to stay human, and what that actually looks like on day three.", read:"6 min", author:"Selin Tapıcı", date:"Sep · 2025", img:"https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80&auto=format&fit=crop", accent:"red" },
];

export const JOURNAL_FILTERS = ["Latest", "Guides", "Field notes", "Versus", "Safety", "Conversation"];
export const EXPERIENCE_FILTERS = ["All", "Wild", "Coast", "Wellness", "Romance", "With Kids", "Long-stay"];
export const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
