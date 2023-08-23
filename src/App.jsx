import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components/layout"
import { Page_home, Page_showroom } from "./pages"
import { Page_home_provider, Page_showroom_provider } from "./providers"
import { DB_products_provider } from "./databases"

function App() {


  return (
    <BrowserRouter>
      <DB_products_provider>
        <Page_home_provider>
          <Page_showroom_provider>



              <Navbar/>
                <Routes>
                  <Route path="/" element={<Page_home/>} />
                  <Route path="/showroom/:category" element={<Page_showroom/>} />
                </Routes>
              <Footer/>

            
          </Page_showroom_provider>
        </Page_home_provider>
      </DB_products_provider>
    </BrowserRouter>
  )
}

export default App
