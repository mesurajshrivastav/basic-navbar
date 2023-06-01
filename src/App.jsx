import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/Header.css';
import Contact from './componenets/Contact';
import About from './componenets/About';
import Home from './componenets/Home';
import Header from './componenets/Header';
import Product from './componenets/Product';


function App () {
  
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="*" element={<div>page not found 404</div>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;



