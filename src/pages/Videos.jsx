import Header from "../components/Header";
import { Global } from "../styles/Global";
import { VideosContainer } from "../styles/Videos.styles";
import Capa1 from "/Capa1.png";  // Supondo que você tenha imagens para capa
import Capa2 from "/Capa2.png";  // A mesma coisa para as outras imagens
import Capa3 from "/Capa3.png";

export default function Videos() {
  return (
    <>
      <Header />
      <VideosContainer>
        <section>
          <h1>Vídeos:</h1>
          <div>
            <div>
              <h2>Projeto</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZfrbyI9Ck1Q?si=ugFUN_896Iy19cOK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div>
              <h2>Jogo</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xl02x52ESVs?si=KebvMju2PG1EH4Z_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <Global />
      </VideosContainer>
    </>
  );
}
