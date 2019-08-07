import React from 'react';
import axios from 'axios';
import AnnounceCard from '../AnnounceCard';

class Home extends React.Component {
	render = () => {
		return (
			<div>
				<header className="my--header">
					<h1>Leboncoin</h1>
					<ul className="header--list">
						<li>DEPOSER UNE ANNONCE</li>
						<li>OFFRES</li>
						<li className="create-account">Créer un compte</li>
						<li className="connect">Se connecter</li>
					</ul>
				</header>
				<main>
					<div className="page--content">
						<AnnounceCard className="announceCard" />
					</div>
				</main>
			</div>
		);
	};
}

export default Home;
