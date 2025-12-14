// create a particular video by name
const perform = async (z, bundle) => {
    const url =
        'https://api.wistia.com/v1/medias/' + bundle.inputData.mediaHashedId;

    const response = await z.request({
        method: 'PUT',
        url: url,
        // if `body` is an object, it'll automatically get run through JSON.stringify
        // if you don't want to send JSON, pass a string in your chosen format here instead
        body: {
            name: bundle.inputData.name,
            description: bundle.inputData.description,
            project_id: bundle.inputData.project_id,
        },
    });
    // this should return a single object
    return response.data;
};

module.exports = {
    // see here for a full list of available properties:
    // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#createschema
    key: 'update_video',
    noun: 'Video',

    display: {
        label: 'Create Video',
        description: 'Update video metadata',
    },

    operation: {
        perform,

        // `inputFields` defines the fields a user could provide
        // Zapier will pass them in as `bundle.inputData` later. They're optional.
        // End-users will map data into these fields. In general, they should have any fields that the API can accept. Be sure to accurately mark which fields are required!
        inputFields: [
            { key: 'mediaHashedId', required: false },
            { key: 'name', required: false },
            { key: 'description', required: false },
            {
                key: 'project_id',
                label: 'Project (Folder)',
                dynamic: 'project.id.name',
                required: false,
                helpText:
                    'Select the Wistia project (folder) where the video will be uploaded',
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
            name: 'Update test',
            duration: 11.818,
            created: '2025-12-13T19:43:05+00:00',
            updated: '2025-12-14T17:13:00+00:00',
            description: '',
            status: 'ready',
            thumbnail: {
                url: 'https://embed-ssl.wistia.com/deliveries/42d24600bb6f12ea7a1996e6e14a786da31b1e0d.jpg?image_crop_resized=200x120',
                width: 200,
                height: 120,
            },
            tags: [],
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
