/**
 * @fileoverview eslint rules as dictated by heyjiawei
 * @author heyjiawei
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/unicorn",
  ],
};
