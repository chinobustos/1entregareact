
import './App.css'
let vacio='';


function App() {
  const abrir_cerrar_menu = () =>{
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  }


  return (
    <header>
      <h1>Bienvenido a Ironmusic</h1>
      <div className='barras'>
        <button onClick = {abrir_cerrar_menu} className= 'boton_menu' id ='x'></button>
      </div>
      <nav id ='menu' className='desplegable'>
        <ul>
         <li> <a href={vacio}>Guitarras</a> </li>
         <li> <a href={vacio}>Bajos</a> </li>
         <li> <a href={vacio}>Baterias</a> </li>
         <li> <a href={vacio}>Accesorios</a> </li>
         <li> <a className='cantidad-carrito' href={vacio}></a>🛒</li>
         </ul>
      </nav>
    </header>
  );
 }

export default App;
