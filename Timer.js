import { useState, useEffect } from 'react';
import './Timer.css';

function formaterTemps(s) {
  const min = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function Timer() {
  const [duree, setDuree] = useState(0);
  const [actif, setActif] = useState(true);

  useEffect(() => {
    if (!actif) return;

    const identifiant = setInterval(() => {
      setDuree((prev) => prev + 1);
    }, 1000);

    // Nettoyage : stoppe l'intervalle au démontage ou quand actif change
    return () => clearInterval(identifiant);
  }, [actif]);

  const reinitialiser = () => {
    setActif(false);
    setDuree(0);
  };

  return (
    <div className="timer">
      <div className="timer-clock">{formaterTemps(duree)}</div>

      <div className="timer-status">
        <span className={`status-dot ${actif ? 'running' : ''}`} />
        {actif ? 'Intervalle actif — setInterval en cours' : 'En pause — clearInterval appelé'}
      </div>

      <div className="timer-controls">
        {actif ? (
          <button className="btn-timer pause" onClick={() => setActif(false)}>
            ⏸ Pause
          </button>
        ) : (
          <button className="btn-timer start" onClick={() => setActif(true)}>
            ▶ Reprendre
          </button>
        )}
        <button className="btn-timer reset" onClick={reinitialiser}>
          ↺ Reset
        </button>
      </div>

      <div className="timer-note">
        <span>return () =&gt; clearInterval(id)</span><br />
        Stoppe l'intervalle au démontage → pas de fuite mémoire
      </div>
    </div>
  );
}

export default Timer;