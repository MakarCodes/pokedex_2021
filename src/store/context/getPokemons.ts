interface IWithUrl {
  url: string;
}

const getPokemons = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  const pokemons: IPokemon[] = await Promise.all(
    data.results.map(async <T extends IWithUrl>(result: T) => {
      const response = await fetch(result.url);
      const data = await response.json();
      const { id, name, height, weight, types, sprites } = data;
      const { front_default, back_default } = sprites;
      const spritesImages = {
        front_default,
        back_default,
      };
      const pokemonTypes = types.map((type: any) => type.type.name);
      return {
        id,
        name,
        height,
        weight,
        sprites: spritesImages,
        types: pokemonTypes,
      };
    })
  );
  return pokemons;
};

export default getPokemons;