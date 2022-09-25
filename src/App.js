import {BrowserRouter , Routes , Route} from 'react-router-dom'


import Header from "./components/header";
import Home from "./pages/home"
import Footer from "./components/footer";

function App() {
 
  return (
    <div>
    <Header />
    
    <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/login' element={<Home/>} />
<Route exact path='/register' element={<Home/>} />

</Routes>

</BrowserRouter>
     
     <Home />

    <Footer />

    </div>
   



  );
}

export default App;
