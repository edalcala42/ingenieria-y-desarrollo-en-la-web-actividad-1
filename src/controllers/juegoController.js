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
            res.redirect('/');
        })
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM juego WHERE id = ?', [id], (err, juego) => {
            res.render('game_edit', {
                data: juego[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newGame = req.body;
    console.log("I'm here, " + id);
    req.getConnection((err,conn) => {
        conn.query('UPDATE juego SET ? WHERE id = ?', [newGame, id], (err, rows) => {
            res.redirect('/');
        });
    });
}

controller.erase = (req, res) => {
    const { id } = req.params;
    console.log(id);
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM juego WHERE id = ?', [id], (err, juego) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;