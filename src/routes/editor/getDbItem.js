
const getItem = (database, id) => {
    return database.find(item => item._id.$oid === id);
  };