import './NotFound.scss';
import { BASE_URL } from '../../configuration/ApiConst';
import React from 'react';

export default function NotFound() {
  
  return (
    <div className="NotFound">
      <div className="container">
        <h1>404</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <a href={BASE_URL}>Volver al inicio</a>
      </div>
    </div>
  );
}
