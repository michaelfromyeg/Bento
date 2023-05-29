const path = require("path/posix");
const { getWeather } = require("./src/weather");

module.exports = async (fastify, opts) => {
    /**
     * Make static files accessible.
     */
    fastify.register(require("fastify-static"), {
        root: path.join(__dirname, "public"),
        prefix: "/",
    })

    /**
     * Enable CORS for localhost and my personal domain.
     */
    fastify.register(require("fastify-cors"), {
        origin: (origin, cb) => {
            console.log({
                timestamp: new Date(),
                origin,
            });

            cb(null, true);

            // TODO(michaelfromyeg): origin is undefined (https://github.com/fastify/fastify-cors/issues/236)
            //                       bring back when fixed!
            // if (/localhost/.test(origin) || /michaeldemar\.co/.test(origin)) {
            //     // Request from localhost or personal homepage will pass
            //     cb(null, true);
            //     return;
            // }

            // For cert verification
            // cb(null, true);

            // TODO: see above comment; bring back... eventually!
            // Generate an error on other origins, disabling access
            // cb(new Error("Not allowed"));
        },
    });

    /**
     * Register the GET /weather with all four parameters.
     */
    fastify.route({
        method: "GET",
        url: "/api/weather",
        schema: {
            querystring: {
                type: "object",
                properties: {
                    latitude: { type: "number" },
                    longitude: { type: "number" },
                    unit: { type: "string" },
                    language: { type: "string" },
                },
                required: ["latitude", "longitude", "unit", "language"],
            },
        },
        handler: async (request, reply) => {
            const { latitude, longitude, unit, language } = request.query;

            console.log({
                timestamp: new Date(),
                query: {
                    latitude,
                    longitude,
                    unit,
                    language,
                },
            });

            const weather = await getWeather(
                latitude,
                longitude,
                unit,
                language
            );
            return weather;
        },
    });

    console.log({
        timestamp: new Date(),
        message: "All routes registered!",
    });
};
