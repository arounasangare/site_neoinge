import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../styles/Contenu3.css';
import head1 from '../images/head1.jpg';

const Contenu3 = () => {
    return (
        <div className="container-fluid mt-5 contenu3-container">
            <div className="row">
                {/* Section Texte à gauche */}
                <div className="col-md-7 contenu3-text">
                    <h2 className="contenu3-title text-left mb-4">
                        Un Plan de Gestion des Études Révolutionnaire
                    </h2>

                    {/* 3 Cartes superposées avec taille ajustée */}
                    <div className="card-stack">
                        <div className="card-container">
                            <Card className="contenu3-card">
                                <Card.Body>
                                    <Card.Title>CRM Performant</Card.Title>
                                    <Card.Text>
                                    Gérez efficacement vos projets grâce à notre CRM intuitif. Suivez chaque étape de vos missions, recevez des alertes personnalisées et optimisez votre productivité grâce à un tableau de bord complet.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="card-container">
                            <Card className="contenu3-card">
                                <Card.Body>
                                    <Card.Title>Bibliothèque Technique</Card.Title>
                                    <Card.Text>
                                    Accédez à une vaste collection de ressources techniques, incluant les normes Eurocodes et DTU, des guides pratiques et des exemples de projets. Cette bibliothèque constamment mise à jour vous permet de rester à la pointe de votre domaine.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="card-container">
                            <Card className="contenu3-card">
                                <Card.Body>
                                    <Card.Title>Support Technique</Card.Title>
                                    <Card.Text>
                                    Bénéficiez d'un accompagnement personnalisé de notre équipe d'experts. Que ce soit pour des questions techniques ou des conseils sur la gestion de projet, notre support est là pour vous guider vers l'excellence.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    {/* Bouton aligné à droite sous les cartes */}
                    <div className="text-right mt-4">
                        <Button variant="primary" className="learn-more-btn">  Rejoindre NEO INGE </Button>
                    </div>
                </div>

                {/* Section Image à droite */}
                <div className="col-md-5 contenu3-image">
                    <img src={head1} alt="Maquette de construction" className="img-fluid rounded shadow contenu3-image-large" />
                </div>
            </div>
        </div>
    );
};

export default Contenu3;
