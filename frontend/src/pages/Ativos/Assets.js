import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/';
import instance from '../../shared/axios.config.js'
// import axios from 'axios';
const JWTToken  = "eyJhbGciOiJIUzI1NiJ9.YWRyaWFub0BnbWFpbC5jb20.kQNlR54aUIvCn7n2CrL7Q0q6sdLXRgJ-_sPSgLhikRU";
const Assets = () => {
  const [data, setData] = useState({});
  const [ isFetching, setIsFetching] = useState(false);
  const { id } = useParams()
  // const history = useHistory()
  // const idAsset = history.location.pathname.split('/')[2];
  // const [error, setError] = useState(null);
console.log('Data: %s', data);
  useEffect(() => {
    const result = instance.get(`/ativos/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch((err) => {
        console.log('error: %s', err);
      })
      .finally(() => {
        setIsFetching(false);
      })

    console.log(result);
  }, {});

  return (
  <>
    { isFetching && <p>Carregando...</p>}
      <p>{ `Codigo do Ativo: ${ data.id }` }</p>
      <p>{ `Quantidade disponivel: ${ data.quantityAsset }` }</p>
      <p>{ `Valor: R$ ${ data.price }` }</p>
  </>)
}

export default Assets;


