import './App.css';
import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div className="app">

      {/* ── HEADER ── */}
      <header className="app-header">
        <div className="header-badge">
          <span className="badge-dot" />
          React · TP Hooks Avancés
        </div>
        <h1>Maîtrise les <span>Hooks</span> React</h1>
        <p>
          useReducer · useRef · useEffect · Custom Hook —
          chaque composant illustre un concept clé.
        </p>
        <div className="hook-tags">
          <span className="hook-tag blue">useReducer</span>
          <span className="hook-tag pink">useRef</span>
          <span className="hook-tag green">useEffect</span>
          <span className="hook-tag amber">Custom Hook</span>
        </div>
      </header>

      {/* ── GRILLE ── */}
      <main className="app-main">

        {/* Compteur — useReducer */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon blue">⚙️</div>
            <div className="card-header-text">
              <h2>Compteur</h2>
              <p>useReducer · Compteur.js</p>
            </div>
          </div>
          <div className="card-body">
            <Compteur />
          </div>
        </div>

        {/* Focus — useRef DOM */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon pink">🎯</div>
            <div className="card-header-text">
              <h2>Focus Input</h2>
              <p>useRef DOM · FocusInput.js</p>
            </div>
          </div>
          <div className="card-body">
            <FocusInput />
          </div>
        </div>

        {/* Timer — useEffect + cleanup */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon green">⏱️</div>
            <div className="card-header-text">
              <h2>Timer</h2>
              <p>useEffect + cleanup · Timer.js</p>
            </div>
          </div>
          <div className="card-body">
            <Timer />
          </div>
        </div>

        {/* Compteur de rendus — useRef valeur */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon amber">🔄</div>
            <div className="card-header-text">
              <h2>Compteur de Rendus</h2>
              <p>useRef valeur · CompteurRendu.js</p>
            </div>
          </div>
          <div className="card-body">
            <CompteurRendu />
          </div>
        </div>

        {/* Liste articles — Custom Hook full width */}
        <div className="card card-full">
          <div className="card-header">
            <div className="card-icon blue">🔌</div>
            <div className="card-header-text">
              <h2>Liste d'Articles</h2>
              <p>Custom Hook useFetch · ListeArticles.js</p>
            </div>
          </div>
          <div className="card-body">
            <ListeArticles />
          </div>
        </div>

      </main>

      <footer className="app-footer">
        TP Hooks React — useReducer · useRef · useEffect · useFetch
      </footer>
    </div>
  );
}

export default App;