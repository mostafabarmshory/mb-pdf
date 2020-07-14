'use strict';

import FooterComponent from './footer.component';
import './footer.scss';


export default function(app) {
	app
		.component('footerTest', new FooterComponent());
}