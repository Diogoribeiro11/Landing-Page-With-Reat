import React from "react";
import Navbar from '../Navbar';
import Card from '../Card';
import Jumbotron from '../Jumbotron';

import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<div className="App">
      <div class="header">
        <Navbar />
      </div>
      <div className="content">
        <Jumbotron />
        <Card title="Feature 2000" content="Here it is a new feature for you!!" />
        <Card title="Cards" content="Learn how to build cards in Bootstrap!"/>
        <Card title="Colors" content="Make your site brighter with Bootstrap colors"/>
        <Card title="Full Bootstrap Course" content="Learn everything about Bootstrap!"/>
      </div>
    </div>
	);
};

export default Home;
