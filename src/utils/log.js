const ololog = require("ololog");

const log = ololog.configure({
  tag: true,
  time: true,
  locate: false,
  stringify: { fancy: false, indentation: "  " },
});

module.exports = {
  log,
};
