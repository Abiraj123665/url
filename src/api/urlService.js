// export const fetchUrls = async () => {
//   const res = await fetch('https://your-api.com/urls');
//   if (!res.ok) throw new Error('Failed to fetch');
//   return res.json();
// };


export const createShortUrl = async ({ originalUrl }) => {
  await new Promise((res) => setTimeout(res, 500)); // simulate network delay
  return { shortUrl: 'https://short.ly/xyz123' }; // mock short URL
};
