import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import '../Estilos/nav.css'; // Importa el archivo CSS

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={showMenu ? 'show' : ''} id="menu-list">
          <li className="menu-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu-item">
            <Link to="/Biografias">Biografias</Link>
          </li>
          <li className="menu-item">
            <Link to="/Reseñas">Reseñas </Link>
          </li>
          <li className="menu-item">
            <Link to="/Musica">Musica</Link>
          </li>
          <li className="menu-item">
            <Link to="/Noticias">Noticias</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Nav;
