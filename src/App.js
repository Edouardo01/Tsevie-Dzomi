// import togo from '../img/togo.jpg';
  import './App.css';
  import logo from './lg.png';


  

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={togo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //   </header>
    // </div> 
   
    <main>
      <header className='header'>
        <nav className="navbar">
          <div className='logo'>
            <img src={logo}></img>
          </div>
          <div className='nav-link'>
            <a href='#'>Produit</a>
            <a href='#'>Recettes</a>
            <a href='#'>Blog</a>
            <a href='#'>A propos</a>
          </div>
          <div className='icons'>
            <box-icon name='cart-alt' color='white' animation='tada-hover'></box-icon>
            <box-icon name='user' type='solid' color='white' animation='tada-hover'></box-icon>
            <box-icon name='heart' type='solid' color='white' animation='tada-hover'></box-icon>
          </div>
        </nav>
        <div className='container'>
          <h1>TSEVIE DZOMI</h1>
          <p>La meilleure huile de palme raffinée , bio. Huile de qualite, 100% naturel produit par les femmes de Tsevie sans colorant à base de noix locales. l’or rouge du terroir , l’huile qui illumine vos plats.</p>
          <div className='container-link'>
            <a href='#'> Savourez</a>
            <a href='#'>Voir la boutique</a>
          </div>
        </div>
      </header>
      <section className='product'>
          <h2>Huile de palme made in Togo </h2>
          <p>L’usage de l’huile rouge date d’une très ancienne époque selon les récits des africains. Mais depuis l’époque du commerce triangulaire entre l’Europe, l’Afrique et les Amériques, le palmier d’huile rouge, s’est peu à peu fait connaître dans le monde entier</p>
      </section>
      
     
    </main>
    
  );
}

export default App;

