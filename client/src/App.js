import React, { useState, useEffect } from 'react';
import Home from './componentes/Home';
import Editar from './componentes/Editar'
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			
		< Route path="/"  exact component={Home} />	
		< Route path="/Editar/:id" component={Editar} />
		
		</Router>


	);
}

export default App;
