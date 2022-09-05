const { environment } = require('@rails/webpacker')
const erb = require('./loaders/erb')
const provide = require('./plugins/provide')

environment.loaders.prepend('erb', erb)
environment.plugins.prepend('provide', provide)
module.exports = environment
