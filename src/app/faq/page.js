import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function RomanticPage() {
  return (
    <div className="romantic-page">
        <NavBar/>
        <main className="main-content">
            <section className="about-section">
                <h2>Perguntas Frequentes (FAQ)</h2>

                <h3>1. Como vocês se conheceram?</h3>
                <p>Nos conhecemos através do Tinder, uma plataforma de relacionamentos online.</p>

                <h3>2. Qual foi o primeiro encontro?</h3>
                <p>Nosso primeiro encontro foi no bar Los Hermanos, onde compartilhamos momentos especiais juntos.</p>

                <h3>3. Quais são os interesses comuns entre vocês?</h3>
                <p>Nós gostamos de assistir séries, conversar sobre diversos assuntos interessantes e brincar um com o outro.</p>

                <h3>4. Vocês têm planos de viajar juntos?</h3>
                <p>Ainda não tivemos a oportunidade de viajar juntos, mas compartilhamos o desejo de explorar o mundo juntos no futuro.</p>

                <h3>5. Como vocês lidam com desafios no relacionamento?</h3>
                <p>Nós mantemos uma comunicação aberta e honesta, procurando sempre entender e apoiar um ao outro em todos os momentos.</p>
            </section>
            <Footer/>
        </main>
        <footer className="footer">
            <p>© 2024 Nosso Lindo Romance</p>
        </footer>
    </div>
  );
};

