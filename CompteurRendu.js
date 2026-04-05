import { useRef, useEffect, useState } from 'react';
import './CompteurRendu.css';

function CompteurRendu() {
  const nbAffichages = useRef(0);
  const [texte, setTexte] = useState('');

  // S'exécute après chaque render — nbAffichages ne déclenche pas de render
  useEffect(() => {
    nbAffichages.current += 1;
  });

  return (
    <div className="compteur-rendu">
      <div className="rendu-display">
        <span className="rendu-label">Nombre de re-renders</span>
        <span className="rendu-count">{nbAffichages.current}</span>
      </div>

      <div className="rendu-trigger">
        <label>Tape ici pour déclencher un re-render :</label>
        <input
          type="text"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Chaque frappe = 1 render…"
        />
      </div>

      <div className="rendu-note">
        <span>useRef(0)</span> → persiste sans re-render<br />
        Si on utilisait <span>useState</span> ici → boucle infinie
      </div>
    </div>
  );
}

export default CompteurRendu;