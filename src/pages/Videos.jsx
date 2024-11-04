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
              <img src="https://cdn.discordapp.com/attachments/1098035437181866138/1302969942274080819/5dc6ef6b-fb46-4609-b12d-64212c319273.jpg?ex=672a0cd2&is=6728bb52&hm=721806dce930171137fbe2c04655405d847e8e6c9d3bd55236bd448c3a57430f&" alt="" />
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
        
        <Global/>
    </VideosContainer>
    </>
  )
}
