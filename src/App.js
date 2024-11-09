// App.js

import './App.css';  // Assurez-vous que ce fichier CSS contient des règles globales
import Navbar from './components/Navbar';  // Composant Navbar
import Home from './components/Home';  // Composant Home
import Contenu1 from './components/Contenu1';  // Composant Contenu1
import Contenu2 from './components/Contenu2';  // Composant Contenu2
import Contenu3 from './components/Contenu3';  // Composant Contenu3
import Contenu4 from './components/Contenu4';  // Composant Contenu4
import Contenu5 from './components/Contenu5';  // Composant Contenu5 (s'il est nécessaire)
import Footer from './components/Footer';  // Composant Footer

function App() {
  return (
    <div className="App">
      {/* Navbar en haut de l'application */}
      <Navbar />

      {/* Sections de contenu */}
      <Home />
      <Contenu1 />
      <Contenu2 />
      <Contenu3 />
      <Contenu4 />
      <Contenu5 />

      {/* Footer en bas de la page */}
      <Footer />
    </div>
  );
}

export default App;
