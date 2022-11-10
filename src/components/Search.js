import React, { useState, useEffect } from "react";
// import { TextField } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
// import useStyles from "../styles"
import { getContracheque } from "../core/redux/feature/contrachequeSlice";

const Search = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("spider");
  //console.log(useSelector((state) => ({ ...state.contracheque})))
  //const classes = useStyles()
  const { LIST } = useSelector((state) => ({ ...state.contracheque }));
  console.log("contracheque ", LIST);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(getContracheque("TESTE"));
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []); // <- add empty brackets here

  return (
    <>
      {/* <h1>I've rendered {count} times!</h1> */}
      <h2>Movie Search App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          // fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {LIST?.Error && (
          <p>
            <h4>{LIST.Error}</h4>
          </p>
        )}
      </form>
    </>
  );
};

export default Search;
