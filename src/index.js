const express = require('express');
const app = express();
const userRoutes = require('./routes/users.route.js');

app.use(express.json());

app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
}); 