import { Footer } from "./components/layout"
import { Page_home } from "./pages"
import { Page_home_provider } from "./providers"

function App() {


  return (
    <Page_home_provider>

      <article className=" bg-white">
        <Page_home/>

        <Footer/>
      </article>
      
    </Page_home_provider>
  )
}

export default App
