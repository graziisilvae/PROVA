import './home.css';

function Home() {
  return (
    <div className="agrupamento">
    <h1>Bem-Vindo á Página Inicial da AV2 (Terceira Tentativa)</h1>
    <img src={require('../ft/FOTO5.jpg')} alt="img1" />

    <img src={require('../ft/FOTO6.jpg')} alt="img2" />
    
    <img src={require('../ft/FOTO7.jpg')} alt="img3" />

    <img src={require('../ft/HOME.jpg')} alt="img4" />
    <h5>Portaria SESI Piatã</h5>

    
    <div className='textos'></div>
    <h5>Portaria Senai Cimatec</h5>
    <h5>Portaria SESI Saúde Piatã</h5>
    <h5>Portaria SESI Piatã</h5>

    </div>
  );
}

export default Home;