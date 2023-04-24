




// const validTypes = ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée', 'Psy', 'Combat', 'Glace', 'Roche', 'Sol', 'Spectre', 'Dragon', 'Acier', 'Ténèbres'];

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { 
        msg: 'Le nom est dejas pris.'
      },
      validate: {
        notNull: { msg: 'Le nom doit être renseigné.' },
        notEmpty: { msg: 'Le nom doit être renseigné.' },
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { 
        msg: 'Le nom est dejas pris.'
      },
      validate: {
        notNull: { msg: 'Le nom doit être renseigné.' },
        notEmpty: { msg: 'Le nom doit être renseigné.' },
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Le mot de passe doit être renseigné.' },
          len: {
            args: [6, 50],
            msg: 'Le mot de passe doit contenir entre 6 et 50 caractères.',
          },
        },
    },
      
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: 'L\'email doit être une adresse e-mail valide.' },
          notNull: { msg: 'L\'email doit être renseigné.' },
        }
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    
      
    // types: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   get() {
    //     return this.getDataValue('types').split(',')
    //   },
    //   set(types) {
    //     this.setDataValue('types', types.join())
    //   },
    //   validate: {
    //     isTypesValid(value) {
    //       if (!value) {
    //         throw new Error('Un produit ne peut pas avoir moins de 1 parfum.')
    //       }
    //       if (value.split(',').length > 3) {
    //         throw new Error('Un produit ne peut pas avoir plus de 3 parfums.')
    //       }
    //       value.split(',').forEach(type => {
    //         if (!validTypes.includes(type)) {
    //           throw new Error(`Le type ${type} doit appartenir à la liste suivante : ${validTypes.join(', ')}.`)
    //         }
    //       })
    //     },
    //   }
    // },
  }, 
  {  
    createdAt: 'created',
    updatedAt: false
  })
}


























