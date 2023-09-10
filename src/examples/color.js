const { green, inverse, bgLightCyan, underline, dim } = require ('ansicolor')

console.log(inverse(green('hehe')));
console.log(bgLightCyan('bgLightCyan'))
console.log(inverse(bgLightCyan('bgLightCyan')))
console.log(underline.bright.green('underline'))
console.log(dim.black.bgLightCyan('bar'));