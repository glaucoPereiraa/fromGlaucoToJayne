import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer/CountdownTimer"
import GiftGrid from "@/components/GiftGrid";
import products from "./data/products";

export default function RomanticPage() {
  return (
    <div className="romantic-page">
      <NavBar/>
      <main className="main-content">
        <GiftGrid products={products} />
        <Footer/>
      </main>
      <footer className="footer">
        <p>© 2024 Nosso Lindo Romance</p>
      </footer>
    </div>
  );
};

