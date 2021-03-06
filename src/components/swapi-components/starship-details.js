import React from 'react';

import { ItemDetails } from "../item-details";
import { withSwapiService } from "../hoc-helpers";


const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props} />
	)
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship,
		getImageUrl: swapiService.getStarshipImg
	}
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);