const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Online DB')
  } catch (error) {
    console.log(error);
    throw new Error('Error on connect database')
  }
};

module.exports = {
  dbConnection
}