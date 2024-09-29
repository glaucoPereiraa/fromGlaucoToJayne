import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import GiftGrid from "@/components/GiftGrid";

export default function RomanticPage() {
  return (
    <div className="romantic-page">
      <NavBar/>
      <main className="main-content">
        <GiftGrid/>
        <Footer/>
      </main>
      <footer className="footer">
        <p>© 2024 Nosso Lindo Romance</p>
      </footer>
    </div>
  );
};

