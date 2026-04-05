import useFetch from './Usefetch';
import './ListeArticles.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const LIMITE = 9;

function ListeArticles() {
  const { donnees, enCours, probleme } = useFetch(API_URL);

  if (enCours) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <p>useFetch → fetch(url) en cours…</p>
      </div>
    );
  }

  if (probleme) {
    return (
      <div className="error-state">
        <span className="error-icon">❌</span>
        <p>{probleme.message}</p>
      </div>
    );
  }

  const apercu = Array.isArray(donnees) ? donnees.slice(0, LIMITE) : [];

  return (
    <div className="liste-articles">
      <div className="articles-stats">
        <div className="stat-pill">
          Total API <span className="stat-val">{donnees?.length ?? 0}</span>
        </div>
        <div className="stat-pill">
          Affichés <span className="stat-val">{apercu.length}</span>
        </div>
        <div className="stat-pill">
          Source <span className="stat-val">jsonplaceholder</span>
        </div>
      </div>

      <div className="articles-grid">
        {apercu.map((article) => (
          <div className="article-item" key={article.id}>
            <span className="article-num">#{article.id}</span>
            <p className="article-title">{article.title}</p>
          </div>
        ))}
      </div>

      <div className="hook-info">
        <span>useFetch(url)</span> retourne &#123; donnees, enCours, probleme &#125;<br />
        <span>useEffect([url])</span> → se relance si l'URL change<br />
        <span>Array.isArray()</span> → sécurise l'appel à .map()
      </div>
    </div>
  );
}

export default ListeArticles;