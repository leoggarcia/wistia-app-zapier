const performList = async (z, bundle) => {
    const response = await z.request({
        url: 'https://api.wistia.com/v1/medias.json',
    });

    return response.data.map((video) => ({
        id: video.id,
        name: video.name,
    }));
};

module.exports = {
    key: 'video',
    noun: 'Video',

    list: {
        display: {
            label: 'New Video',
            description: 'Triggers when - Lists the videos.',
        },
        operation: {
            perform: performList,
            inputFields: [],
            cleanInputData: false,
        },
    },

    sample: {
        id: "11111111",
        name: "Your video",
    },

    outputFields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
    ],
};
