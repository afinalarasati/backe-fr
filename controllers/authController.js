const usersRepository = require("../repositories/usersRepository");
const authService = require("../services/authService");

const register = async (req, res) => {
  const { name, nik, ttl, alamat, email, password, phone, room, role } = req.body;

  const { status, status_code, message, data } = await authService.register({
    name,
    nik, ttl, alamat,
    email,
    password,
    phone,
    room,
    role,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const currentUser = async (req, res) => {
  const currentUser = req.users;

  res.status(200).send({
    status: true,
    message: "You are logged in with this user",
    data: {
      user: currentUser,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, status_code, message, data } = await authService.login({
    email,
    password,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const loginUser = async (req, res) => {
  const { number } = req.params;
  const { email, password } = req.body;

  const { status, status_code, message, data } = await authService.loginUser({
    number,
    email,
    password,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getRoom = async (req, res) => {
  const { number } = req.params;

  const { status, status_code, message, data } = await authService.getRoom({
    number,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const { status, status_code, message, data } = await authService.deleteUserById({ id });

    res.status(status_code).send({ status, message, data });
  } catch (error) {
    console.error("Error in deleteUserById route:", error);
    res.status(500).send({ status: false, message: "Internal server error", data: null });
  }
}

const getAllUsers = async (req, res) => {
  const {status, status_code, message, data} = await authService.getAllUsers()

  res.status(status_code).send({status: status, message: message,data: data})
}


module.exports = { register, login, currentUser, loginUser, getRoom , deleteUserById, getAllUsers};
