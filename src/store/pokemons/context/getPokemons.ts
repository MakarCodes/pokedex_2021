interface IWithUrl {
  url: string;
}

const getRequiredPokemonData = (data: any) => {
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
};

const getPokemons = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  const pokemonsData: IPokemon | 'error'[] = await Promise.all(
    data.results.map(async <T extends IWithUrl>(result: T) => {
      try {
        let url = result.url;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        return 'error';
      }
    })
  );
  const dataWithoutErrors = pokemonsData.filter(
    pokemonData => pokemonData !== 'error'
  );
  const pokemons = dataWithoutErrors.map(singleData =>
    getRequiredPokemonData(singleData)
  );
  return pokemons;
};

export default getPokemons;
