import React from 'react';
import axios from 'axios';

class AnnounceCard extends React.Component {
	state = {
		apiResults: {},
		isLoading: true
	};

	componentDidMount = async () => {
		const response = await axios.get('https://leboncoin-api.herokuapp.com/api/offer/with-count');
		this.setState({
			apiResults: response.data,
			isLoading: false
		});
	};

	render = () => {
		const keys = Object.keys(this.state.apiResults);
		return (
			<div>
				{keys.map((el1, index1) => {
					return (
						<div>
							 {this.state.apiResults.offers.map((el2, index2) => {
								return (
									<div className="content--card">
										<div className="image--container">
											<img src="https://lh3.googleusercontent.com/0JKVn7ZFYDOymGLBN44CoQzyM_vKsUtbHPIGCbJVDJkp8fsKhhqrdG04G81KbEKLdbi0" />
										</div>
										<div className="title--price">
											<div className="announce--title">{el2.title}</div>
											<div className="announce--price">{el2.price} €</div>
										</div>{' '}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	};
}

export default AnnounceCard;
