const { users } = require("../models");
const { rooms } = require("../models");

class usersRepository {
  static async create({ name, nik, ttl, alamat, email, password, phone, room, role }) {
    const createdUser = users.create({
      name: name,
      nik: nik,
      ttl: ttl,
      alamat: alamat,
      email: email,
      password: password,
      phone: phone,
      room: room,
      role: role,
    });
    return createdUser;
  }

  static async getByEmail({ email }) {
    const getUser = await users.findOne({ where: { email: email } });
    return getUser;
  }

  static async getById({ id }) {
    const getUser = await users.findOne({ where: { id: id } });
    return getUser;
  }

  static async getAllUsers() {
    const getUser = await users.findAll();
    return getUser;
  }

  static async getByRoom({ room }) {
    const getUser = await users.findOne({ where: { room: room } });
    return getUser;
  }

  static async getRoomByNumber({ number }) {
    const getNumber = await rooms.findOne({ where: { number: number } });
    return getNumber;
  }

  static async deleteUserById(id ) {
    const getNumber = await users.destroy({ where: { id: id } });
    return getNumber;
  }
}

module.exports = usersRepository;
