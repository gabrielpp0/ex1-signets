import './Entete.scss';
import Utilisateur from './Utilisateur';

export default function Entete() {
    return (
      <div className="Entete">
        <span>Signets</span>
        <section className="Utilisateur">
          <Utilisateur />
        </section>
      </div>
    );
  }