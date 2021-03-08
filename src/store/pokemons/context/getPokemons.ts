interface IWithUrl {
  url: string;
}

const getPokemons = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  const pokemons: IPokemon[] = await Promise.all(
    data.results.map(async <T extends IWithUrl>(result: T) => {
      let url = result.url;
      // unexpected problem in API - temporary fix solution to make app works
      // if (url === 'https://pokeapi.co/api/v2/pokemon/463/') {
      //   // console.log('url', url);
      //   url = 'https://pokeapi.co/api/v2/pokemon/464/';
      // }
      const response = await fetch(url);
      const data = await response.json();
      const { id, name, height, weight, types, sprites, stats } = data;
      const { front_default, back_default } = sprites;
      const spritesImages = {
        front_default,
        back_default,
      };
      const pokemonTypes = types.map((type: any) => type.type.name);
      const pokemonStats = stats.map((singleStat: any) => {
        return {
          statName: singleStat.stat.name,
          statValue: singleStat.base_stat,
        };
      });
      return {
        id,
        name,
        height,
        weight,
        sprites: spritesImages,
        types: pokemonTypes,
        stats: pokemonStats,
      };
    })
  );
  return pokemons;
};

export default getPokemons;
