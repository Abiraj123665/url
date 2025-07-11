import React from 'react';
import useUrls from '../hooks/useUrls';

const UrlList = () => {
  const { data, isLoading, error } = useUrls();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading URLs.</p>;

  return (
    <ul>
      {data.map((url) => (
        <li key={url.id}>
          <a href={url.originalUrl} target="_blank">{url.originalUrl}</a> →
          <a href={url.shortUrl} target="_blank"> {url.shortUrl}</a>
        </li>
      ))}
    </ul>
  );
};

export default UrlList;