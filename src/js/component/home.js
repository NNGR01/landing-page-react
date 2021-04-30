import React from "react";

import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<>
			<Cards />
			<Footer />
		</>
	);
}
