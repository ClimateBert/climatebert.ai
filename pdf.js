/* eslint-disable import/no-unresolved */
const fs = require("fs")
const pdf = require("pdf-parse")

const dataBuffer = fs.readFileSync("./Adidas_2020.pdf")

pdf(dataBuffer).then(function (data) {
  console.log(data.text)
})
