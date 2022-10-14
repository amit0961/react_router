import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      {/* <nav>Our Navbar Here</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout  />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        {/* Nested Page 
        /*
        <Route path='dashboard' element={<div>dashboard</div>} >
          <Route path='stats' element={<div>Stats</div>}></Route>
        </Route>
        {/* <Route
          path="testing"
          element={
            <div>
              <h2>Testing Page</h2>
            </div>
          }
        /> */}
      </Routes>
      {/* <footer>Our Footer Here</footer> */}
    </BrowserRouter>
  );
}

export default App;
