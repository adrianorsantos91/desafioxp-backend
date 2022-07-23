import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
import instance from '../../shared/axios.config.js'
import JWTToken from '../../utils/JWTToken.js';
const AssetsByClient = () => {
  const [data, setData] = useState([]);
  const [ isFetching, setIsFetching] = useState(true);
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
    { data && data.map((inv) => (
        <div key={ inv.assetId }>
            <div>
              <p>{ `Codigo do Cliente: ${ inv.clientId }` }</p>
              <p>{ `Codigo do Ativo: ${ inv.assetId }` }</p>
              <p>{ `Quantidade: ${ inv.quantityAsset }` }</p>
              <p>{ `Valor: R$ ${ inv.price }` }</p>
            </div>
        <br />
        </div>
      )
    )}

  </>)
}

export default AssetsByClient;
