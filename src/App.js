import './App.css';
import Blog from './Components/blog/Blog';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Header from './Components/Head/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <><Header /><Home /><Features /><Portfolio/><Resume/><Testimonial/><Blog/><Contact/><Footer/></>
  );
}

export default App;
