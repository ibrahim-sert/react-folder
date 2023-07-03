import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(2);

  const [valueR, setValueR] = React.useState([20, 37]);

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

  const handleRange = (event, newValueR) => {
    setValueR(newValueR);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container  sx={{borderRadius: "10px" ,zIndex:"1300"}}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={3}>
        <Typography>HOME</Typography>
        <Typography>RESIDENCE</Typography>
        <Typography>LAND/FARM</Typography>
        <Typography>WORKPLACE</Typography>
        <Typography>LAKE</Typography>
        <Typography>HISTORIC</Typography>
        <Typography>REST/FUN</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={3}>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <Typography>Rent / Sale...</Typography>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <Typography>Country</Typography>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <Typography>State</Typography>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <Select
            sx={{ borderRadius: 5 }}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <Typography>Room</Typography>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
