const getVideoUploaded = require('./triggers/video_uploaded');

const createVideo = require('./creates/upload_video');
const updateVideo = require('./creates/update_video');
const deleteVideo = require('./creates/delete_video');

const projectResource = require('./resources/project');

const findVideo = require('./searches/video');

const videoResource = require('./resources/video');

const addApiKeyToHeader = (request, z, bundle) => {
    request.headers['Authorization'] = `Bearer ${bundle.authData.apiToken}`;
    return request;
};

const test = (z, bundle) =>
    z.request({
        url: 'https://api.wistia.com/v1/account',
    });

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
        [findVideo.key]: findVideo,
    },

    // If you want your creates to show up, you better include it here!
    creates: {
        [createVideo.key]: createVideo,
        [updateVideo.key]: updateVideo,
        [deleteVideo.key]: deleteVideo,
    },

    resources: {
        [projectResource.key]: projectResource,
        [videoResource.key]: videoResource,
    },

    authentication: {
        type: 'custom',
        fields: [
            {
                key: 'apiToken',
                type: 'string',
                label: 'Wistia API Token',
                required: true,
                helpText:
                    'Your Wistia API token can be found by logging into your Wistia account and navigating to Account > Settings > API Access. You can use your Master Token or create a custom token with appropriate permissions. Keep your token secret! More info: https://wistia.com/support/integrations/api#api_tokens',
            },
        ],
        test: test,
        connectionLabel: 'Wistia – {{json.name}}',
    },

    beforeRequest: [addApiKeyToHeader],
};
