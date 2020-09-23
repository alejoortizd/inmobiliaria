const Inmuebles = require("../../model/Inmuebles");

async function renderHome(req, res, next) {
  try {
      const inmuebles = await Inmuebles.find({}).lean();

      res.render("index", { inmuebles });
  } catch (error) {
      next(error);
  }
}

module.exports = {
  renderHome,
}
