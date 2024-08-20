import './App.css'
import ProductsMenu from './frontend/Components/ProductsMenu'
import LandingPage from './frontend/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products/:firmId/:firmName' element={<ProductsMenu/>}/>
      </Routes>
    </>
  )
}

export default App
