

const { Sequelize, DataTypes } = require('sequelize')
// const PatientModel = require('../models/product')
const UserModel = require('../models/user')
const patients = require('./mock-patient')
// const bcrypt = require('bcrypt')
  
const sequelize = new Sequelize('the_rabbit_hold2', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const Patient = PatientModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
  
const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
      patients.map(patient => {
        Patient.create({
          first_name: patient.first_name,
          last_name: patient.last_name,
          password: patient.password,
          email: patient.email,
          created: patient.created
        }).then(patient => console.log(patient.toJSON()))
      })

        // bcrypt.hash('admin', 10)
        // .then(hash => User.create({ username: 'admin', password: hash }))
        // .then(user => console.log(user.toJSON()))
    
        console.log('La base de donnée a bien été initialisée !!!')
    })
  }
  
  
module.exports = { 
  initDb, Patient, User
}
































