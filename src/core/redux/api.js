import axios from 'axios'

// const  API_ENDPOINT = "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT"
const  API_ENDPOINT = "https://api.github.com/users"
//const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export const fetchContracheque = async () => {
  console.log("Estou na fetchContracheque")
  return axios.get(`${API_ENDPOINT}`)
}

// export const fetchMovie = async (movieId) => {
//   console.log("Estou na fetchMovie que recebe o movieId ", movieId)
//   return axios.get(`${API_ENDPOINT}&i=${movieId}`)
// }

// Agora iremos configurar o SAGA para usar esse métodos