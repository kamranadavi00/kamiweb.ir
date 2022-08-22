import Header from './components/Header';
import Footer from './components/Footer';
import { Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import About from './screens/About';
import Papers from './screens/Papers';
import Python from './screens/Python';
import Javascript from './screens/Javascript';
import Html from './screens/Html';
import { Switch } from 'react-router-dom';
function App() {  
  return (
    <Router>
   
        <Header/>
        <main>
          <Container className='py-3'>
            
        <Routes>
           
              <Route path='/' element={<HomeScreen/>} />
              <Route path='//product' element={<HomeScreen/>} />
              <Route path='/product/:id' element={<ProductScreen/>}/>
              <Route path='/about' element={<About/>} />
              <Route path='/papers' element={<Papers/>} />
              <Route path='/python' element={<Python/>} />
              <Route path='/javascript' element={<Javascript/>} /> 
              <Route path='/html' element={<Html/>} />
              
           
              
        </Routes>
      
          </Container>
          </main> 
          <Footer/>
      
    </Router>
  );
}
export default App; 
