"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 10,
          firstName: "user1",
          lastName: "Zormpas",
          email: "user1@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          firstName: "user2",
          lastName: "Zormpas",
          email: "user2@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          firstName: "user3",
          lastName: "Zormpas",
          email: "user3@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "channel",
      [
        {
          id: 20,
          firstName: "channel1",
          user_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          firstName: "channel2",
          user_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "video",
      [
        {
          id: 10,
          title: "video1ByUser1",
          channel_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "video2ByUser1",
          channel_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          title: "video3ByUser2",
          channel_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
