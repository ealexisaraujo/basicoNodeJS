const express = require('express');

function sampleStatic(app) {
  app.use('/sample/static', express.static('public'));
}

module.exports = sampleStatic;
