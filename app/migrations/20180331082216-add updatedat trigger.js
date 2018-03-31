'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE OR REPLACE FUNCTION trigger_set_timestamp()\n' +
					  'RETURNS TRIGGER AS $$\n' +
					  'BEGIN\n'+
					  'NEW."updatedAt" = NOW();\n'+
					  'RETURN NEW;\n'+
					  'END;\n'+
					  '$$ LANGUAGE plpgsql;');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP FUNCTION IF EXISTS trigger_set_timestamp()');
  }
};
