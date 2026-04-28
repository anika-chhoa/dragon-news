import Marquee from "react-fast-marquee";
const news = [
  { id: 1, title: "Breaking News: Massive Flood Hits Northern Bangladesh" },
  { id: 2, title: "Breaking News: Global Oil Prices Surge Amid Tensions" },
  { id: 3, title: "Breaking News: New AI Innovation Shocks Tech Industry" },
  
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto bg-gray-100 flex justify-between py-4 px-2 gap-2">
      <button className="btn bg-pink-700 p-4 text-white font-bold">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n) => (
          <span key={n.id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
