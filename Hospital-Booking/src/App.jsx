import './App.css'
import Header from './Component/Header'
import Layout from './Component/Layout'
import Footer from './Component/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-1">
        <Layout />
      </main>
      <Footer />
    </div>
  )
}

export default App
