import './Entete.scss';
import Utilisateur from './Utilisateur';

export default function Entete() {
    return (
      <div className="Entete">
        <Span>Signets</Span>
        <section className="Utilisateur">
          <Utilisateur />
        </section>
      </div>
    );
  }