import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar';
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import UsPage from './pages/UsPage/UsPage'
import NewsPage from './pages/NewsPage/NewsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SkatePage from './pages/SkatePage/SkatePage'
import ClothesPage from './pages/ClothesPage/ClothesPage'
import CartPage from './pages/CartPage/CartPage';
import './App.css'
import ManClothesPage from './pages/ClothesPage/ManClothesPage/ManClothesPage';
import WomanClothesPage from './pages/ClothesPage/WomanClothesPage/WomanClothesPage';
import KidsClothesPage from './pages/ClothesPage/KidsClothesPage/KidsClothesPage';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Header/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/skate' exact component={SkatePage}/>
            <Route path='/clothes' exact component={ClothesPage}/>
            <Route path='/us' exact component={UsPage}/>
            <Route path='/news' exact component={NewsPage}/>
            <Route path='/contact' exact component={ContactPage}/>
            <Route path='/cart' exact component={CartPage}/>
            <Route path='/clothes/man' exact component={ManClothesPage}/>
            <Route path='/clothes/woman' exact component={WomanClothesPage}/>
            <Route path='/clothes/kids' exact component={KidsClothesPage}/>
          </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
