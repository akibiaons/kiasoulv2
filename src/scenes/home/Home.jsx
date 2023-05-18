import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
    </div>
  );
};

export default Home;
