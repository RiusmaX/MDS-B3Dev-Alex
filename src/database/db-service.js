import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'LocationDatabase.db' })

/**
 * Créer la table location avec les colonnes :
 * loc_id => id auto incrémenté
 * loc_latitute => lattitude
 * loc_longitude => longitude
 * loc_altitude => altitude
 */

const createTables = () => {
  db.transaction(function (txn) {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS location (
        loc_id INTEGER PRIMARY KEY AUTOINCREMENT,
        loc_latitude FLOAT,
        loc_longitude FLOAT,
        loc_altitude FLOAT
      );`,
      [],
      function (tx, res) {
        console.log('Table created successfully')
      },
      function (tx, err) {
        console.log('Error while creating the table:', err)
      }
    )
  })
}

/**
 * Insert les données de localisation de l'utilisateur dans la table location
 *
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} altitude
 */

const registerUserLocation = (latitude, longitude, altitude) => {
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO location (loc_latitude, loc_longitude, loc_altitude) VALUES (?,?,?)',
      [latitude, longitude, altitude],
      (tx, results) => {
        console.log('Results', results.rowsAffected)
        if (results.rowsAffected > 0) {
          console.log(
            'Success',
            'You are Registered Successfully',
            { cancelable: false }
          )
        } else console.log('Registration Failed')
      }
    )
  })
}

/**
 * Renvoie les informations de localisation de l'utilisateur
 * @returns promise
 */

const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM location',
        [],
        (tx, results) => {
          const temp = []
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i))
          }
          resolve(temp)
        },
        (error) => {
          reject(error)
        }
      )
    })
  })
}

/**
   * Supprime les données de la table location
   */

const deleteUserLocation = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM location;',
        [],
        (tx, results) => {
          console.log(results)
        },
        (error) => {
          reject(error)
        }
      )
    })
  })
}

export {
  registerUserLocation,
  getUserLocation,
  createTables,
  deleteUserLocation
}
