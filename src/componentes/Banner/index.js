import "./Banner.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá, Mundo!</h1>
        <p className="paragrafo">
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>

        <div className="imagens">
          <img
            className="circuloColorido"
            src={circuloColorido}
            aria-hidden={true}
            alt="circulo colorido"
          />

          <img
            className="minhaFoto"
            src={minhaFoto}
            alt="Foto do Antônio Evaldo sorrindo"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
