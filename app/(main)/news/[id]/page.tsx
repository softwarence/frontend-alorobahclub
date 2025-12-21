import Image from "next/image";
import LatestNewsSection from "./../../../../components/home/LatestNewsSection";
/* -------------------------
   STATIC FAKE DATA
-------------------------- */

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "Al-Ittihad Launches “Moments in Gold” to Celebrate Back-to-Back Asian Glory",
    image: "/assets/news/img1.svg",
    date: "December 18, 2025",
    blocks: [
      {
        title: "Overview",
        content: `Al-Ittihad Club Company proudly announces the official launch of the Back-to-Back campaign under the new heritage-driven initiative, “Moments in Gold.” This initiative celebrates the club’s rich legacy and its historic achievement of winning the AFC Champions League title twice consecutively, in 2004 and 2005. It serves as a tribute to the players, staff, and fans who paved the way for continental dominance. This project is not just a look back, but a foundational step toward the future of the club's brand identity on the global stage.`,
      },
      {
        title: "Historical Significance",
        content: `This launch marks a new chapter in the club’s ongoing evolution, one rooted in honoring its golden history and reinforcing its prestigious standing as the undisputed king of Asia. The campaign is designed to bridge the gap between the legends of the past and the rising stars of today, ensuring that the spirit of 2004 and 2005 lives on in every match played at the King Abdullah Sports City. By immortalizing these victories, the club aims to inspire a new generation of youth academy players to reach the same heights of international excellence.`,
      },
      {
        title: "Documentary Narrative",
        content: `The Back-to-Back campaign presents a comprehensive documentary narrative showcasing Al-Ittihad’s remarkable journey to securing consecutive Asian titles, featuring archival footage, exclusive interviews, and behind-the-scenes moments never seen before. From the dramatic comeback in Seongnam to the defensive masterclass in the finals, every heartbeat of those championship runs is captured. Fans will gain access to locker-room speeches and tactical breakdowns from the coaches who engineered the most successful era in Saudi club football history.`,
      },
      {
        title: "Special Offer",
        content: `Customers attending the Al-Ittihad vs Nasaf match on 23 December can redeem complimentary premium-category tickets when purchasing SAR 250 or more from official stores. To benefit, use promo code MATCH. Purchase must be in a single invoice. Tickets are non-transferable and non-resalable. This limited-time promotion is designed to pack the stadium and recreate the legendary atmosphere of the early 2000s, providing a "Golden" experience for every loyal supporter.`,
      },
    ],
  },
  {
    id: 2,
    title: "Terms and Conditions: Al-Ittihad X Nasaf Match Promotional Offer",
    image: "/assets/news/img2.svg",
    date: "December 16, 2025",
    blocks: [
      {
        title: "Offer Description",
        content: `The Official Al-Ittihad Store offers an exclusive promotional deal where customers receive two complimentary Premium-category tickets for the Al-Ittihad vs. Nasaf Qarshi match scheduled for 23 December. This is applicable only upon completing a single purchase with a minimum value of SAR 250 across any product category, including the new heritage collection. This offer is part of the club's strategic effort to reward loyal fans during the high-stakes Asian Champions League Elite campaign.`,
      },
      {
        title: "Offer Validity",
        content: `The offer is valid from 16 December until 23 December, or until the allocated ticket stock is exhausted. It applies to all purchases made through the official online store and physical Al-Ittihad Club outlets. Note that the offer will be suspended automatically once tickets are sold out without prior notice. We encourage fans to act early as the demand for the "Moments in Gold" merchandise has already led to record-breaking foot traffic in our flagship locations.`,
      },
      {
        title: "Redemption Process",
        content: `To successfully redeem the offer, the promotional code MATCH must be manually applied during the digital checkout process. For in-store purchases, the discount is applied at the point of sale. The email address used for the store purchase must be identical to the one registered on the Webook platform to ensure seamless ticket delivery to your digital wallet. Split invoices or combined multiple invoices from different days do not qualify for this specific promotion.`,
      },
      {
        title: "Return & Exchange Policy",
        content: `Regarding returns: Exchanges or returns are strictly not accepted for orders completed under this promotional offer to prevent abuse of the ticketing system. If an exceptional return is authorized by management, the complimentary tickets will be immediately canceled in the Webook system, or their full market value will be deducted from the final refund amount issued to the customer. All sales under this campaign are considered final.`,
      },
    ],
  },
  {
    id: 3,
    title: "Nature-Friendly Architecture Inspires New Urban Living Standards",
    image: "/assets/news/img3.svg",
    date: "November 25, 2025",
    blocks: [
      {
        title: "The Biophilic Revolution",
        content: `Architects are increasingly integrating nature into urban architecture, combining greenery, natural light, and sustainable materials to create healthier living environments. This shift is driven by a global demand for "Biophilic Design," which suggests that humans have an innate connection to nature that must be nurtured even in concrete jungles. By incorporating living walls and water features into high-rise buildings, designers are reducing the "heat island" effect that plagues modern metropolises.`,
      },
      {
        title: "Sustainable Cooling & Energy",
        content: `Vertical gardens and rooftop farms are no longer just aesthetic choices; they are functional components of modern cooling systems. By utilizing natural ventilation and solar-reflective glass, new residential skyscrapers in Riyadh and Dubai are reducing energy consumption by up to 40% compared to traditional builds. These buildings act as carbon sinks, absorbing pollutants and releasing oxygen, effectively cleaning the air for the residents and the surrounding neighborhood.`,
      },
      {
        title: "Eco-Conscious Materials",
        content: `This movement also prioritizes a reduced carbon footprint through the selection of raw materials. Builders are moving away from standard high-emission concrete toward "Green Cement" and cross-laminated timber (CLT). These materials not only sequester carbon but also provide a warmer, more organic feel to high-density apartment complexes, proving that sustainability does not have to come at the cost of modern luxury or structural integrity.`,
      },
      {
        title: "Community Well-being",
        content: `Community spaces, water features, and pedestrian-friendly layouts enhance both social interaction and well-being. By removing cars from the immediate vicinity of living quarters and replacing them with winding garden paths and cycling tracks, developers are reporting significantly higher resident satisfaction. The focus is on creating "15-minute cities" where nature is never more than a short walk from the front door, fostering a sense of peace in a fast-paced world.`,
      },
    ],
  },
  {
    id: 4,
    title: "The Ultimate Guide to Minimalist Living Room Setup in 2025",
    image: "/assets/news/img4.svg",
    date: "November 15, 2025",
    blocks: [
      {
        title: "The Philosophy of Less",
        content: `Minimalist living rooms are trending globally, focusing on decluttered spaces, functional furniture, and neutral color palettes. The philosophy is simple: "Less is More." By removing unnecessary distractions, the living room becomes a sanctuary for relaxation and high-quality conversation rather than a storage space for gadgets. This approach emphasizes the quality of items over quantity, encouraging homeowners to invest in pieces that have both aesthetic value and long-term durability.`,
      },
      {
        title: "Textures and Tones",
        content: `Designers recommend natural textures like linen, light wood, and simple geometric shapes to create a calm environment. A single statement piece—such as a large modular sofa or a handcrafted wooden coffee table—often serves as the room's anchor. Neutral tones like oatmeal, soft grey, and sage green are used to reflect natural light, making even small apartments feel like expansive, open-plan villas.`,
      },
      {
        title: "Lighting as Art",
        content: `Accent lighting and strategically placed greenery can enhance the feeling of spaciousness. Instead of harsh overhead lights, designers are opting for floor lamps with warm hues and hidden LED strips that highlight architectural lines. This creates depth and mood without adding physical clutter. The use of "smart lighting" allows the room to transition from a bright, energetic morning space to a soft, relaxing evening lounge at the touch of a button.`,
      },
      {
        title: "Smart Storage",
        content: `Smart storage solutions help maintain minimalism without sacrificing convenience. Hidden cabinets integrated into wall paneling and multipurpose furniture—like ottomans with internal storage—ensure that daily essentials are reachable but invisible to the naked eye. The goal is to create a "visual silence" where the mind can rest without being bombarded by the visual noise of disorganized belongings.`,
      },
    ],
  },
  {
    id: 5,
    title: "Elegant Bedroom Inspiration for Modern Homes: A Deep Dive",
    image: "/assets/news/img5.svg",
    date: "October 30, 2025",
    blocks: [
      {
        title: "Warm Minimalism",
        content: `Modern bedrooms are embracing a mix of luxury and simplicity. The current trend moves away from the cold "all-white" look toward "Warm Minimalism," which uses beige, taupe, and terracotta tones to create a sense of security and warmth. This style relies on the play of light and shadow rather than bold patterns, ensuring that the bedroom remains a timeless space that evolves with the owner's tastes.`,
      },
      {
        title: "The Power of the Headboard",
        content: `Statement headboards have made a massive comeback in high-end interior design. Large, upholstered panels that span the entire width of the wall are being used to provide acoustic insulation and a sense of grandeur. These are often paired with layered bedding featuring high-thread-count Egyptian cotton and silk throws to create a hotel-like experience that prioritizes physical comfort and restorative sleep.`,
      },
      {
        title: "Healthy Living Environments",
        content: `Sustainable furniture and eco-friendly decor are increasingly popular. Many homeowners are now looking for "Zero-VOC" paints and sustainably sourced timber frames to ensure their sleeping environment is free from harmful off-gassing chemicals. By choosing organic mattresses and natural fiber rugs, the modern bedroom becomes a holistic health center focused on detoxifying the body during the night.`,
      },
      {
        title: "Personal Sanctuaries",
        content: `Incorporating personal artwork and curated accessories helps transform bedrooms into relaxing retreats. Small reading nooks with a single high-quality ergonomic chair and a small built-in bookshelf are becoming a standard feature in master suites. These "tech-free zones" encourage residents to engage in mindfulness or reading before bed, significantly improving sleep quality and mental clarity.`,
      },
    ],
  },
  {
    id: 6,
    title: "Creative Workspace Ideas to Boost Productivity and Focus",
    image: "/assets/news/img6.svg",
    date: "October 15, 2025",
    blocks: [
      {
        title: "The Hybrid Evolution",
        content: `The modern workspace is undergoing a revolution. As hybrid work becomes the global standard, the focus has shifted toward flexibility and ergonomic health. A productive workspace now requires more than just a desk and a chair; it requires an environment that stimulates the mind while supporting the body's natural posture. Employers are now investing in "Home Office Stipends" to ensure their remote teams have professional-grade equipment.`,
      },
      {
        title: "Ergonomics and Flow",
        content: `Collaborative zones and standing desks are essential in 2025. Research shows that alternating between sitting and standing throughout the day increases blood flow and cognitive function, preventing the "afternoon slump." Adjustable lighting—shifting from cool blue light in the morning to stimulate focus to warm amber in the afternoon to reduce eye strain—helps regulate the worker's circadian rhythms and overall energy levels.`,
      },
      {
        title: "Biophilic Productivity",
        content: `Indoor plants and vibrant wall art contribute to a motivating environment. "Green offices" are scientifically proven to reduce stress levels by up to 15% and increase creative output. Personalizing the desk setup with meaningful items helps employees feel a sense of ownership. Integrating nature through small desk fountains or terrariums provides a visual break from the screen, allowing for "micro-meditations" during the workday.`,
      },
      {
        title: "Digital Integration",
        content: `Tech integration is the backbone of the creative workspace. Wireless charging pads integrated directly into desk surfaces, smart monitors that adjust brightness based on ambient light, and high-quality noise-canceling acoustics are no longer luxuries; they are necessities for deep work. The use of cable-management systems ensures that the workspace remains visually clean, which directly correlates to a more organized and focused mind.`,
      },
    ],
  },
  {
    id: 7,
    title: "Innovative Kitchen Designs: The Future of the Home Chef",
    image: "/assets/news/img7.svg",
    date: "September 28, 2025",
    blocks: [
      {
        title: "The Zoning Method",
        content: `Home kitchens are becoming smarter and more stylish. The "Work Triangle" of the past (Fridge, Sink, Stove) is being replaced by "Activity Zones"—dedicated areas for prep, cooking, cleaning, and socializing. This allows multiple people to use the kitchen simultaneously without collision. Modern kitchens now often feature two dishwashers and oversized prep sinks to accommodate the needs of serious home gourmets and large families.`,
      },
      {
        title: "Hidden Technology",
        content: `Integrated storage and minimalist countertops are the hallmarks of modern design. Hidden "appliance garages" allow heavy mixers and toasters to be tucked away, keeping the surfaces clear for food presentation. Multipurpose islands now feature built-in induction hobs that are invisible when not in use, and wine coolers that are seamlessly integrated into the cabinetry, maintaining a sleek, furniture-like appearance.`,
      },
      {
        title: "Durability Meets Style",
        content: `Sustainable materials like bamboo, recycled metals, and engineered stone are preferred for their durability and low environmental impact. These materials are non-porous and easy to clean, making them ideal for high-traffic kitchens where hygiene is a top priority. Innovative surfaces are now "self-healing," meaning small scratches in the laminate can be repaired with simple heat application, ensuring the kitchen looks new for decades.`,
      },
      {
        title: "Atmospheric Lighting",
        content: `Lighting plays a major role in the modern kitchen. Task lighting under cabinets ensures precision and safety during food prep, while dimmable pendant lights over the island transition the space from a high-energy cooking zone to an intimate dining area. Smart sensors now adjust the lighting based on the time of day, providing soft "pathway" lighting during late-night visits to the kitchen without the need to flip a switch.`,
      },
    ],
  },
  {
    id: 8,
    title: "Outdoor Spaces and Garden Trends: Living Beyond the Walls",
    image: "/assets/news/img8.svg",
    date: "September 10, 2025",
    blocks: [
      {
        title: "The Seamless Transition",
        content: `Outdoor living spaces are gaining massive popularity as homeowners seek to expand their footprint without the cost of a full home extension. The garden is no longer just for plants; it is an outdoor living room, kitchen, and cinema. This trend emphasizes a seamless transition, using large sliding glass walls and consistent flooring materials to make the patio feel like a direct continuation of the indoor lounge.`,
      },
      {
        title: "Social Fire and Water",
        content: `Vertical gardens and fire pits are the most requested features of the year. Fire pits provide a natural focal point for social gatherings, extending the usability of the garden into the cooler winter months. Meanwhile, water features—from simple fountains to "natural swimming ponds"—provide white noise that masks city traffic and creates a tranquil atmosphere for meditation and relaxation.`,
      },
      {
        title: "Native Landscaping",
        content: `Eco-friendly landscaping using native plants is a major focus for 2025. By choosing plants that are naturally adapted to the local climate, homeowners can drastically reduce their water consumption and eliminate the need for chemical fertilizers. This "rewilding" approach also promotes local biodiversity, attracting birds and beneficial insects that help the garden thrive naturally with minimal human intervention.`,
      },
      {
        title: "Outdoor Smart Home",
        content: `Smart irrigation systems and outdoor kitchens enhance functionality. Modern systems can now monitor soil moisture levels via smartphone apps and check weather forecasts to skip watering on rainy days. Professional-grade outdoor kitchens with built-in smokers, pizza ovens, and weather-proof refrigerators allow for high-end entertaining, making the backyard the preferred destination for every family celebration.`,
      },
    ],
  },
  {
    id: 9,
    title: "The Rise of Smart Cities: Technology Meeting Humanity",
    image: "/test-image/test1.jpg",
    date: "August 20, 2025",
    blocks: [
      {
        title: "Hyper-Connected Infrastructure",
        content: `Smart cities are moving beyond simple automation toward "Hyper-Connectivity." Using AI and IoT sensors, cities like NEOM and New Giza are optimizing traffic flow in real-time. By analyzing data from thousands of connected vehicles and street cameras, the city can adjust traffic light timings instantly, reducing commute times by up to 30% and significantly lowering carbon emissions from idling vehicles.`,
      },
      {
        title: "Efficient Resource Management",
        content: `Public safety and utility management are at the core of this transition. Smart grids can now predict power surges and redirect energy to hospitals and emergency services where it is needed most. Automated waste management systems notify collection crews only when bins are full, using optimized routes to save fuel. This data-driven approach ensures that city resources are never wasted on unnecessary labor or energy.`,
      },
      {
        title: "Human-Centric Tech",
        content: `Despite the heavy tech, the focus remains on the human experience. High-speed public Wi-Fi, interactive kiosks, and digital libraries are being integrated into public parks. The goal is to make technology invisible but omnipresent, serving the citizen's needs without being intrusive. Smart benches that charge phones via solar power and outdoor cooling misters that activate only when people are present are just two examples of this philosophy.`,
      },
      {
        title: "Data Sovereignty",
        content: `Future challenges include data privacy and cybersecurity. As cities become more reliant on digital infrastructure, protecting the personal data of millions becomes a top priority for governments. This has led to the creation of new "Digital Rights" frameworks, ensuring that while the city collects data to improve services, the individual's right to anonymity and security remains untouched.`,
      },
    ],
  },
  {
    id: 10,
    title: "Sustainable Fashion: Why 'Slow Fashion' is Winning the Market",
    image: "/test-image/test2.jpg",
    date: "August 05, 2025",
    blocks: [
      {
        title: "The Quality Over Quantity Shift",
        content: `The fashion industry is undergoing a massive shift as consumers reject "Fast Fashion" in favor of quality and ethics. "Slow Fashion" focuses on timeless designs and durable materials that are meant to last for years rather than weeks. This movement aims to reduce the millions of tons of textile waste that end up in landfills every year, encouraging a "buy once, wear forever" mentality among the youth.`,
      },
      {
        title: "Ethical Supply Chains",
        content: `Transparency in the supply chain has become a competitive advantage. Brands that can prove fair wages, safe working conditions, and the absence of child labor are seeing a surge in loyalty from Gen Z and Millennial shoppers. New blockchain technology allows customers to scan a QR code on a garment's tag to see exactly where the fabric was woven and who stitched the final piece.`,
      },
      {
        title: "Biotech Fabrics",
        content: `Innovative fabrics are replacing traditional polyester and cotton. Materials made from pineapple leaves (Piñatex), mushroom leather (Mylo), and recycled ocean plastics are hitting the mainstream. These alternatives often require significantly less water and land to produce than conventional fabrics and are often biodegradable, meaning the garment can return to the earth at the end of its long life.`,
      },
      {
        title: "The Circular Economy",
        content: `The "Circular Economy" is the final goal. Many high-end brands are launching their own resale platforms, allowing customers to trade in old garments for credit. By repairing, reselling, and eventually recycling old clothing into new fibers, the fashion industry is moving toward a closed-loop system where nothing is wasted and the environment is protected from the traditional "take-make-waste" model.`,
      },
    ],
  },
  {
    id: 11,
    title: "Artificial Intelligence in Healthcare: Saving Lives with Data",
    image: "/test-image/test3.jpg",
    date: "July 12, 2025",
    blocks: [
      {
        title: "Early Detection & Diagnostics",
        content: `AI is transforming healthcare from reactive to proactive. Machine learning algorithms can now analyze thousands of medical images—including MRIs, CT scans, and X-rays—in seconds. These systems identify early-stage tumors and cardiovascular anomalies with a higher accuracy rate than traditional radiology in specific cases, allowing doctors to begin treatment months earlier than previously possible.`,
      },
      {
        title: "Personalized Genomic Medicine",
        content: `Personalized medicine is the new frontier. By analyzing a patient's unique genetic profile alongside their lifestyle data and environmental factors, AI can suggest the most effective drug dosages and treatment plans. This "Precision Medicine" minimizes side effects and increases the likelihood of a successful recovery, particularly in complex fields like oncology and rare genetic disorders.`,
      },
      {
        title: "Robotic Surgical Assistance",
        content: `Robotic surgery assisted by AI allows for unprecedented precision in the operating room. Surgeons can now perform complex, life-saving procedures through tiny incisions. The AI filters out natural human hand tremors and providing real-time 3D mapping of the surgical site. This leads to significantly reduced blood loss, less pain, and faster healing times for patients, shortening hospital stays.`,
      },
      {
        title: "The AI-Human Partnership",
        content: `The challenge remains the "Human Touch." While AI can process vast amounts of data, it cannot provide the empathy and emotional support that a nurse or doctor offers. The future of healthcare is a partnership where AI handles the data-heavy diagnostics, freeing up human medical professionals to focus on the holistic and emotional well-being of their patients.`,
      },
    ],
  },
  {
    id: 12,
    title: "The Future of Travel: Space Tourism and Beyond",
    image: "/test-image/test1.jpg",
    date: "June 25, 2025",
    blocks: [
      {
        title: "Orbital Tourism",
        content: `Travel is no longer limited to the Earth's surface. With the successful launch of several commercial space stations, orbital tourism is becoming a reality for the ultra-wealthy. However, the technology developed for space—such as radiation shielding and life-support systems—is already trickling down to improve safety and comfort in commercial aviation here on Earth.`,
      },
      {
        title: "Hypersonic Point-to-Point",
        content: `Hypersonic travel is the next big leap. New aircraft designs aim to fly from London to New York in under two hours by traveling through the upper atmosphere at five times the speed of sound. These jets use "Scramjet" technology, which is more fuel-efficient at high speeds than traditional engines, potentially making ultra-long-haul travel as fast as a morning commute.`,
      },
      {
        title: "Green Aviation",
        content: `Sustainability is the primary concern for the travel industry. Electric planes for short-haul flights (under 500 miles) and sustainable aviation fuel (SAF) derived from waste oils for long-haul journeys are becoming more common. Airlines are under massive pressure to meet net-zero targets, leading to a golden age of innovation in aerodynamics and lightweight composite materials.`,
      },
      {
        title: "Digital Exploration",
        content: `Virtual Reality (VR) travel is also on the rise as a sustainable alternative. For those who cannot travel physically due to health or financial reasons, high-fidelity VR experiences offer the chance to explore the Amazon rainforest or the surface of Mars from their living room. These experiences are being used to promote global conservation awareness, showing people the beauty of the world they are trying to save.`,
      },
    ],
  },
  {
    id: 13,
    title: "The Evolution of E-Sports: From Hobbies to Olympic Recognition",
    image: "/test-image/test2.jpg",
    date: "May 15, 2025",
    blocks: [
      {
        title: "Mainstream Acceptance",
        content: `E-sports has officially graduated from a niche hobby to a global powerhouse. With viewership numbers rivaling traditional sports like basketball and baseball, major cities are building dedicated E-sports stadiums. These venues feature high-speed fiber-optic connections and immersive sound systems to host international tournaments where multi-million dollar prize pools are the standard.`,
      },
      {
        title: "Professional Athletic Regimes",
        content: `The training regimen of a professional gamer is now as rigorous as any Olympic athlete. It includes strict diets, physical fitness routines to prevent repetitive strain injuries, and mental coaching to handle the high-pressure environment of live broadcasts. Teams now employ full-time chefs, physiotherapists, and psychologists to ensure their players remain at peak performance throughout the long season.`,
      },
      {
        title: "Academic Recognition",
        content: `Educational institutions are taking notice. Many universities now offer E-sports scholarships and full degrees in E-sports management and broadcasting. This recognizes the massive ecosystem of marketing, event planning, and software development that supports the industry, providing a clear career path for students who are passionate about the digital sports world.`,
      },
      {
        title: "Immersive Spectator Tech",
        content: `The future of E-sports lies in Augmented Reality (AR) and Metaverse integration. Imagine watching a match where the game characters are projected onto the floor of your living room, or attending a live stadium event where AR glasses provide real-time stats and player "heat maps." This technology is making the spectator experience more interactive and personal than traditional sports broadcasting could ever be.`,
      },
    ],
  },
  {
    id: 14,
    title: "Mental Health in the Digital Age: Finding Balance",
    image: "/test-image/test3.jpg",
    date: "April 10, 2025",
    blocks: [
      {
        title: "The Digital Detox Movement",
        content: `As our lives become increasingly digital, the importance of mental health has taken center stage. "Digital Detox" retreats and apps that enforce screen-time limits are becoming mainstream. People are realizing the direct impact of constant notification-pings and social media comparison on anxiety and sleep patterns, leading to a surge in "offline" hobbies like gardening and pottery.`,
      },
      {
        title: "Corporate Wellness Culture",
        content: `Companies are now integrating mental health days and "Quiet Hours" into their corporate culture. Realizing that a burnt-out employee is an unproductive one, leaders are encouraging staff to disconnect completely after work hours. Some companies have even implemented software that prevents work emails from being sent or received during the weekend, protecting the employee's right to rest.`,
      },
      {
        title: "Teletherapy Accessibility",
        content: `Teletherapy has made mental health support more accessible than ever. People in remote areas or those with demanding schedules can now connect with licensed therapists via secure video calls from the comfort of their homes. This has been instrumental in breaking down the social stigma surrounding mental health, making seeking help as normal as going to the gym for a physical workout.`,
      },
      {
        title: "Authentic Human Connection",
        content: `The role of community remains vital for long-term happiness. While technology can connect us through a screen, it cannot replace the deep sense of belonging found in face-to-face interactions. Local social clubs, community sports teams, and volunteer groups are seeing a resurgence as people seek authentic human connection and a sense of purpose that transcends the digital world.`,
      },
    ],
  },
];
export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  blocks: {
    title: string;
    content: string;
  }[];
}

/* -------------------------
   PAGE COMPONENT
-------------------------- */
const SingleBlockPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const newsId = Number(id);
  const news = NEWS_DATA.find((item) => item.id === newsId) as NewsItem;

  return (
    <>
      <article className="w-full">
        {/* ---------- HERO IMAGE ---------- */}
        <div className="relative w-full h-[70vh] min-h-[400px]">
          <Image src={news.image} alt={news.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* ---------- TITLE BAR ---------- */}
        <div className="md:h-25 h-auto py-5 md:py-2 bg-[#e6e4e4af] flex items-center text-left">
          <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
            <p className="text-left md:text-2xl text-xl font-semibold">{news.title}</p>
          </div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 md:py-12 py-6">
          <header className="mb-10">
            <p className="text-sm text-gray-500 mb-2">{news.date}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {news.title}
            </h1>
          </header>

          {/* ---------- DYNAMIC BLOCKS WITH TITLES ---------- */}
          {news.blocks.map((block, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-xl font-semibold mb-4">{block.title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{block.content}</p>
            </section>
          ))}
        </div>
      </article>
      <LatestNewsSection></LatestNewsSection>
    </>
  );
};

export default SingleBlockPage;
