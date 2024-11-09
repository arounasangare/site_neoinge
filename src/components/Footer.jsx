import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="container footer-container">
            <h2 className="footer-title">Rejoignez NEO INGE Aujourd'hui</h2>
            <p className="footer-paragraph ">
                NEO INGE vous offre une opportunité unique de propulser votre carrière d’ingénieur freelance vers de nouveaux sommets.
                En rejoignant notre réseau, vous bénéficiez d’un accès privilégié à des projets stimulants du marché français,
                d’outils de pointe pour optimiser votre travail, et d’un soutien technique inégalé. Notre modèle flexible vous
                permet de travailler selon vos propres termes, tout en vous assurant une rémunération attractive et une croissance
                professionnelle continue.
            </p>
            <p className="footer-paragraph">
                Ne laissez pas passer cette chance de transformer votre expertise en une carrière internationale florissante.
            </p>
            <p className="footer-paragraph">
                Contactez-nous dès aujourd’hui pour découvrir comment NEO INGE peut vous aider à atteindre vos objectifs professionnels
                et à vous démarquer dans le monde compétitif de l’ingénierie BTP.
            </p>
            <Button variant="outline-light" className="footer-button text-dark">Rejoignez-nous</Button>
            <div className="footer-link">
                <a href="#CGV" className="footer-cgv">CGV</a>
            </div>
        </div>
    );
};

export default Footer;
