import Header from "../components/Header";
import { CriadoresContainer, Membros } from "../styles/Criadores.styles";
import { Global } from "../styles/global";
import Bruno from "/Bruno.png"
import Renan from "/Renan.png"
import Nycollas from "/Nycollas.png"
import Logo from "/LogoHidra.jpeg"

export default function Criadores() {
    return (
      <CriadoresContainer>
        <Header/>
        <div>
          <h1>Criadores:</h1>
          <section>
            <Membros>
              <img src={Bruno} alt="" />
              <h2>Bruno Henrique</h2>
              <a href="https://www.instagram.com/brunin.freitas_?igsh=MXhiemQwbWMwb2txeQ==" target="_blank">Instagram</a>
            </Membros>

            <Membros>
              <img src={Renan} alt="" />
              <h2>Renan Nascimento</h2>
              <a href="https://www.instagram.com/reoliveira06?igsh=a3N1ajV3eGlmcHYz" target="_blank">Instagram</a>
            </Membros>
            
            <Membros>
              <img src={Nycollas} alt="" />
              <h2>Nycollas Paulino</h2>
              <a href="https://www.instagram.com/nycollas_cruz_?igsh=MXEwZTR0MGFlbGFkaQ==" target="_blank">Instagram</a>
            </Membros>
          </section>
        </div>

        <section id="Ref">
          <h1 id="volta">Hidrawell</h1>
          <h3>Referências bibliográficas:</h3>
          <p>Inspiramo-nos em garrafas térmicas que possuem LED na tampa, as quais auxiliam no monitoramento da temperatura do líquido. A "Garrafa Térmica Ecos" serviu como base para nosso projeto, contudo, a principal inspiração veio da "HidrateSparkTAP", que segue a mesma premissa da nossa proposta.</p>
          <a href="https://www.amazon.com.br/HidrateSpark-inteligente-torneira-monitorar-hidratado/dp/B09DTGWNPR" target="_blank">https://www.amazon.com.br/HidrateSpark-inteligente-torneira-monitorar-hidratado/dp/B09DTGWNPR</a>
          <a href="https://sol.sbc.org.br/index.php/ihc_estendido/article/view/26476" target="_blank">https://sol.sbc.org.br/index.php/ihc_estendido/article/view/26476</a>
          <img src={Logo} alt="" />
        </section>
        <Global/>
      </CriadoresContainer>
    )
  }