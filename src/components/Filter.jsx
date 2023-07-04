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
// import data from "../data";
import axios from "axios";
function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("Rent / Sale");
  const [statuses, setStatuses] = useState("Rent / Sale");
  const [country, setCountry] = useState("Country");
  const [countries, setCountries] = useState("Country");
  const [state, setState] = useState("State");
  const [states, setStates] = useState("State");
  const [room, setRoom] = useState("Room");
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [products, setProducts] = useState([]);

  const [valueR, setValueR] = React.useState([20, 37]);
  const [filterProducts, setFilterProducts] = useState([]);
  const getData = async () => {
    const { data } = await axios(
      "https://63ef8796271439b7fe70b81b.mockapi.io/api/v1/users"
    );

    setProducts(data);
    setFilterProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);

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

  // useEffect(() => {
  //   const filteredProducts = products?.filter((item) =>
  //     // (status === "Rent / Sale" || item.status === status) &&
  //     // (country === "Country" || item.country === country) &&
  //     // (state === "State" || item.state === state) &&
  //     // (room === "Room" || item.room === room) &&
  //     // item.price === price &&
  //     // item.title.toLowerCase().includes(search.toLowerCase())

  //     console.log(item)
  //   );

  //   if (sortOption === "az") {
  //     filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  //   } else if (sortOption === "za") {
  //     filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  //   } else if (sortOption === "lowToHigh") {
  //     filteredProducts.sort((a, b) => a.price - b.price);
  //   } else if (sortOption === "highToLow") {
  //     filteredProducts.sort((a, b) => b.price - a.price);
  //   }
  //   const uniqueProduct = [
  //     ...new Set(
  //       products
  //         .filter((item) => item.status.includes(status))
  //         .map((item) => item.product)
  //     ),
  //   ];
  //   const uniqueStatus = [
  //     ...new Set(
  //       products
  //         .filter(
  //           (item) =>
  //             country === "Rent / Sale" || item.country.includes(country)
  //         )
  //         .map((item) => item.status)
  //     ),
  //   ];
  //   const uniqueCountries = [
  //     ...new Set(
  //       products
  //         .filter((item) => state === "Room" || item.state.includes(state))
  //         .map((item) => item.country)
  //     ),
  //   ];
  //   const uniqueStates = [
  //     ...new Set(
  //       products
  //         .filter((item) => room === "Room" || item.room.includes(room))
  //         .map((item) => item.state)
  //     ),
  //   ];
  //   const uniqueRooms = [
  //     ...new Set(
  //       products
  //         .filter((item) => state === "State" || item.state.includes(state))
  //         .map((item) => item.room)
  //     ),
  //   ];
  //   setProduct(uniqueProduct);
  //   setStatus(uniqueStatus);
  //   setCountry(uniqueCountries);
  //   setState(uniqueStates);
  //   setRoom(uniqueRooms);
  //   setFilterProducts(filteredProducts);
  // }, []);

  const handleRange = (event, newValueR) => {
    setValueR(newValueR);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
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
    setCountry("Country");
    setState("State");
    setRoom("Room");
  };
  const handleChangeCountries = (e) => {
    setCountry(e.target.value);
    setState("State");
    setRoom("Room");
  };
  const handleChangeStates = (e) => {
    setState(e.target.value);
    setRoom("Room");
  };
  const handleChangeRooms = (e) => {
    setRoom(e.target.value);
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
            <MenuItem value="Rent / Sale">Rent / Sale</MenuItem>
            {products?.map((item) => (
              <MenuItem key={item.id} value={item.status}>
                {item.status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={country}
            onChange={handleChangeCountries}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Country">Country</MenuItem>
            {products?.map((item) => (
              <MenuItem key={item.id} value={item.country}>
                {item.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={state}
            onChange={handleChangeStates}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="State">State</MenuItem>
            {products?.map((item) => (
              <MenuItem key={item.id} value={item.state}>
                {item.state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={room}
            onChange={handleChangeRooms}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Room">Room</MenuItem>
            {products?.map((item) => (
              <MenuItem key={item.id} value={item.room}>
                {item.room}
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
            id="time"
            type="text"
            value="how"
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
        <Button variant="contained" sx={btnClear}>
          Clear
        </Button>
      </Box>
    </Container>
  );
};

export default Filter;
