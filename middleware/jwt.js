const { json } = require('express');
const jwt = require('jsonwebtoken')

const jwtValidator = async(req,res) =>{
  const {accessToken} = req.body;
  try {
    const verify = jwt.verify(accessToken,'ClaveSecreta')
    if (verify) {
      return next();
    }
  } catch (error) {
    res,json({
      mensjae: "No autorizado"
    })
  }
}

module.exports = { jwtValidator }