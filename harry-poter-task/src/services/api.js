const BASE_URL = "https://potterapi-fedeperin.vercel.app/en";

export const getData = async (endPoint) => {
  const response = await fetch(`${BASE_URL}/${endPoint}`);
  return await response.json();
};


