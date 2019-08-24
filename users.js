const express = require('express');
const router = express.Router();

router.get('/', ( req, res)  => { 
    res.send('users listing!') ;    
});

router.post('/', (req, res) => {
    res.send('User Added');
});

router.put('/', (req, res) => {
    res.send('User edited');
});

router.delete('/', (req, res) => {
    res.send('User deleted');
});

module.exports = router;