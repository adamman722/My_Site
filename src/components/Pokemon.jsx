import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";

function Pokemon(params) {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [isShinny, setIsShinny] = useState();
  const [value, setValue] = React.useState("");
  const [pokemonVariant, setPokemonVariant] = useState("");
  const [pokemonNames, setPokemonNames] = useState([]);

  const getPokemon = async () => {
    console.log(pokemon);
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isShinny) {
      setPokemonVariant("front_shiny");
    } else if (!isShinny) {
      setPokemonVariant("front_default");
    } else {
      setPokemonVariant("front_default");
    }
    getPokemon();
    console.log(pokemonVariant);
  };

  const handleRadioChange = (e) => {
    setValue(e.target.value);
    e.target.value === "Normal" ? setIsShinny(false) : setIsShinny(true);
    console.log(isShinny);
  };

  const GrabAllPokemonNames = async () => {
    const toArray = [];

    const pokemonNames = [];
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=897";
      const res = await axios.get(url);
      toArray.push(res.data.results);
      toArray.map((data) => {
        data.map((pokemon) => {
          pokemonNames.push(pokemon.name);
        });
      });
      setPokemonNames(pokemonNames);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GrabAllPokemonNames();
  }, []);

  return (
    <div className="pokemonFullContainer">
      <form onSubmit={handleSubmit} className="pokemonForm">
        <label htmlFor="">
          {/* <Autocomplete
            options={pokemonNames}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input
                  onChange={handleChange}
                  value={pokemon}
                  {...params.inputProps}
                  type="text"
                  placeholder="Enter pokemon name"
                  className="pokemonInput"
                />
              </div>
            )}
          /> */}
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter pokemon name"
            className="pokemonInput"
          />
        </label>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <FormControlLabel
            value="Shinny"
            control={<Radio style={{ color: "black" }} />}
            label="Shinny"
          />
          <FormControlLabel
            value="Normal"
            control={<Radio style={{ color: "black" }} />}
            label="Normal"
          />
        </RadioGroup>
      </form>

      {pokemonData.map((data) => {
        return (
          <div className="pokemonContainer">
            <img
              src={data.sprites[`${pokemonVariant}`]}
              alt=""
              className="pokemonImg"
            />
            <div className="pokemonTable">
              <div className="pokemonTableBody">
                <div className="pokemonTableRow">
                  <div className="pokemonTableCell">type</div>
                  <div className="pokemonTableCell">{pokemonType}</div>
                </div>
                <div className="pokemonTableRow">
                  <div className="pokemonTableCell">height</div>
                  <div className="pokemonTableCell">
                    {""}
                    {Math.round(data.height)}
                  </div>
                </div>
                <div className="pokemonTableRow">
                  <div className="pokemonTableCell">Weight</div>
                  <div className="pokemonTableCell">
                    {Math.round(data.weight / 4.3)}lbs
                  </div>
                </div>
                <div className="pokemonTableRow">
                  <div className="pokemonTableCell">Number of battles</div>
                  <div className="pokemonTableCell">
                    {data.game_indices.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pokemon;
