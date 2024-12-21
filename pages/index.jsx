import Visits from '@/components/Visits';
import Header from '../components/Header.jsx'; // Importing a component
import Mission from '../components/Mission.jsx';
import Nav from '@/components/Nav';
import Services from '@/components/Services.jsx';
import Footer from '@/components/Footer.jsx';
import Calculator from '@/components/Calculator.jsx';

export default function Home() {
  return (
    <div>
      <Nav />  {/* Using the Header component */}
      <Header/>
      <Mission/>
      <Calculator/>
      <Visits/>
      <Services/>
      <Footer/>
    </div>
  );
}
