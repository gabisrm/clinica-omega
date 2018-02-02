const DBcollections = require("./constants").DBcollections;



/*********************************************/

function handleError(err) {
  // TODO: manejar el error tal que no cierre la app
  if (err) throw new Error("Error DB query");
}

class MongoDriver {
  constructor(dbConn) {
    this.db = dbConn;
  }

  
/* Ejemplos de quieries
  insertNewUser(user) {
    return this.db
      .collection(DBcollections.users)
      .insertOne(user, {
        w: 1
      })
      .catch(handleError)
      .then(() => {
        return user;
      });
  }

  findUser(id) {
    return this.db
      .collection(DBcollections.users)
      .findOne({
        _id: id
      })
      .catch(handleError);
  }
  */
}

module.exports = {
  MongoDriver: MongoDriver
};