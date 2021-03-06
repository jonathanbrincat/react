import React from "react";

import Article from "./Article";


export default class Featured extends React.Component {

	constructor() {
		super();
	}

	render() {
		const Articles = [
			"Some Article",
			"Some Other Article",
			"Yet Another Article",
			"Still More"
		].map((title, i) => <Article key={ i } title={ title } />);

		const adText = [
			"Ad sport #1",
			"Ad sport #2",
			"Ad sport #3",
			"Ad sport #4",
			"Ad sport #5"
		];

		const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

		return (

			//JSX
			<div>
				<div class="row">
					<div class="col-lg-12">
						<div class="well text-center">
							{ randomAd }
						</div>
					</div>
				</div>

				<div class="row">
					{ Articles }
				</div>
			</div>
		);
	}
}