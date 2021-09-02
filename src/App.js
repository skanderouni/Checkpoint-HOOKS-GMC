import "./App.css";
import Moviecard from "./Component/movieCards/movieCard";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Moviecard />
      <Footer />
    </div>
  );
}

export default App;
