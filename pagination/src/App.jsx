import { useState } from "react";
import PostItem from "./PostItem";
import posts from "./posts";

// 9 Posts per page
const PAGES_SIZE = 9;

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  // Generage posts -> 9 items per page
  const postitems = posts
    .slice(pageIndex * PAGES_SIZE, PAGES_SIZE * (pageIndex + 1))
    .map((post, index) => <PostItem key={index} post={post} />);

  // Dynamic Generate Buttons per Page
  const numPages = Math.ceil(posts.length / PAGES_SIZE);
  const generateBtn = [...Array(numPages)].map((_, index) => (
    <button
      onClick={() => setPageIndex(index)}
      className=" w-6 h-8 m-2 bg-violet-600 text-white rounded-sm"
      key={index}
    >
      {index + 1}
    </button>
  ));
  console.log(pageIndex);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-4xl flex flex-wrap justify-center">
        {postitems}
      </div>
      <div>{generateBtn}</div>
    </div>
  );
};
export default App;
