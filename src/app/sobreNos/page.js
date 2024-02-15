import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function RomanticPage() {
  return (
    <div className="romantic-page">
      <NavBar/>
      <main className="main-content">
        <section className="about-section">
        <h2>Sobre Nós</h2>
          <p>
            Bem-vindo à nossa história de amor! Nosso caminho começou de uma maneira moderna e inesperada: através do Tinder. Foi lá que nossos olhares virtuais se encontraram pela primeira vez, e desde então, nossas vidas mudaram para sempre.
          </p>
          <p>
            Nosso primeiro encontro foi em um lugar especial chamado Los Hermanos, um bar aconchegante onde tivemos a oportunidade de nos conhecer pessoalmente. Desde esse momento, cada instante compartilhado entre nós se tornou significativo e especial, enchendo nossos corações de amor e felicidade.
          </p>
          <p>
            Descobrimos rapidamente que temos muito em comum. Nós dois adoramos assistir séries juntos, mergulhar em conversas profundas sobre diversos assuntos e desfrutar de momentos de brincadeira e diversão. Essa conexão profunda e recíproca nos permite apoiar um ao outro em todos os aspectos da vida, sempre buscando crescer e nos tornarmos as melhores versões de nós mesmos.
          </p>
          <p>
            Embora ainda não tenhamos tido a oportunidade de viajar juntos, compartilhamos o desejo de explorar o mundo e criar memórias inesquecíveis lado a lado. Enquanto isso, criamos nossos próprios momentos especiais, desde surpresas de aniversário até gestos românticos, sempre com muita risada e amor no coração.
          </p>
          <p>
            Assim como qualquer casal, enfrentamos nossos próprios desafios, mas nossa comunicação aberta e compreensão mútua nos ajudam a superá-los juntos. Recentemente, tivemos uma pequena discordância que nos fez perceber o quão profundo é nosso amor um pelo outro. Mesmo nos momentos mais desafiadores, sabemos que podemos contar um com o outro para apoio e compreensão.
          </p>
          <p>
            Nosso relacionamento é repleto de momentos engraçados e lembranças preciosas. Desde o primeiro beijo apaixonado até as brincadeiras cotidianas que nos fazem rir juntos, cada momento fortalece nossa conexão e nos lembra do amor e da alegria que compartilhamos.
          </p>
          <p>
            Estamos comprometidos em construir um futuro juntos, onde nosso amor continua a crescer e florescer. Juntos, sonhamos em enfrentar todos os desafios que a vida nos apresentar, sempre fortalecendo um ao outro e celebrando cada conquista, grande ou pequena.
          </p>
        </section>
        <Footer/>
      </main>
      <footer className="footer">
        <p>© 2024 Nosso Lindo Romance</p>
      </footer>
    </div>
  );
};

