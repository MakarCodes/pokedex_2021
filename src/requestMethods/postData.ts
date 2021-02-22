interface IData {
  [key: string]: any;
}

export const postData = async (url: string, data: IData) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const dataFromResponse = await response.json();
  return dataFromResponse;
};
