export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  images?: string[];
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 2,
    title: "MiESG, SASEF and Han Rainforest Deliver CSR Programme for AmanahRaya-Kenedix",
    date: "2026-06-06",
    excerpt: "A collaborative CSR programme at Rimba Park Resort brought corporate participants into hands-on environmental conservation and community engagement activities.",
    content: `RIMBA PARK RESORT, TAMAN NEGARA, 6 June 2026 — The Malaysia Institute of ESG (MiESG), Sultan Ahmad Shah Environmental Foundation (SASEF) and Han Rainforest Sdn Bhd partnered to organise a corporate social responsibility programme for AmanahRaya-Kenedix REIT Manager Sdn Bhd at Rimba Park Resort.

Set against the rainforest landscape of Taman Negara, the programme brought participants beyond conventional corporate sustainability discussions and into direct environmental and community action. The collaboration combined ESG awareness, conservation stewardship and local programme delivery in an immersive natural setting.

A central component of the programme was the planting of 100 citrus fruit trees at Rimba Park Resort. The activity was designed to contribute to a greener landscape while giving participants a practical role in supporting longer-term environmental restoration.

The wider CSR programme also incorporated the release of 2,000 jelawat fish, a communal cooking and lunch activity involving 50 members of the Kampung Pagi community, and a gotong-royong initiative to clean the Kampung Pagi Muslim cemetery.

Community support continued through the contribution of practical maintenance equipment, comprising two grass cutters, 10 parang and two wheelbarrows. The donations were intended to support ongoing village upkeep beyond the duration of the programme.

Participants received certificates recognising their involvement in the initiative. The presentation marked the completion of a programme that connected corporate participation with measurable environmental and social activities on the ground.

The partnership reflects MiESG's commitment to translating Environmental, Social and Governance principles into practical experiences. By working alongside SASEF and Han Rainforest, the institute aims to demonstrate how corporate CSR programmes can support conservation, strengthen community relationships and encourage responsible engagement with Malaysia's natural heritage.

Rimba Park Resort provided a fitting setting for the initiative, offering participating organisations a direct connection to the rainforest environment and nearby communities. The programme also highlighted the potential for nature-based destinations to serve as platforms for meaningful corporate sustainability action, experiential learning and long-term partnerships.`,
    image: "/updates/amanahraya-csr/cover.jpg",
    images: [
      "/updates/amanahraya-csr/cover.jpg",
      "/updates/amanahraya-csr/group.jpg"
    ]
  },
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
