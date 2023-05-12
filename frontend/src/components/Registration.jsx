import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";

import TextField from "@mui/material/TextField";

const baseUrl = "http://localhost:8000";

export default function Registration() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const disabled = false;

  async function register() {
    setLoading(true);
    try {
      const response = await axios.post(baseUrl + "/auth/user/", {
        email: email,
        password: password,
      });

      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{"body { background-color: honeydew; }"}</style>
      <Button variant={"standard"} onClick={() => navigate("/dashboard")}>
        vissza
      </Button>
      <Grid
        justifyContent={"center"}
        align={"center"}
        marginTop={"30px"}
        padding={"20px"}
      >
        <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
          Dolgozói regisztráció
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} padding={"10px"}>
        <Grid item xs={12} sm={10} md={6} xl={4}>
          <Paper elevation={6}>
            <Grid container padding={"10px"}>
              <Grid item xs={12} paddingY={"5px"}>
                <TextField
                  fullWidth
                  label="Email"
                  size={"small"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12} paddingY={"5px"}>
                <TextField
                  fullWidth
                  label="Jelszó"
                  size={"small"}
                  onChange={(e) => setPassword(e.target.value)}
                  type={"password"}
                  value={password}
                />
              </Grid>
              <Grid item xs={12} paddingY={"5px"}>
                <TextField
                  fullWidth
                  label="Jelszó megerősítése"
                  size={"small"}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  type={"password"}
                  value={passwordConfirm}
                />
              </Grid>
              <Grid item xs={12} paddingY={"5px"}>
                <LoadingButton
                  disabled={disabled}
                  fullWidth
                  loading={loading}
                  onClick={register}
                  variant={"contained"}
                >
                  Regisztráció
                </LoadingButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
