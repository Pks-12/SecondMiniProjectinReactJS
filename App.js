import Nav from './components/Navigation/Nav.jsx';
import './App.css'
import Contact from './components/ContactHeader/Contact.jsx';
import Contact1 from './components/ContactForm/Contact1.jsx';
function App() {
  return (
    <>
    <Nav />
    <main className="main_container">
    <Contact />
    <Contact1 />
    </main>
    </>
    );
}

export default App;
