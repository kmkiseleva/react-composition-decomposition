import "./App.css";
import NewsBlock from "./components/NewsBlock/NewsBlock";
import RatesBlock from "./components/RatesBlock/RatesBlock";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import SearchBarBlock from "./components/SearchBarBlock/SearchBarBlock";
import BannerBlock from "./components/BannerBlock/BannerBlock";
import WidgetsBlock from "./components/WidgetsBlock/WidgetsBlock";
import imgBanner from "./img/it_pic.jpg";
import imgMath from "./img/math.jpg";

function App() {
  return (
    <div className="container">
      <NewsBlock />
      <ServiceBlock img={imgMath} service="Math Tutoring Services of 2021" />
      <RatesBlock />
      <SearchBarBlock />
      <BannerBlock img={imgBanner} />
      <WidgetsBlock />
    </div>
  );
}

export default App;
