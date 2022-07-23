import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
import instance from '../../shared/axios.config.js'
const JWTToken  = "eyJhbGciOiJIUzI1NiJ9.YWRyaWFub0BnbWFpbC5jb20.kQNlR54aUIvCn7n2CrL7Q0q6sdLXRgJ-_sPSgLhikRU";
const AssetsByClient = () => {
  const [data, setData] = useState([]);
  const [ isFetching, setIsFetching] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    const result = instance.get(`/ativos/clientes/${id}`, {
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
    { data.map((inv) => (
        <div key={ inv.assetId }>
          <ul>
            <li>
              <p>{ `Codigo do Cliente: ${ inv.clientId }` }</p>
              <p>{ `Codigo do Ativo: ${ inv.assetId }` }</p>
              <p>{ `Quantidade: ${ inv.quantityAsset }` }</p>
              <p>{ `Valor: R$ ${ inv.price }` }</p>
            </li>
          </ul>
        </div>
      )
    )}

  </>)
}

export default AssetsByClient;
