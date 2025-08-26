// pages/_app.js
import '../styles/globals.css';  // Importando o arquivo de estilos globais
import '../styles/Index.module.css';  // Importando o CSS module específico do componente

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
