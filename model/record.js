module.exports = (sequelize, DataTypes) => {

    var Record = sequelize.define('Record', {
        subject: {
            type: DataTypes.STRING,
        }, when: {
            type: DataTypes.STRING,
        }, howLong: {
            type: DataTypes.NUMBER,
        }, style: {
            type: DataTypes.STRING,
        }
    })

    Record.sync({force: true}).then( () => {
        console.log('synced table')
    })

    return Record
}