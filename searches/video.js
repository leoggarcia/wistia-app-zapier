const perform = async (z, bundle) => {
    const response = await z.request({
        url: 'https://api.wistia.com/v1/search',
        params: {
            q: bundle.inputData.name,
        },
    });
    // this should return an array of objects (but only the first will be used)
    return response.data.data.medias;
};

module.exports = {
    // see here for a full list of available properties:
    // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#searchschema
    key: 'video',
    noun: 'Video',

    display: {
        label: 'Find Video',
        description: 'Finds a video based on name.',
    },

    operation: {
        perform,

        // `inputFields` defines the fields a user could provide
        // Zapier will pass them in as `bundle.inputData` later. Searches need at least one `inputField`.
        inputFields: [
            {
                key: 'name',
                required: true,
                helpText: 'Find the Video with this name.',
            },
        ],

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obvious placeholder values that we can show to any user.
        sample: {
            id: 11111111,
            hashed_id: 'xxx00x0000',
            progress: 1.0,
            type: 'Video',
            archived: false,
            name: 'Video name',
            duration: 11.818,
            created: '2025-12-13T19:43:05+00:00',
            updated: '2025-12-13T19:43:31+00:00',
            description: '',
            status: 'ready',
            thumbnail: {
                url: 'https://embed-ssl.wistia.com/deliveries/42d24600bb6f12ea7a1996e6e14a786da31b1e0d.jpg?image_crop_resized=200x120',
                width: 200,
                height: 120,
            },
            projectHashedId: 'x0000xx0xx',
        },

        // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
        // For a more complete example of using dynamic fields see
        // https://github.com/zapier/zapier-platform/tree/main/packages/cli#customdynamic-fields
        // Alternatively, a static field definition can be provided, to specify labels for the fields
        outputFields: [
            // these are placeholders to match the example `perform` above
            // {key: 'id', label: 'Person ID'},
            // {key: 'name', label: 'Person Name'}
        ],
    },
};
