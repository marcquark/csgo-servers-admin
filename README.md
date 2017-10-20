# csgo-servers-admin
Admin UI for csgo-servers built with [admin-on-rest](https://github.com/marmelab/admin-on-rest)
## Installation instructions
Clone the repository and adjust your base URL by adding a `homepage` property in your *package.json*. You also need to modify your API base URL in *src/config/index.json*. Then simply run `npm install` followed by `yarn build`. You should now have a *build* folder that you can statically server from wherever you like.