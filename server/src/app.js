const { getWeather } = require("./weather");

module.exports = async (fastify, opts) => {
    fastify.register(require("fastify-cors"), {
        origin: (origin, cb) => {
            console.log({
                timestamp: new Date(),
                origin,
            });

            if (/localhost/.test(origin) || /michaeldemar\.co/.test(origin)) {
                // Request from localhost or personal homepage will pass
                cb(null, true);
                return;
            }

            // Generate an error on other origins, disabling access
            cb(new Error("Not allowed"));
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
