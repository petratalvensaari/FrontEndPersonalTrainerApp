import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
	return (
		<div className="container py-5">
			<h1>Welcome to Your Personal Trainer!</h1>
			<p>
				Go to see customers <a href="/customers">Customers</a>.
			</p>
			<p>
				Go to see trainings <a href="/trainings">Trainings</a>.
			</p>
			<p>
				Go to see calendar <a href="/calendar">Calendar</a>.
			</p>
		</div>
	);
};

export default Home;