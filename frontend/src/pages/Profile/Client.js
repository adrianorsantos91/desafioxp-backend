import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
import instance from '../../shared/axios.config.js'
const JWTToken  = "eyJhbGciOiJIUzI1NiJ9.YWRyaWFub0BnbWFpbC5jb20.kQNlR54aUIvCn7n2CrL7Q0q6sdLXRgJ-_sPSgLhikRU";
const Client = () => {
  const [data, setData] = useState([]);
  const [ isFetching, setIsFetching] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    const result = instance.get(`/conta/${id}`, {
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
    { isFetching && <p>Carregando...</p>}
    <div>
      <ul>
        <li>
          <p>{ `Codigo do Cliente: ${ data.id }` }</p>
          <p>{ `Saldo disponivel: R$ ${ data.amount }` }</p>
        </li>
      </ul>
    </div>
  </>)
}

export default Client;
