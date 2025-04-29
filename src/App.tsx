import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="content">
          <CardGrid />
          <Counter />
          <ThemeToggle />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;