import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  MenuItem,
  Rating,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("Rent / Sale");
  const [statuses, setStatuses] = useState([]);
  const [country, setCountry] = useState("Country");
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState("State");
  const [states, setStates] = useState([]);
  const [room, setRoom] = useState("Room");
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [value, setValue] = React.useState(0);
  const [products, setProducts] = useState([]);

  const [valueR, setValueR] = React.useState([20, 37]);
  const [filterProducts, setFilterProducts] = useState([]);

  const [filteredStates, setFilteredStates] = useState([]);

  console.log(products);
  const btnSearch = {
    backgroundColor: "#93CD28",
    color: "black",
    fontWeight: "bold",
    marginRight: "20px",
    width: "500px",
    padding: "10px",
    "&:hover": {
      fontWeight: "bold",
      border: " solid #93CD28",
      color: "#93CD28",
      backgroundColor: "white",
    },
  };
  const btnClear = {
    backgroundColor: "#F68915",
    color: "black",
    fontWeight: "bold",
    padding: "10px",
    "&:hover": {
      fontWeight: "bold",
      border: " solid #F68915",
      color: "#F68915",
      backgroundColor: "white",
    },
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://63ef8796271439b7fe70b81b.mockapi.io/api/v1/users"
      );
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredCountries = products
      .filter((item) => item.status === status)
      .map((item) => item.country);
    setFilteredCountries([...new Set(filteredCountries)]);
  }, [status, products]);

  useEffect(() => {
    const filteredStates = products
      .filter((item) => item.status === status && item.country === country)
      .map((item) => item.state);
    setFilteredStates([...new Set(filteredStates)]);
  }, [status, country, products]);

  useEffect(() => {
    const filteredRooms = products
      .filter(
        (item) =>
          item.status === status &&
          item.country === country &&
          item.state === state
      )
      .map((item) => item.room);
    setFilteredRooms([...new Set(filteredRooms)]);
  }, [status, country, state, products]);

  const handleRange = (event, newValueR) => {
    setValueR(newValueR);
  };

  const handleProductChange = (e) => {
    setProduct(e.target.value);
    setStatus("Rent / Sale");
    setCountry("Country");
    setState("State");
    setRoom("Room");
  };
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
    setCountry("");
    setState("");
    setRoom("");
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
    setState("");
    setRoom("");
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
    setRoom("");
  };

  const handleChangeRoom = (e) => {
    setRoom(e.target.value);
  };

  const handleClear = () => {
    setFilteredCountries([]);
    setFilteredStates([]);
    setFilteredRooms([]);
    setRoom("");
    setStatus("");
  };

  return (
    <Container
      sx={{
        borderRadius: "10px",
        border: "1px solid gray",
        zIndex: 1300,
        position: "relative",
        bottom: "70px",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={3}>
        {products?.map((item) => (
          <MenuItem key={item.id} value={item.product}>
            {item.product}
          </MenuItem>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={3}>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={status}
            onChange={handleChangeStatus}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Rent / Sale</MenuItem>
            <MenuItem value="Rent">Rent</MenuItem>
            <MenuItem value="Sale">Sale</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={country}
            onChange={handleChangeCountry}
          >
            <MenuItem value="">Country</MenuItem>
            {filteredCountries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={state}
            onChange={handleChangeState}
          >
            <MenuItem value="">State</MenuItem>
            {filteredStates.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={room}
            onChange={handleChangeRoom}
          >
            <MenuItem value="">Room</MenuItem>
            {filteredRooms.map((room) => (
              <MenuItem key={room} value={room}>
                {room}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
          pt={3}
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <FormControlLabel control={<Checkbox />} label="ReSale" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={3}>
        <Box width="400px">
          <TextField
            id="search"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            sx={{ width: "400px" }}
          />
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography pt={2} pr={3}>
              Price :
            </Typography>
            <TextField
              value={valueR[0]}
              variant="outlined"
              sx={{ marginRight: "15px" }}
            />
            <Typography sx={{ marginRight: "15px" }} pt={2}>
              -
            </Typography>
            <TextField
              value={valueR[1]}
              variant="outlined"
              sx={{ marginRight: "15px" }}
            />
            <TextField type="date" width={200} />
          </Box>
          <Slider
            sx={{ width: 300, color: "orange" }}
            getAriaLabel={() => "Temperature range"}
            value={valueR}
            onChange={handleRange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <Button sx={btnSearch} variant="contained">
          Search
        </Button>
        <Button onClick={handleClear} variant="contained" sx={btnClear}>
          Clear
        </Button>
      </Box>
    </Container>
  );
};

export default Filter;
