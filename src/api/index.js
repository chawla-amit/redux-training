export const fetchCharacters = searchTerm => {
  return new Promise(async resolve => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${
          searchTerm ? `?name=${searchTerm}` : ""
        }`
      );
      const json = await response.json();
      resolve(json.results || []);
    } catch (err) {
      console.error(err);
      resolve([]);
    }
  });
};

export const addItemToCart = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
