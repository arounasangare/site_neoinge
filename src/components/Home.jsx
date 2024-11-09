import 'bootstrap/dist/css/bootstrap.min.css';
import head1 from '../images/head1.jpg';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="container-fluid home-container" style={{ paddingTop: '80px' }}>
            <div className="row align-items-center">
                {/* Section texte à gauche */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <h1 className="titre1">Neo-ingé</h1>
                    <h2 className="titre2">1er réseau pour les Métiers Intellectuels du BTP</h2>
                    <p className="paragraphe1">
                        Accédez à des projets passionnants tout en préservant votre indépendance, que vous soyez expert en construction neuve ou en réhabilitation. Développez vos compétences, élargissez votre horizon professionnel et bénéficiez d’une rémunération attractive, sans quitter votre pays.
                    </p>
                    <p className="parapgraphe2">vous êtes</p>
                    
                    {/* Trois cartes alignées avec du texte, maintenant des liens */}
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                            <a href="/ingenieur-geotechnique" className="card text-white card-link">
                                <div className="card-body">
                                    <p className="card-text">Ingénieur Géotechnique</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <a href="/ingenieur-genil-civil" className="card text-white card-link">
                                <div className="card-body">
                                    <p className="card-text">Ingénieur Genil civil / structure</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <a href="/ingenieur-genie-electrique" className="card text-white card-link">
                                <div className="card-body">
                                    <p className="card-text">Ingénieur Génie électrique et réseau</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section image à droite */}
                <div className="col-12 col-md-6">
                    <img src={head1} alt="BTP" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    );
}

export default Home;
