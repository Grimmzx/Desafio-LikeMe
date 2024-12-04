import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ agregarPost }) {
  const [titulo, setTituloState] = useState('');
  const [imgSRC, setImgSRCState] = useState('');
  const [descripcion, setDescripcionState] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await agregarPost(titulo, imgSRC, descripcion);

    setTituloState('');
    setImgSRCState('');
    setDescripcionState('');
  };

  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input
          value={titulo}
          onChange={(event) => setTituloState(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input
          value={imgSRC}
          onChange={(event) => setImgSRCState(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcionState(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={handleSubmit} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
}

Form.propTypes = {
  agregarPost: PropTypes.func.isRequired,
};

export default Form;
