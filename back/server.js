import express from 'express';
import cors from 'cors';
import pkg from 'pg';  
const { Pool } = pkg;  
import bodyParser from 'body-parser';

const app = express();
const port = 3000;  

app.use(cors());
app.use(bodyParser.json());  

const pool = new Pool({
  user: 'joan',  
  host: 'localhost',
  database: 'like_me', 
  password: '1234',  
  port: 5432,
});

// Ruta para obtener los posts
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).send('Error al obtener los posts');
  }
});


app.post('/posts', async (req, res) => {
  const { titulo, img, descripcion } = req.body;


  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  if (!img || img.trim() === "") {
    return res.status(400).json({ error: 'La imagen es obligatoria' });
  }

  if (!descripcion || descripcion.trim() === "") {
    return res.status(400).json({ error: 'La descripción es obligatoria' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
      [titulo, img, descripcion]
    );
    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error('Error al agregar el post:', error);
 
    return res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
