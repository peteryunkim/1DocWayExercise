import React from 'react'
//Navbar with links to different parts for the patient
function Navbar(){
	return(
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
		        <ul className="nav nav-tabs">
						  <li role="presentation"><a>My Profile</a></li>
						  <li role="presentation"><a>My Doctors</a></li>
						  <li role="presentation"><a>My Medications</a></li>
						  <li role="presentation"><a>My Insurance</a></li>
						  <li role="presentation"><a>My Health Record</a></li>
						  <li role="presentation"><a>My Messages</a></li>
						  <li role="presentation"><a>Logout</a></li>
						</ul>
		    </div>
		  </div>
		</nav>
	)
}

export default Navbar