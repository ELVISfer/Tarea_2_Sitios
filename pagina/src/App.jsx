import { Routes, Route } from 'react-router-dom'
import { Menu } from './Componente/Menu'
import { Inicio } from './Componente/Inicio'
import { Footer } from './Componente/Footer'
import { Bajimos } from './Componente/Bajimos'
import { Producto } from './Componente/Producto'
import { Default } from './Componente/Default'
import { Contacto } from './Componente/Contacto'
import { quienesSomos } from './Componente/quienesSomos'

function App() {
  
  return (
    <>  
        <Menu />
        <Routes>
        <Route path='/inicio' element={ <Inicio />}  ></Route>
        <Route path='/quienesSomos' element={ <quienesSomos />}  ></Route>
        <Route path='/bajimos' element={ <Bajimos />}  ></Route>
        <Route path='/producto' element={ <Producto />}  ></Route>
        <Route path='/contacto' element={ <Contacto />}  ></Route>
        <Route path='*' element={ <Default />}  ></Route>

        </Routes>
        <Footer />
    </>
  )
}

export default App