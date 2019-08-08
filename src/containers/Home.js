import React from 'react';
import axios from 'axios';
import AnnounceCard from '../AnnounceCard';
import { thisExpression } from '@babel/types';

class Home extends React.Component {
	state = {
		offers: [],
		count: 0,
		isLoading: true
	};

	componentDidMount = async () => {
		const response = await axios.get('https://leboncoin-api.herokuapp.com/api/offer/with-count');
		this.setState({
			offers: response.data.offers,
			count: response.data.count,
			isLoading: false
		});
	};

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
						<AnnounceCard className="announceCard" offers={this.state.offers} />
					</div>
					<footer>yo</footer>
				</main>
			</div>
		);
	};
}

export default Home;
