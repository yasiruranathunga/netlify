import React, { useEffect, useState } from 'react';
import client from './contentful';  // Import your client

const Home = ({ entryId }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the entry by ID
    client.getEntry(entryId)
      .then((response) => {
        setPost(response.fields);  // Set the post data
      })
      .catch((err) => {
        setError('Error fetching entry');
        console.error(err);
      });
  }, [entryId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }
  console.log(post);
  return (
    <div>
      
      <h1>{post.name}</h1>
      <h1>{post.email}</h1>
      <img src={post.image.fields.webImageUrl} alt={post.image.fields.altText}/>
    </div>
  );
};

export default Home;
