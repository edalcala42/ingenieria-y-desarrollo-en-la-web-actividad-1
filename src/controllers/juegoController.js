const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM juego', (err, juegos) => {
            if(err){
                res.json(err);
            }
            console.log(juegos);
            res.render('juegos', {
                data: juegos
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO juego set ?', [data], (err, juego) => {
            console.log(juego);
            res.send("it works!");
        })
    })
};

module.exports = controller;