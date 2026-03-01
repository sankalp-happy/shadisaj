import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import VendorProducts from './pages/VendorProducts'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Budget from './pages/Budget'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import PrivacyPolicy from './pages/PrivacyPage'
import TermsOfService from './pages/TermsPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-background-main flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendor/products" element={<VendorProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/terms/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms/tos" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
