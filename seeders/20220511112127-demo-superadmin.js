const bcrypt = require("bcrypt");
const { ROLES } = require("../lib/const");
const SALT_ROUND = 10;

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("laras123", SALT_ROUND);

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "afinaprabalarasati",
          nik: "123",
          ttl: "Praya, 22 Juni 2001",
          email: "afinaprabalarasati@gmail.com",
          password: hashedPassword,
          phone: "085961413040",
          role: ROLES.SUPERADMIN,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          number: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
