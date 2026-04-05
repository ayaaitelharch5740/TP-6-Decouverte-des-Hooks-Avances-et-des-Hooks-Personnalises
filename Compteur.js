import { useReducer } from 'react';
import './Compteur.css';

const etatInitial = { total: 0 };

function gestionnaireEtat(etat, action) {
  switch (action.type) {
    case 'ajouter':
      return { total: etat.total + 1 };
    case 'retirer':
      return { total: etat.total - 1 };
    case 'reinitialiser':
      return etatInitial;
    default:
      throw new Error(`Action inconnue : ${action.type}`);
  }
}

function Compteur() {
  const [etat, envoyer] = useReducer(gestionnaireEtat, etatInitial);

  const classe =
    etat.total > 0 ? 'positive' : etat.total < 0 ? 'negative' : '';

  return (
    <div className="compteur">
      <div className={`compteur-display ${classe}`}>
        <span className="compteur-value">{etat.total}</span>
        <span className="compteur-label">total</span>
      </div>

      <div className="compteur-btns">
        <button
          className="btn-count minus"
          onClick={() => envoyer({ type: 'retirer' })}
        >
          −
        </button>
        <button
          className="btn-count reset"
          onClick={() => envoyer({ type: 'reinitialiser' })}
        >
          ↺
        </button>
        <button
          className="btn-count plus"
          onClick={() => envoyer({ type: 'ajouter' })}
        >
          +
        </button>
      </div>

      <p className="compteur-info">
        dispatch(<span>&#123; type: 'ajouter' &#125;</span>) →{' '}
        useReducer met à jour l'état
      </p>
    </div>
  );
}

export default Compteur;