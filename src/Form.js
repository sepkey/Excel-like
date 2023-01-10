import React from "react";
///
import { Typography } from "@mui/material";
//extra
import { Paper } from "@mui/material";
///
import { Button } from "@mui/material";
///
import { TextField } from "@mui/material";
///
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
///
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
///
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

const Form = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      {/* Typography */}
      <Paper>
        <Typography variant="h3" sx={{ color: "#34ef96" }}>
          Related to form
        </Typography>
      </Paper>

      {/* Button */}
      <Button sx={{ margin: 3 }} size="large" variant="contained">
        contained
      </Button>
      <Button sx={{ margin: 3 }} size="medium" variant="outlined">
        outlined
      </Button>
      <Button sx={{ margin: 3 }} variant="text">
        text
      </Button>
      <br />
      {/* TextField */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <TextField
          value={inputs.name}
          name="name"
          type={"text"}
          sx={{ margin: 3 }}
          variant="standard"
          placeholder="name"
          onChange={handleChange}
        />
        <TextField
          value={inputs.email}
          name="email"
          type={"email"}
          sx={{ margin: 3 }}
          variant="filled"
          placeholder="filled"
          onChange={handleChange}
        />
        <TextField
          value={inputs.password}
          name="password"
          type={"password"}
          sx={{ margin: 3 }}
          variant="outlined"
          placeholder="outlined"
          onChange={handleChange}
        />
        {/* <Typography>{name}</Typography> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe"
          />
          {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
            // defaultValue="female"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
