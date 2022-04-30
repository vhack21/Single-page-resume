module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Vedant's Resume",
  });
};
