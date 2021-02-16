import './Signet.scss';
import BtnModifierSignet from './BtnModifierSignet';

export default function Signet(props) {
    return (
        <li className="Signet">
            <div className="image">
                <img src={'images-titre/' + props.id + '.jpg'} alt={props.titre}/>
            </div>
            <div className='info'>
                <h3 className='titre'>{props.titre}</h3>
                <p className='date'>Modifié : {props.date}</p>
                <BtnModifierSignet />
            </div>
        </li>
    );
}