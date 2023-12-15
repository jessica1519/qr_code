import React from "react";
import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";

function App() {
  const [urlName, setUrlName] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setUrlName(event.target.value);
    setShowQr(false);
  }
  function handleEditClick() {
    var expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (urlName.match(regex)) {
      setShowQr(true);
      setError("");
    } else {
      setError("Devi inserire un URL valido!");
    }
  }
  return (
    <div className="container">
      <Container
        maxWidth={false}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          margin: 0,
          width: "100vw",

          background: "#1976d2",
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            maxHeight: "auto",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            sx={{ margin: 5 }}
          >
            Generate your URL Code
          </Typography>
          <CardContent sx={{ textAlign: "center" }}>
            <Container className="formContainer">
              <TextField
                required
                id="outlined-basic"
                label="Insert URL"
                variant="outlined"
                value={urlName}
                onChange={handleChange}
                sx={{ margin: 2 }}
              />
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={handleEditClick}
                sx={{ background: "#1976d2", margin: 2 }}
              >
                Generate
              </Button>
            </Container>
            {error && <span>{error}</span>}
            <div className="qrCodeContainer">
              {showQr ? (
                <QRCode
                  size={256}
                  style={{ height: "15rem", maxWidth: "15rem", width: "15rem" }}
                  value={urlName}
                  viewBox={`0 0 256 256`}
                />
              ) : (
                <div className="emptyBox"></div>
              )}
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
