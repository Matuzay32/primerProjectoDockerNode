const app=require('./app');
const port = 3000;

const server = async ()=>{
     await app.listen(port);
     console.log(`Server en el puerto ${port}`);
 }
 server();