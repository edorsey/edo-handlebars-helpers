var _           = require('lodash'),
    path        = require('path'),
    fs          = require('fs'),
    moment      = require('moment');

module.exports = {
  'ifEQ': function(a, b, options) {
    if (a === b) {
      return options.fn(this)
    }
    return options.inverse(this)
  },
  'ifAll': function(a, b, options) {
    var every = _.every(arguments, function(argument) {
      return !(_.isNull(argument) || _.isUndefined(argument));
    })
    if (every) {
      return options.fn(this)
    }
    return options.inverse(this)
  },
  'unlessEQ': function(a, b, options) {
    if (a !== b) {
      return options.fn(this)
    }
    return options.inverse(this)
  },
  'log': function(log) {
    console.log("LOG", log);
  },
  'capitalize': function(word) {
    if (word && word[0]) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  },
  'date': function(date) {
    return moment(date).format("D MMMM YYYY")
  }
};
