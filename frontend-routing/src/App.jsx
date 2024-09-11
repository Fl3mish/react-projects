import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <div className="bg-black p-8 text-white flex justify-around">
          <Link to={"/"}>Home</Link>
          <Link to={"/one"}>One</Link>
          <Link to={"/two"}>Two</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-1 justify-center items-center bg-purple-700 text-4xl text-white">
                HOME
              </div>
            }
          />
          <Route path="/one" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
