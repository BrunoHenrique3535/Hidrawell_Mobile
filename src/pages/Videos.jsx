import Header from "../components/Header";
import { Global } from "../styles/Global";
import { VideosContainer } from "../styles/Videos.styles";
import Capa1 from "/Capa1.png"
import Capa2 from "/Capa2.png"
import Capa3 from "/Capa3.png"

export default function Videos() {
  return (
    <>
    <Header/>
      <VideosContainer>
        <section>
          <h1>Vídeos:</h1>
          <div>
            <div>
              <img src={Capa1} alt="" />
              <a href="">Play</a>
            </div>
            <div>
              <img src={Capa2} alt="" />
              <a href="">Play</a>
            </div>
            <div>
              <img src={Capa3} alt="" />
              <a href="">Play</a>
            </div>
          </div>
        </section>
        
        <Global/>
    </VideosContainer>
    </>
  )
}
