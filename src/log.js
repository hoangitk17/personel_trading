const { bright } = require ('ansicolor')
const ololog = require("ololog");

log = ololog.configure({ tag: true, time: true, locate: false, stringify: { fancy: false, indentation: '  ' } });

log.bright.red.underline("test");
log('    ', 'foo\nbar\nbar')
log.magenta(bright.green('This is my object:'), { foo: 10, bar: 20, qux: 30 })

log({
  "glossary": {
      "title": "example glossary",
  "GlossDiv": {
          "title": "S",
    "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
          "GlossSeeAlso": ["GML", "XML"]
                  },
        "GlossSee": "markup"
              }
          }
      }
  }
})

log.info  ('an info message')
log.warn  ('a warning')
log.error ('an error')
log.debug ('a debug message')