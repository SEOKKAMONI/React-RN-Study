import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // API
    .then((response) => response.json())
    .then((json) => {
      setCoins(json) // coin json 파일을 받고
      setLoading(false); // json파일을 다받았으니 false로 바꾸어 loading... 이 화면에 보이지 않게 한다
    });
  }, []) // 처음 한번만 작동
  return (
   <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? <strong>Loading...</strong>: 
    <select>
      {coins.map((coin) => <option>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
    </select>
    }
   </div>
  );
}

export default App;
