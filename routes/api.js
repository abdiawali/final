var express = require('express')


module.exports = function(Record) {

var router = express.Router()

router.get('/records', function(req, res, next){
    Record.findAll()
        .then( records => {
            return res.json(records)
        })
        .catch( err => next(err) )
})


router.post('/records', function(req, res, next) {
    Record.create(req.body).then( () => {
        return res.status(201).send('ok')
    }).catch( err => next(err))
})

return router

} 