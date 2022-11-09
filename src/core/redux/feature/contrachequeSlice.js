import { createSlice } from "@reduxjs/toolkit"

const contrachequeSlice = createSlice({
  name: "contracheque",
  initialState: {
    DETAILS: { resource: null, isLoading: false, isLoaded: false, failure: null },
    DETAILS_LIST: {
      resources: [],
      isLoading: false,
      isLoaded: false,
      failure: null,
    },
    LIST: { resources: [], isLoading: false, isLoaded: false, failure: null },
    PERIOD: { resources: [], isLoading: false, isLoaded: false, failure: null },
  },


  // Para buscar dados a API precisaremos das ACTIONS e do SAGA
  reducers: {
    getContracheque(state, action) {
      console.log("getContracheque", action.payload)
      state.LIST.resources = action.payload;
      // return null
    },

    // setMovies: (state, action) => {
    //   state.moviesList = action.payload;
    // },

    // getMovie(id) {

    //   return id
    // },

    // setMovie: (state, action) => {
    //   state.movie = action.payload;
    // }
  }
})


// Deixando ações disponíveis para serem usadas no middleware (thunk ou saga)
export const { getContracheque } = contrachequeSlice.actions

export default contrachequeSlice.reducer;
