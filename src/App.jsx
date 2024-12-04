import React, { useState } from 'react';
import Form from './components/Form'; 
import Post from './components/Post'; 

function App() {
  const [posts, setPosts] = useState([]);

  const agregarPost = async (titulo, imgSRC, descripcion) => {
    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo, img: imgSRC, descripcion }),
      });

      const data = await response.json();
      if (response.ok) {
        setPosts([...posts, data]); 
      } else {
        alert('Error al agregar el post');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      alert('Error al agregar el post');
    }
  };

  return (
    <div className="App">
      <Form agregarPost={agregarPost} />
      <div className="row">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
