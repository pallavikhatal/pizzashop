import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Menu from "./components/Menu"
import About from "./components/About"
import Cart from "./components/Cart"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element = {<About />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
    </>
  )
}

export default App
