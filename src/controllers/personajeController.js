const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM personaje', (err, personajes) => {
            if(err){
                res.json(err);
            }
            console.log(personajes);
            res.render('personajes', {
                data: personajes
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO personaje set ?', [data], (err, personaje) => {
            console.log("personaje: " + personaje);
            res.redirect('/personajes');
        })
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM personaje WHERE id = ?', [id], (err, personaje) => {
            res.render('personaje_edit', {
                data: personaje[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newGame = req.body;
    console.log("I'm here, " + id);
    req.getConnection((err,conn) => {
        conn.query('UPDATE personaje SET ? WHERE id = ?', [newGame, id], (err, rows) => {
            res.redirect('/personajes');
        });
    });
}

controller.erase = (req, res) => {
    const { id } = req.params;
    console.log(id);
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM personaje WHERE id = ?', [id], (err, personaje) => {
            res.redirect('/personajes');
        });
    });
};

module.exports = controller;