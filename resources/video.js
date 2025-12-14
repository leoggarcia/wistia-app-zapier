const performList = async (z, bundle) => {
    const response = await z.request({
        url: 'https://api.wistia.com/v1/medias.json',
    });

    return response.data.map((video) => ({
        hashed_id: video.hashed_id,
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
        hashed_id: "xxxx0x0xx0",
        name: "Your video",
    },

    outputFields: [
        { key: 'hashed_id', label: 'ID' },
        { key: 'name', label: 'Name' },
    ],
};
