interface IWithLanguage {
  language: { name: string };
}

const getDescription = async (url: string, id: number) => {
  const urlPath = url + `/${id}`;
  const response = await fetch(urlPath);
  const data = await response.json();
  return data.flavor_text_entries.find(
    <T extends IWithLanguage>(text: T) => text.language.name === 'en'
  );
};

export default getDescription;
