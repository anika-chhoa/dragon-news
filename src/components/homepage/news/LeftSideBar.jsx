import Link from "next/link";

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
      <p className="text-xl font-bold my-4">All Categories</p>
      <div>
        <ul>
          {categories.news_category.map((category) => {
            return (
              <li
                key={category.category_id}
                className={`${activeId===category.category_id && "bg-slate-100 font-bold"} text-gray-500 my-2 text-lg rounded-md`}
              >
                <Link href={`/category/${category.category_id}`} className="block py-2 px-4">{category.category_name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
