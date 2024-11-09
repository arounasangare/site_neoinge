import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contenu1.css';

const Contenu1 = () => {
    return (
        <div className="contenu">
            <div className="container mt-5">
                <h1 className="text-center mb-4 titre">Découvrez NEO INGE Votre Tremplin vers le Succès</h1>

                <div className="row">
                    {/* Carte 1 */}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card flex-fill contenu-card">
                            <div className="card-body">
                                <h5 className="card-title text-gold">Connexion au Marché Français</h5>
                                <p className="card-text text-white">Accédez à des projets variés et stimulants directement issus du marché français, élargissant ainsi votre expérience professionnelle</p>
                            </div>
                        </div>
                    </div>

                    {/* Carte 2 */}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card flex-fill contenu-card">
                            <div className="card-body">
                                <h5 className="card-title text-gold">Flexibilité et Indépendance</h5>
                                <p className="card-text text-white">Travaillez à distance tout en bénéficiant d'un réseau de soutien solide, vous permettant de concilier vie professionnelle et personnelle.</p>
                            </div>
                        </div>
                    </div>

                    {/* Carte 3 */}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card flex-fill contenu-card">
                            <div className="card-body">
                                <h5 className="card-title text-gold">Croissance Professionnelle</h5>
                                <p className="card-text text-white">Développez vos compétences grâce à des projets diversifiés et au support technique de haut niveau fourni par NEO INGE.</p>
                            </div>
                        </div>
                    </div>

                    {/* Carte 4 */}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card flex-fill contenu-card">
                            <div className="card-body">
                                <h5 className="card-title text-gold">Rémunération Attractive</h5>
                                <p className="card-text text-white">Bénéficiez d'une rémunération compétitive basée sur la complexité des projets, valorisant ainsi votre expertise et votre travail.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contenu1;
