import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import '../styles/CoinFilter.css'; // Assuming you have a CoinFilter.css file for styles

const CoinFilter = observer(() => {
  const { article } = useContext(Context);
  
  return (
    <ul className='coinList'>
      {article.coins.map(coin =>
        <li
          key={coin.id}
          onClick={() => article.setSelectedCoin(coin)} // Assuming you want to select the coin on click
          className={coin.id === article.selectedCoin.id ? 'active' : ''}
        >
          {coin.name}
        </li>
      )}
    </ul>
  );
});

export default CoinFilter;