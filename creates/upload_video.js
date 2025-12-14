const perform = async (z, bundle) => {
    // FOR THIS REQUEST THE BODY SHOULD BE FORM DATA NOT JSON
    const formBody = new URLSearchParams({
        name: bundle.inputData.name,
        description: bundle.inputData.description,
        url: bundle.inputData.url,
        project_id: bundle.inputData.project_id,
    }).toString();

    const response = await z.request({
        method: 'POST',
        url: 'https://upload.wistia.com/',

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
    });

    return response.data;
};

module.exports = {
    key: 'video',
    noun: 'Video',

    display: {
        label: 'Upload Video',
        description: 'Upload a video from a URL.',
    },

    operation: {
        perform,
		inputFields: [
            { key: 'name', required: true },
            { key: 'description', required: true },
            { key: 'url', required: true },
            {
                key: 'project_id',
                label: 'Project (Folder)',
                dynamic: 'project.id.name',
                required: false,
                helpText:
                    'Select the Wistia project (folder) where the video will be uploaded',
            },
        ],
        cleanInputData: false,
        sample: {
            id: 11111111,
            hashed_id: 'xxx00x0000',
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
                hashed_id: 'x0000xx0xx',
                name: 'Test foler',
            },
        },
        outputFields: [
        ],
    },
};
