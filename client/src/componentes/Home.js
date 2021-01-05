
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  



	const [ nombreProducto, setNombreProducto ] = useState('');
	const [ precioProducto, setPrecioProducto ] = useState('');
	const [ datosProductos, setDatosProductos ] = useState([]);

	useEffect(() => {
		
		axios.get('http://localhost:8080/datos/productos').then((response) => {
			setDatosProductos(response.data);
		});
	});

	const enviarDatos = () => {
		axios
			.post('http://localhost:8080/form/send', {
				producto: nombreProducto,
				precio: precioProducto

			
			})
			.then(function(response) {
				alert('los datos han sido enviados');
			
			});
			
			setNombreProducto('')
			setPrecioProducto('')
			
	};


	// const borrarPost = (postid)=>{
	// 	fetch(`/borrarpost/${postid}`,{
	// 		method:"delete",
	// 		headers:{
	// 			Authorization:"Bearer "+localStorage.getItem("jwt")
	// 		}

	const borrarDatos = (id)=>{

			axios.delete(`http://localhost:8080/producto/${id}`)

			.then(function(response) {
				alert('producto eliminado');
			});






	}






	return (
		<div className="App">
		


			<Navbar/>
		


			<div className="container">

			<div class="row mt-5">
				<div class="col-md-5">
		
						<div className="card">
							<div className="card-body">
							<form>
				<div className="form-group">
				<input
					type="text"
					name="producto"
					placeholder="producto"
					onChange={(e) => setNombreProducto(e.target.value)}
					className="form-control"
				/>



				</div>
			
				<br />
				<input
					type="number"
					name="precio"
					placeholder="precio"
					onChange={(e) => setPrecioProducto(e.target.value)}
					className="form-control"
				/>
				<br />
				<button className="btn btn-primary" onClick={enviarDatos}>
					Guardar
				</button>
				</form>





							</div>




						</div>







				
			

				</div>


				<div class="col-md-7">

				<table  class="table table-bordered table-hover">
            <thead class>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
    
						
				{datosProductos.map((dato, index) => {
					return (
           
									<tr>
										<th scope="row">{dato.id}</th>
										<td >{dato.producto}</td>
										<td>{dato.precio}</td>
										<td>


											<Link to={"/Editar/"+dato.id}   >  <button  class="btn btn-primary">Editar</button> </Link>
										  
											<button onClick={()=>{borrarDatos(dato.id)}}  class="btn btn-danger"  >Borrar</button>
											
										</td>
									</tr>

                     
     
							
          );
         
        } )
        
     
        }




      {/*abajo de estp  */}





      </tbody>
        </table>
        




			    </div>


			</div>
			
			</div>

			<div className="container">


    
       
      </div>
        
			</div>
  
	);































};

export default Home ;