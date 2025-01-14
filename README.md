# MarkLogic-UI-Resource (Grove) React Map Components

This library provides a set of React map components useful for building maps used backed by a MarkLogic database.

## Getting Started

### Installation

    npm install @marklogic-components/grove-react-map-components --save 

or

    yarn add @marklogic-components/grove-react-map-components

### Implementation

If you are using these React components as stand-alone components, rather than as part of a Grove Project generated by the grove-cli, you will need to create a React container in your host application to pass the necessary props and callback functions to the Grove React components that you are importing. See the [`MLSearchContainer`](https://https://github.com/marklogic-community/grove-react-template/browse/ui/src/containers/MLSearchContainer.js) in the Grove React UI Template for an example of doing this, using Redux modules. Also, look at [`App.js`](https://https://github.com/marklogic-community/grove-react-template/browse/ui/src/App.js) and [`index.js`](https://https://github.com/marklogic-community/grove-react-template/browse/ui/src/App.js) to see how selectors and actions are passed to `MLSearchContainer`.

## Components

### <OpenLayersSearchMap />

This component shows a geospatial map that displays the geospatial facets set as a property of this component. It also allows user to select areas of the map and emit a boundsChanged event if set.

Listed below are the props available:
* **facets** - geospatial facets
* **geoFacetNames** - only displays the geospatial facets from the specified names
* **boundsChanged**(_drawnBounds_) - function called when the user draws points, polygons, and/or circles in the map
* **markerClick**(_uri_) - function called when the user selects a marker in the map
* **class** (default: `olmap`) - the css class of the map
* **lonLat** (default: `[-95.79, 34.48]`) - center of the map
* **zoom** (default: `4`) - zoom of the map

### Storybook

A storybook for all the components present in this library is provided as part of this project.

You can view it locally by cloning this project, and running:

    npm install && npm run storybook

After that you can typically open it in your browser at:

    http://localhost:9001/

#### Updating Public Storybook

Make sure all changes are committed and pushed. Also make sure you have installed pm2 (`sudo npm install -g pm2`), that you can update all necessary files on the server (they might be published by someone else), and just run:

    pm2 deploy production

Post-install should install, test, and build the components and the storybook. A browser refresh is all one need after that.

## Contributing

### Local Development of `grove-react-map-components`

You can use npm to link your local version of grove-core-react-components into an existing Grove React UI Application. First go into your `grove-core-react-components` directory and run the following to create a link on your machine from the name `grove-core-react-components` to this directory:

    cd {path-to-your-copy-of-grove-core-react-components}
    npm link

We need just one version of React. Because of the way the Node package manager (npm) can duplicate dependencies, this means we have to link your local `grove-core-react-components`'s version of React to your host application's.

    npm link {path-to-your-grove-project}/ui/node_modules/react

To complete the link, go into your Grove Project's `/ui` directory and run:

    cd {path-to-your-grove-project}/ui
    npm link grove-core-react-components

In order to see your changes to grove-core-react-components in your Grove Project, you will have to build grove-core-react-components:

    cd {path-to-your-copy-of-grove-core-react-components}
    npm run build

### Tests

    npm run test

To run the tests continuously as you change files:

    npm run test:watch

To get a report on test coverage:

    npm run test:coverage
    open coverage/html/index.html

### Stories

Best practice is to add a story for each component that gets exported from this library. We are using [Storybook](https://github.com/storybooks/storybook) for this, which is a form of live documentation. At least, there should be a story example for each supported state of the component. It is also possible to make interactive examples, though this is more work. See <Facets /> for an example.

Eventually, we may tie stories together with testing. This could follow the model [described in this article](https://medium.com/@mlthuret/building-a-react-components-living-documentation-using-react-storybook-5f11f0e7d23e).

To create a story for a component, save it as a new file ending with '.story.js'. See the codebase for examples.

### Code-Style and Linting

TODO: Describe ESLint, benefits of linting javascript, and the benefits of a common code-style. Also, how to set up editor-support.

TODO: We should enforce linting as part of the build.

## Optional Badges

TODO: Evaluate which to keep.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
