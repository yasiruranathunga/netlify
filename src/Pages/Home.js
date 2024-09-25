import React, { useEffect, useState } from 'react';
import client from './contentful'; // Import your client
import './home.css'; // Import CSS

const Home = ({ entryId }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the entry by ID
    client.getEntry(entryId)
      .then((response) => {
        setPost(response.fields); // Set the post data
      })
      .catch((err) => {
        setError('Error fetching entry');
        console.error(err);
      });
  }, [entryId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!post) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="post-card">
        <h1 className="post-title">{post.name}</h1>
        <p className="post-email">{post.email}</p>
        {post.image && (
          <img
            className="post-image"
            src={post.image.fields.webImageUrl}
            alt={post.image.fields.altText}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
