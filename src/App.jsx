import './App.css'
import './main.css'
import Header from './components/Header'
import Banner from './components/Banner'
import TrendingProducts from './components/TrendingProducts'
import BestSellers from './components/BestSellers'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TrendingProducts />
      <BestSellers />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
