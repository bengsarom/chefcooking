import mongoose from "mongoose";

const connectToDb = () =>
  mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.jse9bdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  );

export default connectToDb;
