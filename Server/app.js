const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(cors());

dotenv.config();
const PORT = 5000;

require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

// if (build) {
//   app.use(express.static("client/build"));
// }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
