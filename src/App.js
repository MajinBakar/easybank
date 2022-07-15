import './App.css';
import Articles from './Components/Articles';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='landscape:sm'>
      <Hero />
      <Skills />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
