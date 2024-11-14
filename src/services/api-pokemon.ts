import { Player } from 'src/types/player';

const request = async (url: string) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return { ...data };
    });
};

const getRandom = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getInitialData = async () => {
  return await request('https://pokeapi.co/api/v2/pokemon')
    .then((data) => {
      const { results } = data;
      return results;
    })
    .then(async (data) => {
      // All Pokemons
      let randomIndex = getRandom(data.length);
      const urlOne = data[randomIndex];

      const filtered = data.filter((item: Player) => item.name !== urlOne.name);

      randomIndex = getRandom(filtered.length);
      const urlTwo = filtered[randomIndex];

      // Data of selected Pokemons
      const playerOne = await getPokemonData(urlOne.url);
      const playerTwo = await getPokemonData(urlTwo.url);

      //  Movements
      randomIndex = getRandom(playerOne.moves.length);
      const moveOne = await getPokemonMovement(playerOne.moves[randomIndex].move.url);
      playerOne.move = moveOne;

      randomIndex = getRandom(playerOne.moves.length);
      const moveTwo = await getPokemonMovement(playerTwo.moves[randomIndex].move.url);
      playerTwo.move = moveTwo;

      return [playerOne, playerTwo];
    })
    .catch(() => {
      throw Error('Error getting pokemon list');
    });
};

const getPokemonData = async (url: string) => {
  return request(url);
};

const getPokemonMovement = async (url: string) => {
  return request(url);
};

export { getInitialData, getPokemonData, getPokemonMovement };
