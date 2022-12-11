import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import NotFound from "./components/layout/NotFound"
import About from "./pages/About"
import Home from "./pages/Home"
import NewContact from "./pages/NewContact"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="new-contact" element={<NewContact />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
