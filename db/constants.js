const DB_NAME = 'microserviceDB';
const MONGODB_PORT = '27017';
const MONGODB_HOST = 'localhost'

const MONGODB_URL = 'mongodb://' + MONGODB_HOST + ':' + MONGODB_PORT + '/'+DB_NAME;


const DBcollections= {
    example : 'Example'
};

module.exports = {
    url: MONGODB_URL,
    DBcollections: DBcollections
};