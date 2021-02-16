import './Page.scss';
import Entete from './Entete';
import ListeSignet from './ListeSignet';

export default function Page() {
  return (
    <div className="Page">
      <Entete />
      <section className="contenuePrincipale">
        <ListeSignet />
      </section>
    </div>
  );
}
