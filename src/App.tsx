import { BrowserRouter, Route, Routes } from 'react-router-dom'
// 8b4b8ece
import Home from "./pages/Home"
import Movie from "./pages/Movie"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          {/* <Route path="/movie/:id" element={<Movie />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT

export default App;


// api.js:7 Estou na fetchContracheque
// contrachequeSaga.js:38 RESPOSTA  {mins: 5, price: '17133.85270072'}
// contrachequeSlice.js:21 getContracheque {mins: 5, price: '17133.85270072'}
// contrachequeSaga.js:33 Estou no onLoadContrachequeAsync 
// api.js:7 Estou na fetchContracheque
// contrachequeSaga.js:38 RESPOSTA  {mins: 5, price: '17134.29774460'}
// contrachequeSlice.js:21 getContracheque {mins: 5, price: '17134.29774460'}
// contrachequeSaga.js:33 Estou no onLoadContrachequeAsync 
// api.js:7 Estou na fetchContracheque
