import React from 'react';
import classes from './helloworldComponent.scss';
import logoImg from './content/react-icon.png';

const getEnviromentVariableInUpperCase = () => process.env.ENVIRONMENT.toUpperCase();

export const HelloWorldComponent = () => {
  return (
    <div>
      <img src={logoImg} alt="Imagen" className={classes.logoImg} />
      <div>
        <h1>Hola Mundo con REACT!</h1>
        <h2>Esto es {getEnviromentVariableInUpperCase()}</h2>
      </div>
    </div>
  )
}