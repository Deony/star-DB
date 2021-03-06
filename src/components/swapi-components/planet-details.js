import React from 'react';

import { ItemDetails } from "../item-details";
import { withSwapiService } from "../hoc-helpers";


const PlanetDetails = (props) => {
	return (
		<ItemDetails {...props} />
	)
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet,
		getImageUrl: swapiService.getPlanetImg
	}
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);