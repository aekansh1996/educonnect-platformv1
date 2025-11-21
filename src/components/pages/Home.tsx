
import Navbar from '../common/navbar';
import './Home.css';
import HeroSection from '../common/HeroSection';
import AboutSection from '../pages/AboutSection';
import ForOrganizationsSection from '../common/ForOrganizationsSection';
import ForTutorsSection from '../common/ForTutorsSection';
import HowItWorksSection from '../common/HowItWorksSection';
import AvailableSection from '../common/AvailableSection';
import TestimonialsSection from '../common/TestimonialsSection';
import FAQSection from '../common/FAQSection';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ForOrganizationsSection />
      <ForTutorsSection />
      <HowItWorksSection />
      <AvailableSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
