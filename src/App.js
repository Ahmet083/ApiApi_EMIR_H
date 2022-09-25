import {HashRouter , Routes , Route} from 'react-router-dom'


import Header from "./components/header";

import Footer from "./components/footer";

import Home from "./pages/home";
import Login from "./pages/login";
import Regidter from "./pages/register"

function App() {
 
  return (
    <div>
    <Header />
    
    <HashRouter>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/login' element={<Login/>} />
<Route exact path='/register' element={<Regidter/>} />

</Routes>

</HashRouter>
     
     <Home />

    <Footer />

    </div>
   



  );
}

export default App;
