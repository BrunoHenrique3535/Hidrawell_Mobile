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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/K_2tFTAojJU?si=tyDTWFDd1mVdHipr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <a href="https://www.youtube.com/watch?v=7yP7SguUnss" target="_blank">
                Play

              </a>
            </div>
            <div>
              <img src={Capa2} alt="" />
              <a href="https://www.youtube.com/watch?v=wjotLW5L4BE" target="_blank">
                Play

              </a>
            </div>
            <div>
              <img src={Capa3} alt="" />
              <a href="https://www.youtube.com/watch?v=GAx-QUCdKHM" target="_blank">
                Play

              </a>
            </div>
          </div>
        </section>

        <Global />
      </VideosContainer>
    </>
  )
}
