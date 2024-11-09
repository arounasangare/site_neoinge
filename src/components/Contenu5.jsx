import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Contenu5.css';

const Contenu5 = () => {
    return (
        <div className=" container-fluid contenu5-container text-center">
            <h2 className="contenu5-title">Modalités d'Adhésion Flexibles</h2>
            <div className="row justify-content-center mb-4">
                <div className="col-md-5 mb-4">
                    <Card className="contenu5-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="contenu5-card-title">Rémunération Attractive</Card.Title>
                            <Card.Text className="contenu5-card-text text-white">
                                Bénéficiez d’une rémunération compétitive allant de 150 à 500 euros voire plus selon vos compétences par étude,
                                reflétant la complexité et l’ampleur de chaque projet.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-5 mb-4">
                    <Card className="contenu5-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="contenu5-card-title">Paiement Rapide et Sécurisé</Card.Title>
                            <Card.Text className="contenu5-card-text text-white">
                                Une fois votre mission validée par le support technique, recevez votre paiement rapidement par virement bancaire
                                ou transfert d’argent.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-5 mb-4">
                    <Card className="contenu5-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="contenu5-card-title">Support Technique Dédié</Card.Title>
                            <Card.Text className="contenu5-card-text text-white">
                                Profitez d’un support technique à votre disposition pour vous aider à résoudre les éventuels problèmes rencontrés.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-5 mb-4">
                    <Card className="contenu5-card">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="contenu5-card-title">Formation Continue</Card.Title>
                            <Card.Text className="contenu5-card-text text-white">
                                Accédez à des formations continues pour améliorer vos compétences et progresser dans votre carrière.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contenu5;
