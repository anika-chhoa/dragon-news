import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getAllCategoriesData, getAllNewsCategoriesById } from "@/lib/data";



const NewsCategoryById = async ({ params }) => {
  const { id } = await params;
  const categories = await getAllCategoriesData();
  const news = await getAllNewsCategoriesById(id);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6 space-y-2">
        <p className="text-xl font-bold my-4">News By Category</p>
        {news.length > 0 ? (
          news.map((n) => {
            return <div key={n._id}>{n.title}</div>;
          })
        ) : (
          <h1 className="text-3xl font-bold my-20 text-center">
            No News Found
          </h1>
        )}
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryById;
