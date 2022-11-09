import React, { useState, useEffect } from 'react'
// import { TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
// import useStyles from "../styles"
import { getContracheque } from "../core/redux/feature/contrachequeSlice"

const Search = () => {
  const [count, setCount] = useState(0);

  console.log("ESTOU")
  const [name, setName] = useState("spider")
  //console.log(useSelector((state) => ({ ...state.contracheque})))
  //const classes = useStyles()
  const { DETAILS } = useSelector((state) => ({ ...state.contracheque}))
  console.log("contracheque ", DETAILS)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect")
    dispatch(getContracheque())
    
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []); // <- add empty brackets here

  return (
    <>
    <h1>I've rendered {count} times!</h1>
      <h2>Movie Search App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          // fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        { DETAILS?.Error && <p><h4>{DETAILS.Error}</h4></p>}

      </form>
    </>
  )
}

export default Search
