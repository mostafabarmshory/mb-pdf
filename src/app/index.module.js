'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';


const App = angular
	.module(
		"mb-pdf", [
			// plugins
			uiRouter,
			coreModule.name,
			indexRoutes.name,
			mainModule.name
		]
	)
	.config(config)
	.run(run);



export default App;
