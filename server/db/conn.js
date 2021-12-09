const mongoose = require("mongoose");
const db = process.env.DATABASE;
mongoose
  .connect(db, {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log(`connected successfullly`);
  })
  .catch((err) => {
    console.log(err);
  });
