import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components/layout"
import { Page_details, Page_home, Page_shopping, Page_showroom } from "./pages"
import { Counter_provider, Page_details_provider, Page_home_provider, Page_shopping_provider, Page_showroom_provider } from "./providers"
import { DB_products_provider } from "./databases"
import { ScrollToTop } from "./components/others"

function App() {


  return (
    <BrowserRouter>

      <DB_products_provider>

        <Counter_provider>
          <Page_home_provider>
            <Page_showroom_provider>
              <Page_shopping_provider>
                <Page_details_provider>
                <ScrollToTop/>
                
                  <Navbar/>
                    <Routes>
                      <Route path="/" element={<Page_home/>} />
                      <Route path="/showroom/:category" element={<Page_showroom/>} />
                      <Route path="/details/:id" element={<Page_details/>} />
                      <Route path="/shopping" element={<Page_shopping/>} />
                    </Routes>
                  <Footer/>

                </Page_details_provider>
              </Page_shopping_provider>
            </Page_showroom_provider>
          </Page_home_provider>
        </Counter_provider>

      </DB_products_provider>

    </BrowserRouter>
  )
}

export default App
