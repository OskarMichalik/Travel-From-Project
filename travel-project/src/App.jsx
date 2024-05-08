import TravelInfoContext from "./store/travelInfoContext";
import classes from "./App.module.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <TravelInfoContext>
      <Header />
      <div className={classes.app}>
        <Banner />
      </div>
      <Main />
      <Footer />
    </TravelInfoContext>
  );
}
