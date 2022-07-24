import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
import instance from '../../shared/axios.config.js'
import JWTToken from '../../utils/JWTToken.js';
const Client = () => {
  const [data, setData] = useState([]);
  const [ isFetching, setIsFetching] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    instance.get(`/conta/${id}`, {
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
  });

  return (
  <>
    { isFetching && <p>{ "Carregando..." }</p>}
    { data.id &&
      <div>
        <p>{ `Codigo do Cliente: ${ data.id }` }</p>
        <p>{ `Saldo disponivel: R$ ${ data.amount }` }</p>
      </div>
    }
  </>)
}

export default Client;
