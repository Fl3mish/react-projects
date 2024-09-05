import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}
