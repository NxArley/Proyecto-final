const Auth = {}

const jwt = require('jsonwebtoken')

Auth.verificarToken = (req, res, next)=>{

    if(!req.headers.autorización){

        return res.json({
            mensaje:'No estas autorizado'
        })
    }

    const token = res.headers.autorizaion

    if(token==='null'){

        return res.json({
            mensaje:'No estas autorizado'
        })
    }

    jwt.verify(token,'Secreta',(error,resultado)=>{

        if(error) return res.json({
            mensaje:'No estas autorizado'
        })

        next()
    })
}

module.exports = Auth