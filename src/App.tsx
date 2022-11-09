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
          {/* <Route path="/movie" element={<Movie />} /> */}
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT

export default App;

