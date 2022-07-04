//Imports our app
const app = require("./app");

//Requests will be handled through PORT 5005;
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
