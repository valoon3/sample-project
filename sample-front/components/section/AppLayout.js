import Header from './Header';
import Nav from './Nav';
import Section from './Section';
import Aside from './Aside';
import Footer from './Footer';

export default function AppLayout({ children }) {


  return (
      <>
        <Header />
        <Nav />
        <Section />
        <Aside />
        <Footer />
      </>
  )
}