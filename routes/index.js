const { Router } = require("express");
const router = Router();

const routes = [require("./user.routes")];
for (const route of routes) {
  router.use("/api", route);
}

router.all("*", (req, res, next) => {
  return res.status(404).json({
    messsage: "Server tidak dapat berjalan",
  });
});

module.exports = router;
