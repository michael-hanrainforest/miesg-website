export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Inaugural Asia Offroad Expo and Convention (AOX 2026) Takes Off",
    date: "2026-04-28",
    excerpt: "The Asia Offroad Expo & Convention 2026 officially launches, positioning Malaysia as the regional hub for adventure tourism.",
    content: `KUALA LUMPUR, 28 April — The inaugural Asia Offroad Expo and Convention (AOX 2026) was officially launched today, setting the stage for a landmark event that aims to bring together industry leaders, top experts, and adventure tourism enthusiasts from across the region.

The convention, which aims to become a staple in the adventure tourism calendar, will showcase the latest advancements in 4x4 engineering, sustainable off-roading practices, and ecotourism integration.

The launch event highlighted the enormous potential within the adventure tourism sector. In line with the Ministry of Tourism, Arts and Culture's (MOTAC) recent remarks urging operators to double their efforts to lure high-quality tourists, speakers emphasized the critical need to embed structural Environmental, Social, and Governance (ESG) frameworks into adventure activities.

This strategic approach ensures the preservation of the natural environment while simultaneously generating an equitable tourism economy. Through initiatives like AOX 2026, Malaysia is strategically stepping up to strengthen its position as a premier, sustainable adventure tourism hub for the wider region.

Event organizers signaled that AOX 2026 will serve as a prominent stage to spotlight innovations that respect ecological limitations. With increasing numbers of global tourists actively seeking quality, nature-based experiences, AOX acts as a timely intervention—ensuring that off-roading and ecotourism growth proceeds sustainably and responsibly.

The Malaysia Institute of ESG (MiESG) continues its commitment by partnering with key ecosystem players at events like AOX 2026. The institute strongly advocates for long-term ecological conservation to be pursued alongside robust recreational and economic development.`,
    image: "https://drive.google.com/file/d/1vOgNoTZ-40JIf37PsG1FqjF_beBYr-Bn/view?usp=sharing"
  }
];
