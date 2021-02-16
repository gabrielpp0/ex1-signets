import './ListeSignet.scss';
import Signet from './Signet';
import tabSignet from './data/Signet.json';

export default function ListeSignet(props) {
    console.log(tabSignet);
    return (
        <div className="ListeSignet">
            <ul>
                {
                    tabSignet.map((elt) => 
                        <Signet titre={elt.titre} prix={elt.couleur} date={elt.date} id={elt.id} />
                    )
                }
            </ul>
        </div>
    );
}