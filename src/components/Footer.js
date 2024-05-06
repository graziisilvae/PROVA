import './footer.css';

function Footer(){

  return (

    <div className='footer'>
        <p>© 2024 Todos os Reservados.
        Contato: 719.9999-9999
        </p>
        <br></br>
        
        <div className='logo'>
        <img src={require('../ft/SESI.png')} alt="footer"/> 
      </div>

    </div>
  );
}

export default Footer;