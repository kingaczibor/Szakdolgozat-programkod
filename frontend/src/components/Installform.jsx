import { React, useState, useEffect } from "react";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Radio,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import background from "./images/blue.jpg";

const baseUrl = "http://localhost:8000";

export default function Installform(props) {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: 940,
    width: 1520,
    margin: "-10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState();
  const [ckValue, setckValue] = useState();
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    housenum: "",
    phoneNumber: "",
    email: "",
  });

  const [items, setItems] = useState([]);

  const [itemType, setItemType] = useState();
  const [itemTypes, setItemTypes] = useState();
  const [item, setItem] = useState();

  useEffect(() => {
    getItems();
  }, []);

  function handleChange(e) {
    console.log(e);
    setSelectedValue(e.target.value);
  }
  function handleChange1(e) {
    setckValue(e.target.value);
  }

  async function getItems() {
    try {
      const response = await axios.get(baseUrl + "/auth/items");

      if (response.status === 200) {
        console.log(response?.data);
        setItems(response?.data?.items);
        setItemTypes(response?.data?.item_types);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function appendToInstalls() {
    try {
      const response = await axios.post(baseUrl + "/auth/install-create/", {
        firstName: person.firstName,
        lastName: person.lastName,
        city: person.city,
        street: person.street,
        housenum: person.housenum,
        phone: person.mobile,
        email: person.email,
        isClient: selectedValue,
        item: item?.id,
        has_item: ckValue,
      });

      if (response.status === 200) {
        console.log("sikerült");

        navigate("/end");
        toast.success("Sikeres beküldés");
      }
    } catch (error) {
      console.log(error);
      toast.error("Sikertelen beküldés, kérjük ellenőrizze a beírt adatokat!");
    }
  }
 

  return (
    <>
      <div style={myStyle}>
        <Button
          variant={"standard"}
          sx={{ color: "red" }}
          onClick={() => navigate("/install")}
        >
          vissza
        </Button>
        <Grid container justifyContent={"center"}>
          <Grid container justifyContent={"center"}>
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold" }}
              color="#800000"
            >
              Személyes adatok
            </Typography>
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={6}>
            <TextField
              style={{ background: "white" }}
              fullWidth
              label="Vezetéknév"
              type="text"
              variant="outlined"
              onChange={(e) => {
                let copy = { ...person };
                copy.lastName = e.target.value;
                setPerson(copy);
              }}
              value={person.lastName}
            />
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={6}>
            <TextField
              style={{ background: "white" }}
              fullWidth
              label="Keresztnév"
              type="text"
              variant="outlined"
              onChange={(e) => {
                let copy = { ...person };
                copy.firstName = e.target.value;
                setPerson(copy);
              }}
              value={person.firstName}
            />
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={6}>
            <TextField
              style={{ background: "white" }}
              fullWidth
              label="Város"
              type="text"
              variant="outlined"
              onChange={(e) => {
                let copy = { ...person };
                copy.city = e.target.value;
                setPerson(copy);
              }}
              value={person.city}
            />
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={6}>
            <TextField
              style={{ background: "white" }}
              fullWidth
              label="Utca"
              type="text"
              variant="outlined"
              onChange={(e) => {
                let copy = { ...person };
                copy.street = e.target.value;
                setPerson(copy);
              }}
              value={person.street}
            />
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={6}>
            <TextField
              style={{ background: "white" }}
              fullWidth
              label="Házszám"
              type="text"
              variant="outlined"
              onChange={(e) => {
                let copy = { ...person };
                copy.housenum = e.target.value;
                setPerson(copy);
              }}
              value={person.housenum}
            />
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={6}>
            <TextField
              style={{ background: "white" }}
              fullWidth
              label="Telefonszám"
              type="text"
              variant="outlined"
              onChange={(e) => {
                let copy = { ...person };
                copy.mobile = e.target.value;
                setPerson(copy);
              }}
              value={person.mobile}
            />
          </Grid>
          <Grid container alignItems={"center"}>
            <Grid item padding={"10px"} xs={12} sm={6}>
              <TextField
                style={{ background: "white" }}
                fullWidth
                label="email"
                type="text"
                variant="outlined"
                onChange={(e) => {
                  let copy = { ...person };
                  copy.email = e.target.value;
                  setPerson(copy);
                }}
                value={person.email}
              />
            </Grid>
            <Grid item padding={"10px"} xs={12} sm={12}>
              <Grid justifyContent={"center"} padding={"10px"}>
                <Typography align={"center"} variant={"h6"}>
                  Ön vette már igénybe a cég szolgáltatásait?
                </Typography>
              </Grid>
              <Grid container justifyContent={"center"} alignItems={"center"}>
                Igen
                <Radio
                  label="igen"
                  checked={selectedValue === "igen"}
                  onChange={handleChange}
                  value="igen"
                />
                Nem
                <Radio
                  checked={selectedValue === "nem"}
                  onChange={handleChange}
                  value="nem"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            padding={"10px"}
            sx={{ borderTop: "3px solid grey" }}
          >
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold" }}
              color="#800000"
            >
              {" "}
              Technikai részletek
            </Typography>
          </Grid>
          <Grid container padding={"10px"} justifyContent={"center"}>
            <Grid conteiner item padding={"10px"} xs={12} sm={6}>
              <FormControl fullWidth style={{ background: "white" }}>
                <InputLabel>Beüzemelendő eszköz kategóriája</InputLabel>
                <Select
                  value={itemType ? JSON.stringify(itemType) : ""}
                  label="Beüzemelendő eszköz kategóriája"
                  onChange={(event) =>
                    setItemType(JSON.parse(event.target.value))
                  }
                >
                  {itemTypes?.map((_item) => (
                    <MenuItem value={JSON.stringify(_item)}>
                      {_item?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container padding={"10px"} justifyContent={"center"}>
            <Grid container item padding={"10px"} xs={12} sm={6}>
              <FormControl fullWidth style={{ background: "white" }}>
                <InputLabel id="demo-simple-select-label">
                  Beüzemelendő eszköz típusa
                </InputLabel>
                <Select
                  disabled={!itemType}
                  labelId="demo-simple-select-label"
                  Id="demo-simple-select"
                  value={item ? JSON.stringify(item) : ""}
                  label="Beüzemelendő eszköz típusa"
                  onChange={(event) => setItem(JSON.parse(event.target.value))}
                >
                  {items?.map((_item) => {
                    if (_item?.item_type === itemType?.id)
                      return (
                        <MenuItem value={JSON.stringify(_item)}>
                          {_item?.name}
                        </MenuItem>
                      );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item padding={"10px"} xs={12} sm={12}>
            <Grid justifyContent={"center"} padding={"10px"}>
              <Typography align={"center"} variant={"h6"}>
                Rendelkezik Ön a kívánt eszközzel?
              </Typography>
            </Grid>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              Igen
              <Radio
                label="igen"
                checked={ckValue === "igen"}
                onChange={handleChange1}
                value="igen"
              />
              Nem
              <Radio
                checked={ckValue === "nem"}
                onChange={handleChange1}
                value="nem"
              />
            </Grid>
          </Grid>

          <Grid container item padding={"20px"} justifyContent={"center"}>
            <Button
              style={{ background: "green", color: "white" }}
              onClick={() => appendToInstalls()}
              variant="contained"
            >
              Szolgáltatási igény beküldése
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
