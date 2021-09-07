import React from 'react';
import { useHistory } from "react-router-dom";


export default function AboutPage() {
  const history = useHistory();

  return (
    <>
      <h1>Страница Информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt aperiam autem sed laudantium eveniet ipsam a non natus aspernatur expedita consectetur eos veniam ratione modi asperiores laboriosam, perspiciatis beatae.</p>
      <button onClick={() => history.push('/')} className="btn">Обратно к списку дел</button>
    </>
  )
}
