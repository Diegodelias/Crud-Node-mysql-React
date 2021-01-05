const express = require('express');

const app = express();
const mysql  = require('mysql');
const cors = require('cors')

const connection =  mysql.createPool({

        host:'localhost',
        user: 'root',
        password: '',
        database:'bd_productos'



})




// app.use( mysql.createPool({ host:'localhost',
// user: 'root',
// password: '',
// database:'bd_productos'



// }))


app.use(cors())

app.use(express.json())
// app.use('/rutaProductos');





app.get('/datos/productos',(req,res)=>{


    connection.query('SELECT * FROM stock ',(error,results)=>{

                
        if(error)
        throw error;

        
      
        res.json(results);


    })
    

})


app.delete("/producto/:id",(req,res)=>{

        let sql = 'DELETE FROM stock WHERE id = ? ';
      
        connection.query( sql,[req.params.id],(error,results)=>{

                
                if(error)
                throw error;
        
                
              
                res.json(results);
        
        
            })

})




app.put("/ActualizarProducto/:id",(req, res)=>{

        const { id } = req.params;
        const { producto, precio } = req.body;

        const sql = `UPDATE stock  SET producto = '${producto}', precio = '${precio}'   WHERE  id = ${id} `;



        // let sql = 'UPDATE stock SET producto = ? , precio = ? WHERE id = ? ';

        // let data = [req.params.producto, req.params.precio , req.params.id ];
      
        connection.query( sql,(error,results)=>{

                
                if(error)
                throw error;
        
                
              
                res.json(results);
        
        
            })

})



app.get("/datos/GetUnProducto/:id",(req, res)=>{

        const { id } = req.params;
       




        const sql = `SELECT * from stock WHERE  id = ${id} `;



        // let sql = 'UPDATE stock SET producto = ? , precio = ? WHERE id = ? ';

        // let data = [req.params.producto, req.params.precio , req.params.id ];
      
        connection.query( sql,(error,results)=>{

                
                if(error)
                throw error;
        
                
              
                res.json(results);
        
        
            })

})

























app.post('/form/send',(req,res)=>{
        const producto =  req.body.producto;
        const precio = req.body.precio;
       connection.query('INSERT INTO `stock`(`producto`, `precio`) VALUES (?,?)',[producto,precio] ,(error,results)=>{

                // console.log(results)


       })


        res.send('data recibida con exito');

        console.log(req.body.producto)




})





////////////////////////////








app.listen(8080,()=>{

        console.log("servidor escuchando por puerto 8080")

})