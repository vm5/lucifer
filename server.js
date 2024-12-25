const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const usersRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("Welcome to Lucifer");
  res.send("Welcome to Lucifer");
});
app.use('/api/v1/users', usersRouter);

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE;

mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
});
