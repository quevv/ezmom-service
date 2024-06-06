module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('table_name', 'field_one_name', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('table_name', 'field_two_name', {
                    type: Sequelize.STRING,
                }, { transaction: t })
            ])
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('table_name', 'field_one_name', { transaction: t }),
                queryInterface.removeColumn('table_name', 'field_two_name', { transaction: t })
            ])
        })
    }
};