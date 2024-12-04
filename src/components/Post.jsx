import React from 'react';
import PropTypes from 'prop-types'; 

const Post = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={post.img} alt={post.titulo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{post.titulo}</h5>
          <p className="card-text">{post.descripcion}</p>
          <p className="card-text"><strong>Likes:</strong> {post.likes}</p>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Post;
