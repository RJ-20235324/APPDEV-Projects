import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import KeyboardInformation from "./Components/Keyboard-Information";
import ArtisanKeyboards from "./Components/Artisan-Keycaps";
import ArtisanKeycapInformation from "./Components/Keycap-Information";
import Reviews from "./Components/Reviews";
import CompanyProfile from "./Components/Company-Profile";
import Developers from "./Components/Developers";
import Support from "./Components/Support";
import Footer from "./Components/Footer";
import { BasketProvider } from "./Components/BasketContext";
import BasketPage from "./Components/BasketPage";
import PageNotFound from "./Components/PageNotFound";
import ScrollToTop from "./Components/ScrollTop";
import Resume from "./Components/Resume";

function App() {
  // Define the function to trigger the cart animation
  const triggerCartAnimation = () => {
    const cartIcon = document.querySelector('.cart-icon'); // Make sure this matches the class of your cart icon
    if (cartIcon) {
      cartIcon.classList.add('cart-animation');
      setTimeout(() => {
        cartIcon.classList.remove('cart-animation');
      }, 1000); // Adjust duration as needed
    }
  };

  return (
    <>
      <BasketProvider>
        <Navbar />
        <ScrollToTop /> {/* Ensure scrolling to the top on route change */}
        <Routes>
          <Route path="/BasketPage" element={<BasketPage />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/Products"
            element={<Products triggerCartAnimation={triggerCartAnimation} />}
          />
          <Route
            path="/keyboard-Information/:id"
            element={<KeyboardInformation />}
          />
          <Route path="/ArtisanKeyboards" element={<ArtisanKeyboards />} />
          <Route
            path="/artisan-keycaps/:id"
            element={<ArtisanKeycapInformation />}
          />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/employees/:id" element={<Resume />} />
          <Route path="/Developer" element={<Developers />} />
          <Route path="/Support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BasketProvider>
    </>
  );
}

export default App;
