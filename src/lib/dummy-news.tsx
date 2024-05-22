export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

export const DUMMY_NEWS: NewsItem[] = [
  {
    id: 1,
    slug: "will-ai-replace-humans",
    title: "Will AI Replace Humans?",
    image: "ai-robot.jpg",
    date: "2021-07-01",
    content:
      "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
  },
  {
    id: 2,
    slug: "beaver-plague",
    title: "A Plague of Beavers",
    image: "beaver.jpg",
    date: "2022-05-01",
    content:
      "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
  },
  {
    id: 3,
    slug: "couple-cooking",
    title: "Spend more time together!",
    image: "couple-cooking.jpg",
    date: "2024-03-01",
    content:
      "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
  },
  {
    id: 4,
    slug: "hiking",
    title: "Hiking is the best!",
    image: "hiking.jpg",
    date: "2024-01-01",
    content:
      "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
  },
  {
    id: 5,
    slug: "landscape",
    title: "The beauty of landscape",
    image: "landscape.jpg",
    date: "2022-07-01",
    content:
      "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
  },
  {
    id: 6,
    slug: "green-energy-revolution",
    title: "The Green Energy Revolution",
    image: "green-energy.jpg",
    date: "2023-11-15",
    content:
      "The push for green energy has accelerated in the past few years. Governments and companies worldwide are investing heavily in renewable energy sources such as solar, wind, and hydroelectric power. This shift is crucial for reducing carbon emissions and combating climate change.",
  },
  {
    id: 7,
    slug: "mars-mission-success",
    title: "Mars Mission a Success",
    image: "mars-mission.jpg",
    date: "2021-09-23",
    content:
      "NASA's latest Mars mission has been deemed a success after the rover safely landed and began sending back high-quality images of the Martian surface. This mission marks a significant milestone in our quest to explore and potentially colonize Mars.",
  },
  {
    id: 8,
    slug: "smart-cities-2022",
    title: "The Rise of Smart Cities",
    image: "smart-city.jpg",
    date: "2022-02-18",
    content:
      "Smart cities are becoming more common as technology advances. These cities utilize data and technology to improve efficiency, reduce waste, and enhance the quality of life for their residents. Innovations include smart traffic management, energy-efficient buildings, and enhanced public services.",
  },
  {
    id: 9,
    slug: "ocean-cleanup-initiative",
    title: "Ocean Cleanup Initiative Launched",
    image: "ocean-cleanup.jpg",
    date: "2023-06-30",
    content:
      "A new initiative aimed at cleaning up the world's oceans has been launched. Using advanced technology, the project aims to remove plastic waste and other debris from the oceans, helping to protect marine life and ecosystems.",
  },
  {
    id: 10,
    slug: "virtual-reality-in-education",
    title: "Virtual Reality in Education",
    image: "vr-education.jpg",
    date: "2021-12-10",
    content:
      "Virtual reality is transforming the education sector. VR provides immersive learning experiences, allowing students to explore new environments and interact with complex subjects in a hands-on manner. This technology is expected to become more prevalent in classrooms around the world.",
  },
];
