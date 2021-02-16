import './Signet.scss';
import BtnModifierSignet from './BtnModifierSignet';

export default function Signet(props) {
    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className='info'>
                <h3 className='titre'>{props.titre}</h3>
                <p className='date'>Modifié : {props.date}</p>
                <BtnModifierSignet />
            </div>
        </li>
    );
}