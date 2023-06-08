import express, { urlencoded } from "express";
const app = express();
import { sequelize } from "./models";
import initRoutes from "./routes/tutorial.routes";

global.__basedir = __dirname + "/..";

app.use(urlencoded({ extended: true }));
initRoutes(app);

sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});