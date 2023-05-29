# Bento 🍱

My start page for navigating the Internet.

See the very wonderful original project [here](https://github.com/migueravila/Bento)!

## About

This project is my new tab page. It's fun having a custom page, and it's a good introductory web project.

## Development

Code-related notes.

### Client

The frontend is basic HTML, CSS, and JavaScript derived from the original project. Frankly, it's not the prettiest, but it works. A lot of this code I've tried to leave untouched besides `assets/js/config.js`.

To run it locally, use `start.sh`. There's also `build.sh` for appropriately moving the files to the `dist/` directory.

### Server

This is a tiny Fastify server to return weather data courtesy of [Open Weather Map](https://home.openweathermap.org). It's a good example of a tiny API, and it's effective at its (minimal) job.

To run the project locally, run `source .env && npm start`. You can test the weather endpoint with `sh test/weather.sh`. It _should_ be deployed, ~~though it needs to be migrated off Heroku~~, and it is! It's live via Railway.

### Deployment

There's a GitHub Action for ~~both~~ the front-end ~~and back-end~~.
