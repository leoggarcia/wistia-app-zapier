const getVideoUploaded = require('./triggers/video_uploaded');

const createVideo = require("./creates/video");

const projectResource = require("./resources/project");

const findVideo = require("./searches/video");

const addApiKeyToHeader = (request, z, bundle) => {
    request.headers['Authorization'] =  `Bearer ${bundle.authData.apiToken}`;
    return request;
};

module.exports = {
    // This is just shorthand to reference the installed dependencies you have.
    // Zapier will need to know these before we can upload.
    version: require('./package.json').version,
    platformVersion: require('zapier-platform-core').version,

    // If you want your trigger to show up, you better include it here!
    triggers: {
        [getVideoUploaded.key]: getVideoUploaded,
    },

    // If you want your searches to show up, you better include it here!
    searches: {
        [findVideo.key]: findVideo
    },

    // If you want your creates to show up, you better include it here!
    creates: {
        [createVideo.key]: createVideo
    },

    resources: {
        [projectResource.key]: projectResource
    },

    authentication: {
        type: 'custom',
        fields: [{ key: 'apiToken', type: 'string' }],
        test: async (z, bundle) => {
            const params = {
                url: 'https://api.wistia.com/v1/medias.json',
            };

            const response = await z.request(params);
            // this should return an array of objects
            return response.data;
        },
    },

    beforeRequest: [addApiKeyToHeader],
};
