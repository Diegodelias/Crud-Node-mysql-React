import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link , useHistory } from 'react-router-dom';

import Navbar from './Navbar';

const Editar = () => {

	const history = useHistory()
	const [ nombreProducto, setNombreProducto ] = useState('');
	const [ precioProducto, setPrecioProducto ] = useState('');
	const [ datosProductos, setDatosProductos ] = useState([]);

	
	const { id } = useParams()



	// async function fetchDatos(){
	// 	let response = await axios(
	// 		`http://localhost:8080/datos/GetUnProducto/${id}`
	// 	  );
	// 	  let productodata = await response.data;
	// 	  setDatosProductos(productodata);
		

	// }


	useEffect(() => {
		
		// fetchDatos();
		axios.get(`http://localhost:8080/datos/GetUnProducto/${id}`).then((response) => {
			setDatosProductos(response.data);
			
			setNombreProducto(response.data[0].producto);
			setPrecioProducto(response.data[0].precio)

			
		}).catch(e=>{
			console.log(e);
		});
		
	
	},[]);


	

	

    const ActualizarDatos = () => {
		axios
			.put(`http://localhost:8080/ActualizarProducto/${id}`, {
				producto: nombreProducto,
				precio: precioProducto

				
			})
			.then(function(response) {
			
			
			
			});
			history.push('/')
			
		
			
			
	};



    return (
        <div>

			<Navbar/>
 


			<div className="container mt-5">
				<div className="row">
					<div className="col-md-5">
						<div className="card">
							<div className="card-body">
								<form>

			   <div className="form-group">
				<input
					type="text"
					name="producto"
				    value = {nombreProducto}
					onChange={(e) => setNombreProducto(e.target.value)}
					className="form-control"
				/>
				</div>
				<br />


				<div className="form-group">
				<input
					type="number"
					name="precio"
					value = {precioProducto}

					onChange={(e) => setPrecioProducto(e.target.value)}
					className="form-control"
					
				/>
				<br />
				<button className="btn btn-primary" onClick={ActualizarDatos}>
					Guardar
				</button>
				</div>

				</form>
							</div>


						</div>
					</div>

				</div>
			</div>













            
        </div>
    );
};

export default Editar;