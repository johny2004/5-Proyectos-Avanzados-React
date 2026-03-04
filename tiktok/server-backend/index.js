//Definir como crear mi servidor y como despachar las rutas

const express = require ('express'); //importar express para crear el servidor
const app = express();                 //crear el servidor
const cors  = require('cors');          //importar cors
const path = require('path');           //importar path para manejar rutas de archivos

const items = [
    {id: 1, title :"Video 1", path:"vid-01.mp4"}, 
    {id: 2, title :"Video 2", path:"vid-02.mp4"},
    {id: 3, title :"Video 3", path:"vid-03.mp4"},
    {id: 4, title :"Video 4", path:"vid-04.mp4"},
    {id: 5, title :"Video 5", path:"vid-05.mp4"},
    {id: 6, title :"Video 6", path:"vid-06.mp4"},
    {id: 7, title :"Video 7", path:"vid-07.mp4"},
    {id: 8, title :"Video 8", path:"vid-01.mp4"},
    {id: 9, title :"Video 9", path:"vid-01.mp4"},
    {id: 10, title :"Video 10", path:"vid-1.mp4"},
    {id: 11, title :"Video 11", path:"vid-1.mp4"},
    {id: 12, title :"Video 12", path:"vid-1.mp4"},
    {id: 13, title :"Video 13", path:"vid-1.mp4"},
    {id: 14, title :"Video 14", path:"vid-1.mp4"},
    {id: 15, title :"Video 15", path:"vid-1.mp4"},
    {id: 16, title :"Video 16", path:"vid-1.mp4"},

];

app.use(express.json());                //middleware para parsear el cuerpo de las solicitudes como JSON
app.use(cors());                        //middleware para permitir solicitudes desde cualquier origen

app.use(express.static(path.resolve('./public')));        //middleware para servir archivos estaticos desde la carpeta public

app.get('/',(req, res)=>{               //middleware para servir archivos estaticos desde la carpeta public

res.send('Hola mundo')                  //enviar una respuesta
});

let range = 5;
let index = 0;

app.get('/page/:page', (req, res) => {  
    const start  = req.params.page ?? index;          //calcular el indice de inicio de la pagina
    const portion = items.slice(start * range, start * range + range); //calcular la porcion de items a enviar
    res.json(portion);                               //enviar la porcion de items como respuesta
});

app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
});