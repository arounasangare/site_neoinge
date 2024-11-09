import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import '../styles/Contenu2.css';

const Contenu2 = () => {
    return (
        <div className="container mt-5 contenu2-bg">
            <h1 className="text-center mb-4">Des Missions Variées et Rémunératrices</h1>
            
            {/* Accordéon pour les cartes */}
            <Accordion defaultActiveKey="0">
                {/* Card 1 */}
                <Accordion.Item eventKey="0" className="accordion-item-spacing">
                    <Accordion.Header>Construction Neuve</Accordion.Header>
                    <Accordion.Body>
                        Plongez dans des projets de construction innovants, en réalisant des études de structures complexes, des calculs de stabilité précis et en concevant des plans détaillés. Chaque mission vous permettra de mettre en pratique vos connaissances des Eurocodes et des DTU, tout en relevant de nouveaux défis techniques.
                    </Accordion.Body>
                </Accordion.Item>

                {/* Card 2 */}
                <Accordion.Item eventKey="1" className="accordion-item-spacing">
                    <Accordion.Header>Réhabilitation d'Ouvrages Anciens</Accordion.Header>
                    <Accordion.Body>
                        Explorez le fascinant domaine de la rénovation en analysant des structures existantes, en effectuant des diagnostics techniques approfondis et en proposant des solutions de renforcement ingénieuses. Ces projets vous permettront de conjuguer expertise technique et respect du patrimoine.
                    </Accordion.Body>
                </Accordion.Item>

                {/* Card 3 */}
                <Accordion.Item eventKey="2" className="accordion-item-spacing">
                    <Accordion.Header>Rémunération Attractive</Accordion.Header>
                    <Accordion.Body>
                        Votre expertise est valorisée à sa juste valeur avec une rémunération allant de 150 à 500 euros par étude. Plus le projet est complexe, plus votre rémunération sera élevée, reflétant ainsi la valeur ajoutée que vous apportez à chaque mission.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Contenu2;
