import { useRef, useState } from 'react';
import './FocusInput.css';

function FocusInput() {
  const champRef = useRef(null);
  const [estActif, setEstActif] = useState(false);

  const placerLeFocus = () => {
    champRef.current.focus();
  };

  return (
    <div className="focus-input">
      <div className="focus-field">
        <input
          ref={champRef}
          type="text"
          placeholder="Cliquez sur le bouton pour écrire ici…"
          onFocus={() => setEstActif(true)}
          onBlur={() => setEstActif(false)}
        />
        <div className="focus-indicator">
          <span className={`focus-dot ${estActif ? 'active' : ''}`} />
          {estActif ? 'Champ actif — ref.current.focus() appelé' : 'Champ inactif'}
        </div>
      </div>

      <button className="btn-focus" onClick={placerLeFocus}>
        🎯 Activer le champ
      </button>

      <div className="focus-note">
        <span>useRef(null)</span> → relie le champ au DOM<br />
        <span>ref.current.focus()</span> → place le curseur sans re-render
      </div>
    </div>
  );
}

export default FocusInput;