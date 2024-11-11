import Header from "../components/Header";
import { Global } from "../styles/Global";
import { VideosContainer } from "../styles/Videos.styles";
import Capa1 from "/Capa1.png"
import Capa2 from "/Capa2.png"
import Capa3 from "/Capa3.png"

export default function Videos() {
  return (
    <>
      <Header />
      <VideosContainer>
        <section>
          <h1>Vídeos:</h1>
          <div>
            <div>
              <h2>
                projeto
              </h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/K_2tFTAojJU?si=tyDTWFDd1mVdHipr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              

              
            </div>

            <div>
              <h2>
                Jogo
              </h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/K_2tFTAojJU?si=tyDTWFDd1mVdHipr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

              
            </div>
            
          </div>
        </section>

        <Global />
      </VideosContainer>
    </>
  )
}
