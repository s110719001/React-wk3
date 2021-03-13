import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import Nav_bar from "../components/Nav_bar"

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <Nav_bar></Nav_bar>
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
