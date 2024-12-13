const express = require('express');
const morgan = require('morgan');

const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importación de rutas
const juegoRoutes = require('./routes/juego');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'nodejsactividad'
}, 'single'))

app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', juegoRoutes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Ejecución del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});