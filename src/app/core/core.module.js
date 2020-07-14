'use strict';

const shared = angular.module('core.shared', []);


/*
 * Directives
 */
import validationTestDirective from './directives/validation-test/validation-test.directive';
import pdfViewerDirective from './directives/mb-pdf-viewer/mb-pdf-viewer.directive';
validationTestDirective(shared);
pdfViewerDirective(shared);

/*
 * Components
 */
import footerComponent from './components/footer/footer.module';
footerComponent(shared);

/*
 * Directives
 */
import constants from './services/constants';
constants(shared);

/*
 * Factories
 */
import storeFactory from './services/store.factory';
storeFactory(shared);

/*
 * Providers
 */
import resolverProvider from './services/resolver.provider';
resolverProvider(shared);


export default shared;
