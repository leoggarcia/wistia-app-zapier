// triggers on a new video_uploaded with a certain tag
const perform = async (z, bundle) => {
    const response = await z.request({
        url: 'https://api.wistia.com/v1/medias.json',
        params: {
            sort_by: 'created',
            sort_direction: 'desc',
        },
    });
    // this should return an array of objects
    return response.data;
};

module.exports = {
    // see here for a full list of available properties:
    // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#triggerschema
    key: 'video_uploaded',
    noun: 'Video_uploaded',

    display: {
        label: 'New Video_uploaded',
        description: 'Triggers when a new video is uploaded.',
    },

    operation: {
        perform,

        // `inputFields` defines the fields a user could provide
        // Zapier will pass them in as `bundle.inputData` later. They're optional.
        inputFields: [],

        // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
        // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
        // returned records, and have obvious placeholder values that we can show to any user.
        sample: {
            id: 142050297,
            hashed_id: 'chg30c6446',
            progress: 0.5833333333333334,
            type: 'Video',
            archived: false,
            name: 'Video name.',
            duration: 11.818,
            created: '2025-12-13T19:43:05+00:00',
            updated: '2025-12-13T19:43:12+00:00',
            description: '',
            status: 'processing',
            thumbnail: {
                url: 'https://embed-ssl.wistia.com/deliveries/42d24600bb6f12ea7a1996e6e14a786da31b1e0d.jpg?image_crop_resized=200x120',
                width: 200,
                height: 120,
            },
            tags: [],
            assets: [
                {
                    width: 2878,
                    height: 1798,
                    type: 'OriginalFile',
                    fileSize: 14220028,
                    contentType: 'video/quicktime',
                    url: 'http://embed.wistia.com/deliveries/003700b0256eb3909ed9f7db50b605cb.bin',
                },
                {
                    width: 400,
                    height: 248,
                    type: 'Mp4VideoFile',
                    fileSize: 277725,
                    contentType: 'video/mp4',
                    url: 'http://embed.wistia.com/deliveries/a45ee58a9183f81858bbcb33c2460d888ba62b29.bin',
                },
                {
                    width: 2878,
                    height: 1798,
                    type: 'StillImageFile',
                    fileSize: 1107588,
                    contentType: 'image/jpg',
                    url: 'http://embed.wistia.com/deliveries/42d24600bb6f12ea7a1996e6e14a786da31b1e0d.bin',
                },
                {
                    width: 2000,
                    height: 372,
                    type: 'StoryboardFile',
                    fileSize: 120081,
                    contentType: 'image/jpg',
                    url: 'http://embed.wistia.com/deliveries/6ead828a766a05889570eee386594f68e9c66c84.bin',
                },
            ],
            project: {
                id: 10288462,
                hashed_id: 'c8133zq4uz',
                name: 'Test foler',
            },
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
