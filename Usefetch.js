import { useState, useEffect } from 'react';

// Convention : les hooks personnalisés commencent toujours par "use"
function useFetch(url) {
  const [donnees, setDonnees] = useState(null);
  const [enCours, setEnCours] = useState(true);
  const [probleme, setProbleme] = useState(null);

  useEffect(() => {
    setEnCours(true);
    setProbleme(null);

    fetch(url)
      .then((reponse) => {
        if (!reponse.ok)
          throw new Error(`Erreur HTTP : ${reponse.status}`);
        return reponse.json();
      })
      .then((resultat) => setDonnees(resultat))
      .catch((err) => setProbleme(err))
      .finally(() => setEnCours(false));
  }, [url]);

  return { donnees, enCours, probleme };
}

export default useFetch;