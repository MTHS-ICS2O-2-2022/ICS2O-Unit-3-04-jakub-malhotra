// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04/sw.js", {
    scope: "/ICS2O-Unit3-04/",
  })
}

/**
 * This function calculates fahrenheit to celsius.
 */
function enterClicked() {
  //input
  const ftemp = parseFloat(document.getElementById("ftemp").value)

  //process
  const ctemp = (ftemp - 32) * 5 / 9

  //output
  document.getElementById("ctemp").innerHTML =
    "The temperture in celsius is: " + ctemp.toFixed(2) + " °C."
}
