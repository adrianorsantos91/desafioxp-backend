import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
import instance from '../../shared/axios.config.js'
import JWTToken from '../../utils/JWTToken.js';
const Assets = () => {
  const [data, setData] = useState({});
  const [ isFetching, setIsFetching] = useState(true);
  const { id } = useParams()
  console.log('Data: %s', data);
  useEffect(() => {
    const result = instance.get(`/ativos/${id}`, {
      headers: {
        Authorization: JWTToken,
      }
    })
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
    { isFetching && <p>{ 'Carregando...' }</p>}
    { data.id &&
      <div>
        <p>{ `Codigo do Ativo: ${ data.id }` }</p>
        <p>{ `Quantidade disponivel: ${ data.quantityAsset }` }</p>
        <p>{ `Valor: R$ ${ data.price }` }</p>
      </div>
    }
  </>)
}

export default Assets;
