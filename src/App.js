import { TextField, Stack, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";
function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [validPrinciple, setValidPrincipal] = useState(true);
  const [validRate, setValidRate] = useState(true);

  const [validYear, setValidYear] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!principle || !rate || !year) {
      alert("Please fill all the fields !!!");
    } else {
      setInterest(Math.floor(((principle * rate) / 100) * year));
    }
  }

  function validateUserInput(e) {
    const { name, value } = e.target;

    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setValidPrincipal(true);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(true);
      } else if (name === "year") {
        setYear(value);
        setValidYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setValidPrincipal(false);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(false);
      } else if (name === "year") {
        setYear(value);
        setValidYear(false);
      }
    }
  }

  function handleReset() {
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setYear(0);
  }

  return (
    <div
      style={{ height: 100 + "vh" }}
      className="w-100 d-flex justify-content-center align-items-center bg-dark"
    >
      <div className="bg-light rounded p-5" style={{ width: 500 + "px" }}>
        <h3 className="fw-bold">SIMPLE INTEREST</h3>
        <p>Calculte your simple interest easily</p>
        <div
          style={{ height: "150px" }}
          className="interest-card w-100 d-flex mt-4 bg-dark rounded flex-column justify-content-center align-items-center text-light "
        >
          <h1>₹ {interest}</h1>
          <p>Simple interest</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mt-3">
            <TextField
              value={principle || ""}
              onChange={(e) => validateUserInput(e)}
              name="principle"
              className="w-100"
              id="outlined-basic"
              label="₹ Principal amount"
              variant="outlined"
            />
          </div>
          {!validPrinciple && (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Principal Amount
            </div>
          )}

          <div className="mt-3">
            <TextField
              value={rate || ""}
              onChange={(e) => validateUserInput(e)}
              name="rate"
              className="w-100"
              id="outlined-basic"
              label="Rate of interest (p.a)%"
              variant="outlined"
            />
          </div>

          {!validRate && (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Principal Amount
            </div>
          )}

          <div className="mt-3">
            <TextField
              value={year || ""}
              onChange={(e) => validateUserInput(e)}
              name="year"
              className="w-100"
              id="outlined-basic"
              label="Time period (Yr)"
              variant="outlined"
            />
          </div>

          {!validYear && (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Principal Amount
            </div>
          )}

          <Stack className="mt-4" direction="row" spacing={2}>
            <Button
              disabled={validPrinciple && validRate && validYear ? false : true}
              className="bg-warning text-dark fw-bold border-black"
              style={{ height: "50px", width: "200px" }}
              type="submit"
              variant="contained"
            >
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              className="text-dark fw-bold border-black"
              style={{ height: "50px", width: "200px" }}
              variant="outlined"
            >
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
