import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="romantic-page">
      <NavBar/>
      <header className="header">
        <h1>Um Presente Especial para Jayne Dias Machado</h1>
      </header>
      <main className="main-content">
        <section className="about-section">
          <p>Jayne, este site é um presente especial que preparei com muito amor para você. Aqui, quero expressar todos os sentimentos e momentos especiais que compartilhamos juntos. É uma forma de mostrar o quanto nosso relacionamento é importante para mim e como cada momento ao seu lado é verdadeiramente especial.</p>
          <p>Explore este site para relembrar nossas aventuras, risadas e momentos de amor. Espero que goste desta pequena surpresa e que este seja mais um passo em nossa jornada juntos.</p>
          <p>Com todo o meu amor, Glauco Pereira Starling</p>
        </section>
        <section className="gallery-section">
          <h2>Primeira Foto</h2>
          <div className="text-center">
            <img src="https://lh3.googleusercontent.com/pw/ABLVV87toprLjLFQgwvAVD_R-uOW4YZ1yNoLJ3p6PcGDV7uBr37ITCb3U-P54XyLh5E50PRauETgts7y2up2ZDWYbFkpvTUP94YeMzVHtn9tWKU2DPGdW-ShzstMKR5Fyr5kqMOqIwRjSqei8rvpMw0kP47f=w737-h415-s-no-gm?authuser=0"
              className="img-thumbnail rounded " 
              alt="Que mulher maravilhosa..."
            ></img>
          </div>
        </section>
        <section className="poema-section">
            <div className="poem">
              <h2>O Tempo Do Amor</h2>  
              <p>
                Quando o amor verdadeiro é encontrado,<br />
                O tempo se torna um mero espectador,<br />
                Sem fronteiras ou limites a separar,<br />
                Nossos corações unidos a florescer.
              </p>

              <p>
                As estações podem mudar, os anos passar,<br />
                Mas o amor permanece, firme e constante,<br />
                Como um rio fluindo eternamente,<br />
                Nenhum obstáculo pode quebrar seu encanto.
              </p>

              <p>
                Com a bênção de Deus, nosso amor é abençoado,<br />
                Uma aliança divina, em Seu amor imerso,<br />
                Guiados por Sua luz, seguimos adiante,<br />
                Em um caminho de graça, onde o amor é universo.
              </p>

              <p>
                No relógio do universo, não há marcação,<br />
                Apenas o pulsar dos corações entrelaçados,<br />
                Cada batida uma promessa de eternidade,<br />
                Um laço que nunca pode ser desatado.
              </p>

              <p>Então, abraçados sob o manto do céu,<br />
              Desafiando as correntes do destino,<br />
              Nosso amor transcende o efêmero,<br />
              Para além do tempo, eternamente divino.</p>

              <p>Que este amor seja nossa estrela-guia,<br />
              Navegando pelos mares da eternidade,<br />
              Em um reino onde o tempo não é senhor,<br />
              Onde nosso amor brilha em sua plenitude.</p>

              <p>Com a bênção de Deus sobre nós, avançamos,<br />
              Em comunhão sagrada, nossa fé fortalecida,<br />
              Para vivermos este amor, em toda sua plenitude,<br />
              Em um eterno abraço, na luz de Sua guarida.</p>
            </div>
        </section>
        <Footer/>
      </main>
      <footer className="footer">
        <p>© 2024 Nosso Lindo Romance</p>
      </footer>
    </div>
  );
}
