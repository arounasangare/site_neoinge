import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-4">
            <div className="container-fluid">
                {/* Bouton du menu hamburger pour petits écrans */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenu de la barre de navigation, incluant les liens */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Nos Missions</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Conditions d'Adhésion</a>
                        </li>
                    </ul>
                </div>

                {/* Bouton à droite */}
                <button className="btn btn-warning ms-auto">Rejoignez-nous</button>
            </div>
        </nav>
    );
}

export default Navbar;
