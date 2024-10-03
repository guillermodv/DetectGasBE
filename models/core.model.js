module.exports = (sequelize, Sequelize) => {
  const Core = sequelize.define("core", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    measurement: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Core;
};
