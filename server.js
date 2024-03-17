const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 1010;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// middleware
const middleware = require("./middlewares/auth");

// controller
const authController = require("./controllers/authController");
const historyController = require("./controllers/historyController");

// endpoint
// auth
app.post(
  "/auth/registerUser",
  middleware.authenticate,
  middleware.isSuperAdmin,
  authController.register
);
app.post("/auth/login", authController.login);
app.post("/auth/login/:number", authController.loginUser);
app.get("/auth/me", middleware.authenticate, authController.currentUser);
app.get("/auth/rooms/:number", authController.getRoom);
app.delete("/auth/users/delete/:id", authController.deleteUserById);
app.get("/auth/users", authController.getAllUsers);

// history
app.delete("/history/delete/:id", historyController.deleteHistory)
app.get("/histories", historyController.getAllHistory)
app.get("/histories/get/:numbers", historyController.getAllHistoryByRoom)

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});
