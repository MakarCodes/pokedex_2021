interface IWithLanguage {
  language: { name: string };
}

const getDescription = async (url: string, id: string) => {
  const urlPath = url + `/${id}`;
  const response = await fetch(urlPath);
  const data = await response.json();
  const description = data.flavor_text_entries.find(
    <T extends IWithLanguage>(text: T) => text.language.name === 'en'
  );
  const convertedDescription = description.flavor_text.replace(/\u21b5/g, '');
  return convertedDescription;
};

export default getDescription;
