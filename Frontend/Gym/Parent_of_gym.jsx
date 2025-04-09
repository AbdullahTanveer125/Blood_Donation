import './Parent_of_gym.css';
import Hero from './components/Hero/Hero.jsx';
import Plan from './components/Plan/Plan.jsx';
import Program from './components/Program/Program.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';
// import backgroundImage from '../Gym/assets/hero_image.png'; // Import image
function Parent_of_gym() {

  console.log("Parent_of_gym rendered"); // Check if the component is loaded

  return (
    <div className="Parent_of_gym">
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      <Hero />
      <Program />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default Parent_of_gym;
