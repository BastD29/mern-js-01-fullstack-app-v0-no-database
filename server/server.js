import express from "express";
import routes from "./routes/tea.js";

const app = express();

app.use(express.json());
app.use("/", routes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});
