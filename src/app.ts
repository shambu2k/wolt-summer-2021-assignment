import express from "express";
import discoverRouter from "./api/routers/DiscoverRouter";

const app = express();
const PORT = 8080;

app.use("/", discoverRouter);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

export default app;
