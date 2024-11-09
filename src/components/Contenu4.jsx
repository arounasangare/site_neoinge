import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../styles/Contenu4.css';

const Contenu4 = () => {
    return (
        <div className="container mt-5 contenu4-container text-center">
            <h2 className="contenu4-title mb-4">Modalités d'Adhésion Flexibles</h2>
            <div className="row justify-content-center">
                {/* Première carte */}
                <div className="col-12 col-md-5 mb-4">
                    <Card className="contenu4-card">
                        <Card.Body>
                            <Card.Title>Rémunération Attractive</Card.Title>
                            <Card.Text>
                                Bénéficiez d’une rémunération compétitive allant de 150 à 500 euros voire plus selon vos compétences par étude, reflétant la complexité et l’ampleur de chaque projet. 
                                Votre expertise est ainsi justement valorisée, vous encourageant à prendre en charge des missions toujours plus stimulantes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* Deuxième carte */}
                <div className="col-12 col-md-5 mb-4">
                    <Card className="contenu4-card">
                        <Card.Body>
                            <Card.Title>Paiement Rapide et Sécurisé</Card.Title>
                            <Card.Text>
                                Une fois votre mission validée par le support technique, recevez votre paiement rapidement par virement bancaire ou transfert d’argent. 
                                Notre système de paiement sécurisé garantit la fiabilité et la ponctualité de vos rémunérations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contenu4;
