const asTable = require("as-table");
const { bright } = require("ansicolor");
const log = require("ololog");
console.log(
  asTable.configure({
    title: (x) => bright.cyan(x),
    delimiter: bright.dim.cyan(" | "),
    dash: bright.dim.cyan(" - "),
  })([
    { foo: true, string: "abcde", num: 42 },
    { foo: false, string: "qwertyuiop", num: 43 },
    { string: null, num: 44 },
  ])
);
console.log(
  asTable([
    { foo: true, string: "abcde", num: 42 },
    { foo: false, string: "qwertyuiop", num: 43 },
    { string: null, num: 44 },
  ])
);

log(
  asTable([
    { foo: true, string: "abcde", num: 42 },
    { foo: false, string: "qwertyuiop", num: 43 },
    { string: null, num: 44 },
  ])
);
