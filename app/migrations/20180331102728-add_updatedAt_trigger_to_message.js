'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE TRIGGER set_timestamp\n' +
					  'BEFORE UPDATE ON "Messages"\n' +
					  'FOR EACH ROW\n' +
					  'EXECUTE PROCEDURE trigger_set_timestamp();');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP TRIGGER IF EXISTS set_timestamp ON "Messages"');
  }
};
