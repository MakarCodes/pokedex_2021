export const useQuery = (key: string, location: any) => {
  const query = new URLSearchParams(location.search);
  return query.get(`${key}`);
};
