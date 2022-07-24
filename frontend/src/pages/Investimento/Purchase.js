import React, { useState } from 'react';
import instance from '../../shared/axios.config.js'
import JWTToken from '../../utils/JWTToken.js';
const Assets = () => {
  const [ data, setData ] = useState({});
  const [ isFetching, setIsFetching ] = useState(true);
  const [ user, setUser ] = useState('');
  const [ asset, setAsset ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  const PurchaseAsset = async () => {

    instance.post('/investimentos/comprar', {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: JWTToken
        },
        data: JSON.stringify({
          userId: user,
          assetId: asset,
          quantityAsset: quantity,
        }),
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
  };

  return (
  <>
    <div>
      <h1> Compra/Venda de Ação </h1>
      <form>
        <label htmlFor="user-input">
          Digite o seu código:
          <input
                type="text"
                data-testid="user-input"
                onChange={ (ev) => setUser(ev.target.value) }
              />
        </label>
        <label htmlFor="asset-input">
          Digite o código do Ativo:
          <input
                type="text"
                data-testid="asset-input"
                onChange={ (ev) => setAsset(ev.target.value) }
              />
        </label>
        <label htmlFor="quantity-input">
          Digite a quantidade:
          <input
                type="text"
                data-testid="quantity-input"
                onChange={ (ev) => setQuantity(ev.target.value) }
              />
        </label>
        <button
          type="button"
          label="Entrar"
          onClick={ () => PurchaseAsset() }
        >
          Enviar
        </button>
      </form>
    </div>
    { isFetching && <p>{ 'Carregando...' }</p>}

    { data.id &&
      <div>
        <p>{ `Codigo do Cliente: ${ data.id }` }</p>
        <p>{ `Codigo do Ativo: ${ data.userId }` }</p>
        <p>{ `Quantidade disponivel: ${ data.quantityAsset }` }</p>
        <p>{ `Valor: R$ ${ data.price }` }</p>
      </div>
    }
  </>)
}

export default Assets;
