import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createShortUrl } from '../api/urlService';


const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createShortUrl,
    onSuccess: (data) => {
      setShortUrl(data.shortUrl);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originalUrl) return;
    setShortUrl(''); // reset before new call
    mutate({ originalUrl });
  };

  return (
    <div style={styles.container}>
      <h2>AR Shortener</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter URL..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={isPending}>
          {isPending ? 'Shortening...' : 'Shorten'}
        </button>
      </form>

      {isError && (
        <div style={styles.error}>❌ {error.message || 'Something went wrong'}</div>
      )}

      {shortUrl && (
        <div style={styles.result}>
          <strong>Shortened URL:</strong>
          <input
            value={shortUrl}
            readOnly
            style={styles.shortenedInput}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    border: '2px solid black',
    borderRadius: '20px',
    width: '400px',
    margin: '4rem auto',
    fontFamily: 'sans-serif',
  },
  form: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid black',
  },
  button: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid black',
    cursor: 'pointer',
  },
  result: {
    marginTop: '1.5rem',
  },
  shortenedInput: {
    marginLeft: '1rem',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid black',
    width: '220px',
  },
  error: {
    marginTop: '1rem',
    color: 'red',
    fontWeight: 'bold',
  },
};

export default UrlForm;
