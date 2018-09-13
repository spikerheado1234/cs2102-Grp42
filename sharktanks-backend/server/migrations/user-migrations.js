/* sample migration file that I created, will be changed later on */

module.exports = {
	up : (queryInterface, Sequelize) =>
		queryInterface.createTable("sharktankstest_dev", {
			name : {
				type: Sequelize.STRING,
				primaryKey: false,
				allowNull: false,
			},
			userID: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			gender: {
				type: Sequelize.STRING,
				allowNull: false,

			}
		}),
	down: (queryInterface) => {
		queryInterface.dropTable("sharktankstest_dev");
	}
}