const perform = async (z, bundle) => {
    const response = await z.request({
        url: 'https://api.wistia.com/v1/search',
        params: {
            q: bundle.inputData.name,
        },
    });
    return response.data.data.medias;
};

module.exports = {
    key: 'video',
    noun: 'Video',

    display: {
        label: 'Find Video',
        description: 'Finds a video based on name.',
    },

    operation: {
        perform,
        inputFields: [
            {
                key: 'name',
                required: true,
                helpText: 'Find the Video with this name.',
            },
        ],
		cleanInputData: false,
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
        outputFields: [
        ],
    },
};
