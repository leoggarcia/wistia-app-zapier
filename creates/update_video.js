const perform = async (z, bundle) => {
    const url =
        'https://api.wistia.com/v1/medias/' + bundle.inputData.mediaHashedId;

    const response = await z.request({
        method: 'PUT',
        url: url,
        body: {
            name: bundle.inputData.name,
            description: bundle.inputData.description,
            project_id: bundle.inputData.project_id,
        },
    });
    return response.data;
};

module.exports = {
    key: 'update_video',
    noun: 'Video',

    display: {
        label: 'Update Video',
        description: 'Update video metadata',
    },

    operation: {
        perform,
        inputFields: [
            {
                key: 'mediaHashedId',
                label: 'Video',
                required: true,
                dynamic: 'video.hashed_id.name',
                helpText: 'Select the video you want to update',
            },
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

        outputFields: [],
    },
};
