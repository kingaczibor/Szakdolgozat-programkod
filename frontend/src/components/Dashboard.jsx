import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
// import PropTypes from 'prop-types';
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Grid,
  InputLabel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  styled,
  Paper,
  TableContainer,
  TableCell,
  tableCellClasses,
  FormControl,
  Select,
  MenuItem,
  TablePagination,
  TableFooter,
} from "@mui/material";
import { format } from "date-fns";
import axios from "axios";

const baseUrl = "http://localhost:8000";

const header = [
  "Vezetéknév",
  "Keresztnév",
  "Lakcím",
  "item",
  "Van eszköz",
  "Ügyfél-e",
  "Status",
];
const header2 = [
  "Vezetéknév",
  "Keresztnév",
  "Lakcím",
  "Eszköz",
  "Mitörtént",
  "Mikor",
  "Status",
];

const Tabs = () => {
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate("/home");
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [activeIndex, setActiveIndex] = useState(1);
  const [Install, setInstall] = useState([]);
  const [Repair, setRepair] = useState([]);
  const [installStatuses, setInstallStatuses] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rowsPerPageOptions = [10, 20, 50];

  useEffect(() => setPage(0), [rowsPerPage]);

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const handleClick = (index) => setActiveIndex(index);
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    // setLoggedIn(false);
    navigate("/login");
  }

  async function modifyInstall(id, status) {
    try {
      const response = await axios.post(baseUrl + "/auth/installmodify/", {
        id: id,
        Status: status,
      });

      if (response.status === 200) {
        console.log("sikerült");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function modifyRepair(id, status) {
    try {
      const response = await axios.post(baseUrl + "/auth/repairmodify/", {
        id: id,
        Status: status,
      });

      if (response.status === 200) {
        console.log("sikerült");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getInstalls() {
    try {
      const response = await axios.get(baseUrl + "/auth/installs");

      if (response.status === 200) {
        console.log(response?.data);
        setInstall(response?.data?.installs);
        setInstallStatuses(response?.data?.install_status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getRepairs() {
    try {
      const response = await axios.get(baseUrl + "/auth/repairs");

      if (response.status === 200) {
        console.log(response?.data);
        setRepair(response?.data?.repairs);
        setInstallStatuses(response?.data?.install_status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getItems() {
    try {
      const response = await axios.get(baseUrl + "/auth/items");

      if (response.status === 200) {
        console.log(response?.data);
        setItems(response?.data?.items);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInstalls();
    getItems();
    getRepairs();
  }, []);

  return (
    localStorage?.getItem("access_token") && (
      <>
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => handleClick(1)}
          >
            Beküldött beüzemelési igények
          </button>
          <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
          >
            Beküldött javítási igények
          </button>
          <button
            className={`tab ${checkActive(3, "active")}`}
            onClick={() => handleClick(3)}
          >
            Admin funkciók
          </button>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <TableContainer component={Paper}>
              <Table {...{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {header.map((key) => (
                      <StyledTableCell>{key}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {console.log(
                    Install,
                    page,
                    rowsPerPage,
                    Install?.slice(3, 6)
                  )}
                  {Install?.slice(
                    page * rowsPerPage,
                    (page + 1) * rowsPerPage
                  )?.map((row) => {
                    console.log(row);
                    return (
                      <StyledTableRow>
                        {header.map((key) => {
                          if (key === "Van eszköz") {
                            return (
                              <StyledTableCell>
                                {row[key] ? "igen" : "nem"}
                              </StyledTableCell>
                            );
                          }
                          if (key === "Status") {
                            return (
                              <Grid
                                conteiner
                                item
                                padding={"10px"}
                                xs={12}
                                sm={6}
                              >
                                <FormControl
                                  fullWidth
                                  style={{ background: "white" }}
                                >
                                  <Select
                                    value={JSON.stringify(
                                      installStatuses?.find(
                                        (status) => status?.id === row["status"]
                                      )
                                    )}
                                    onChange={(event) => {
                                      let copy = structuredClone(Install);
                                      let index = Install.findIndex(
                                        (_install) => _install?.id === row?.id
                                      );
                                      copy[index].status = JSON.parse(
                                        event.target.value
                                      )?.id;
                                      setInstall(copy);
                                      modifyInstall(
                                        copy[index]?.id,
                                        copy[index]?.status
                                      );
                                    }}
                                  >
                                    {installStatuses?.map((status) => (
                                      <MenuItem value={JSON.stringify(status)}>
                                        {status?.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                            );
                          }
                          if (key === "item") {
                            return (
                              <StyledTableCell>
                                {
                                  items?.find((item) => item?.id === row[key])
                                    ?.name
                                }
                              </StyledTableCell>
                            );
                          }
                          if (key === "Ügyfél-e") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.is_klient ? "igen" : "nem"}
                              </StyledTableCell>
                            );
                          }
                          if (key === "Lakcím") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.city +
                                  " " +
                                  row["person_id"]?.street +
                                  " " +
                                  row["person_id"]?.house_num}
                              </StyledTableCell>
                            );
                          }
                          if (key === "Vezetéknév") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.lname}
                              </StyledTableCell>
                            );
                          }
                          if (key === "Keresztnév") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.fname}
                              </StyledTableCell>
                            );
                          }
                          return <StyledTableCell>{row[key]}</StyledTableCell>;
                        })}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
                <TableFooter
                  sx={{
                    backgroundColor: "white",
                    bottom: 0,
                    left: 0,
                    position: "sticky",
                    zIndex: 4,
                  }}
                >
                  <TableRow>
                    <TablePagination
                      count={Install?.length}
                      onPageChange={(event, value) => setPage(value)}
                      onRowsPerPageChange={(e) =>
                        setRowsPerPage(e.target.value)
                      }
                      page={page}
                      rowsPerPage={rowsPerPage}
                      rowsPerPageOptions={rowsPerPageOptions}
                      showFirstButton
                      showLastButton
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
          <div className={`panel ${checkActive(2, "active")}`}>
            <TableContainer component={Paper}>
              <Table {...{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {header2.map((key) => (
                      <StyledTableCell>{key}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                {console.log(
                    Repair,
                    page,
                    rowsPerPage,
                    Repair?.slice(3, 6)
                  )}
                  {Repair?.slice(
                    page * rowsPerPage,
                    (page + 1) * rowsPerPage
                  )?.map((row) => {
                    console.log(row);
                    return (
                      <StyledTableRow>
                        {header2.map((key) => {
                          if (key === "Status") {
                            return (
                              <Grid
                                conteiner
                                item
                                padding={"10px"}
                                xs={12}
                                sm={6}
                              >
                                <FormControl
                                  fullWidth
                                  style={{ background: "white" }}
                                >
                                  <Select
                                    value={JSON.stringify(
                                      installStatuses?.find(
                                        (status) => status?.id === row["status"]
                                      )
                                    )}
                                    onChange={(event) => {
                                      let copy = structuredClone(Repair);
                                      let index = Repair.findIndex(
                                        (_repair) => _repair?.id === row?.id
                                      );
                                      copy[index].status = JSON.parse(
                                        event.target.value
                                      )?.id;
                                      setRepair(copy);
                                      modifyRepair(
                                        copy[index]?.id,
                                        copy[index]?.status
                                      );
                                    }}
                                  >
                                    {installStatuses?.map((status) => (
                                      <MenuItem value={JSON.stringify(status)}>
                                        {status?.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                            );
                          }
                          if (key === "Eszköz") {
                            return (
                              <StyledTableCell>{row?.item}</StyledTableCell>
                            );
                          }

                          if (key === "Lakcím") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.city +
                                  " " +
                                  row["person_id"]?.street +
                                  " " +
                                  row["person_id"]?.house_num}
                              </StyledTableCell>
                            );
                          }
                          if (key === "Vezetéknév") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.lname}
                              </StyledTableCell>
                            );
                          }
                          if (key === "Keresztnév") {
                            return (
                              <StyledTableCell>
                                {row["person_id"]?.fname}
                              </StyledTableCell>
                            );
                          }

                          if (key === "Mitörtént") {
                            return (
                              <StyledTableCell>{row?.what}</StyledTableCell>
                            );
                          }
                          if (key === "Mikor") {
                            return (
                              <StyledTableCell>
                                {format(new Date(row?.when), "yyyy/MM/dd")}
                              </StyledTableCell>
                            );
                          }

                          return <StyledTableCell>{row[key]}</StyledTableCell>;
                        })}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
                <TableFooter
                  sx={{
                    backgroundColor: "white",
                    bottom: 0,
                    left: 0,
                    position: "sticky",
                    zIndex: 4,
                  }}
                >
                  <TableRow>
                    <TablePagination
                      count={Repair?.length}
                      onPageChange={(event, value) => setPage(value)}
                      onRowsPerPageChange={(e) =>
                        setRowsPerPage(e.target.value)
                      }
                      page={page}
                      rowsPerPage={rowsPerPage}
                      rowsPerPageOptions={rowsPerPageOptions}
                      showFirstButton
                      showLastButton
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
          <div className={`panel ${checkActive(3, "active")}`}>
            <Grid container justifyContent={"center"}>
              <Grid item paddingX={"10px"}>
                <Button
                  style={{ background: "grey", color: "white" }}
                  variant="contained"
                  onClick={() => navigate("/registration")}
                >
                  Dolgozó regisztrálása
                </Button>
              </Grid>
              <Grid item paddingX={"10px"}>
                <Button
                  style={{ background: "grey", color: "white" }}
                  variant="contained"
                  onClick={() => navigate("/itemregistration")}
                >
                  Eszköz regisztrálása
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <Grid container justifyContent={"center"}>
          <Button
            style={{ background: "grey", color: "white", marginTop: "10px" }}
            variant="contained"
            size="large"
            onClick={() => logOut()}
          >
            {" "}
            Kijelentkezés
          </Button>
        </Grid>
      </>
    )
  );
};

export default Tabs;

// const [value, setValue] = useState(0);

// const handleChange = (event, newValue) => {

//  setValue(newValue);
// }

//   return (
//     <>

//

//     </>
//   );
// }
