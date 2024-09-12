import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreedItem from "./pages/BreedsPage";
import Homepage from "./pages/Homepage";

const App = () => {
  const [themeColor, setThemeColor] = useState("cyan");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage themeColor={themeColor} setThemeColor={setThemeColor} />
          }
        />
        <Route
          path="/breeds"
          element={
            <BreedItem themeColor={themeColor} setThemeColor={setThemeColor} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
