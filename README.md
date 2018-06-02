# csgo-servers-admin
Admin UI for csgo-servers built with [react-admin](https://github.com/marmelab/react-admin)
## Installation instructions
Clone the repository and adjust your admin UI's base URL by adding a `homepage` property in your *package.json*. You also need to modify your API base URL in *src/config/index.json*. Then simply run `npm install` followed by `npm run-script build`. You should now have a *build* folder that you can statically serve from the URL you specified in the `homepage` property above.
