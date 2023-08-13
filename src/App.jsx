import React from 'react';
import { Hero, Login, SignUp, DoctorProfile, PatientProfile } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' Component={Hero} />
				<Route path='/login/:accType' Component={Login} />
				<Route path='/signup/:accType' Component={SignUp} />
				<Route path='/profile/doctor/:id' Component={DoctorProfile} />
				<Route path='/profile/patient/:id' Component={PatientProfile} />
			</Routes>
		</Router>
	);
};

export default App;
