//Definir como crear mi servidor y como despachar las rutas

const express = require ('express'); //importar express para crear el servidor
const app = express();                 //crear el servidor
const cors  = require('cors');          //importar cors
const path = require('path');           //importar path para manejar rutas de archivos

// Puedes mezclar videos locales, URLs externas, YouTube y TikTok
const items = [
    {id: 1, title :"Video 1", url:"https://www.youtube.com/embed/4V7rfombLkc?si=9ZisJC56kLFiSgDx", isLocal: false, type: "youtube"}, 
    {id: 2, title :"Video 2", url:"https://www.youtube.com/embed/Aq5WXmQQooo?si=Cthmcx1LC3hYjg2L", isLocal: false, type: "youtube"},
    {id: 3, title :"MoureDev - Repositorios GitHub", url:"https://www.tiktok.com/embed/v2/7571518946831043862", isLocal: false, type: "tiktok"},
    {id: 4, title :"Marcos Hernangil - IA y GitHub", url:"https://www.tiktok.com/embed/v2/7506886476588731670", isLocal: false, type: "tiktok"},
    {id: 5, title :"DevCh - Build Your Own X", url:"https://www.tiktok.com/embed/v2/7565517320303447319", isLocal: false, type: "tiktok"},
    {id: 6, title :"Video 6", url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", isLocal: false, type: "mp4"},
    {id: 7, title :"Video 7", url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", isLocal: false, type: "mp4"},
    {id: 8, title :"Video 8", url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", isLocal: false, type: "mp4"},
    {id: 9, title :"Video 9", url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", isLocal: false, type: "mp4"},
    // Videos locales (si los necesitas)
    {id: 10, title :"Video 10", url:"vid-01.mp4", isLocal: true, type: "mp4"},
    {id: 11, title :"Video 11", url:"vid-02.mp4", isLocal: true, type: "mp4"},
    {id: 12, title :"Video 12", url:"vid-03.mp4", isLocal: true, type: "mp4"},
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
    const portion = items.slice(start * range, start * range + range).map(item => ({
        ...item,
        // Si es local, agregar el path completo del servidor
        url: item.isLocal ? `http://localhost:4000/videos/${item.url}` : item.url
    })); 
    res.json(portion);                               //enviar la porcion de items como respuesta
});

app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
});