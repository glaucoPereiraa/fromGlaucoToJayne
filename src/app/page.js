import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function Home() {
//   function calcularTempoDecorrido() {
//   let hoje = new Date();

//   let dataInicial = new Date('2024-01-22');

//   let diferencaEmMilissegundos = hoje - dataInicial;

//   let segundos = Math.floor(diferencaEmMilissegundos / 1000);
//   let minutos = Math.floor(segundos / 60);
//   let horas = Math.floor(minutos / 60);
//   let dias = Math.floor(horas / 24);

//   horas = horas % 24;
//   minutos = minutos % 60;
//   segundos = segundos % 60;

//   document.getElementById('resultado').innerHTML = "Tempo decorrido desde 19/01/2024 até agora: " + dias + " dias, " + horas + ":" + minutos + ":" + segundos;
// }
//   calcularTempoDecorrido();

//   setInterval(calcularTempoDecorrido, 1000);
  return (
    <div className="romantic-page">
      <NavBar/>
      <header className="header">
        <h1>Uma historia de amor</h1>
      </header>
      <main className="main-content">
        <section className="about-section">
          <p>Uma história de amor que começou...</p>
        </section>
        <section className="gallery-section">
          <h2>Primeira Foto</h2>
          <div className="text-center">
            <img src="https://lh3.googleusercontent.com/pw/ABLVV85kcc2NDMUlPtwfE-5wkJSMocEJqdjLPS334Ct5n3GgSQy1J0z4Wnf00agbKLYzcwLWJvTeBYX53xSN8ySbo2olqv-KEmBsffEUFIXNukHfUqEqehzQDfLwJXuX4TL1uUBjhYftvPIFgUI2GHkeVwkV=w718-h957-s-no-gm?authuser=0"
              className="img-thumbnail rounded " 
              alt="..."
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
      </main>
      <footer className="footer">
        <p>© 2024 Meu Lindo Romance</p>
      </footer>
      <Footer/>
    </div>
  );
}
