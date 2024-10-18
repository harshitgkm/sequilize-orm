const express = require('express');
const app = express();
const userRoutes = require('./routes/users.route.js');
// const {sequelize} = require('./models/index.js');
const { Sequelize } = require('./models/index.js');
// const { sequelize } = require('./models');
app.use(express.json());



app.use('/api', userRoutes);

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});


const startServer = async function () {
  try {
    await sequelize.authenticate();
    console.log('database connected');

    // const serverPort = process.env.PORT || 3000;
    // app.listen(serverPort);
    // console.log(`--- Server started on ${serverPort} ---\n\n`);
  } catch (err) {
    // console.log('server setup failed', err);
    console.log('Database connection failed', err);

    console.log('Error: ', err.message);
  }
};

startServer();




app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
}); 