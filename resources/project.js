const performList = async (z, bundle) => {
    const response = await z.request({
        url: 'https://api.wistia.com/v1/projects.json',
    });

    return response.data.map((project) => ({
        id: project.id,
        name: project.name,
    }));
};

module.exports = {
    key: 'project',
    noun: 'Project',

    list: {
        display: {
            label: 'New Project',
            description: 'Lists the projects.',
        },
        operation: {
            perform: performList,
            inputFields: [],
        },
    },

    sample: {
        id: 11111111,
        public: true,
        description:
            'Get started by adding a video to your folder - you can always delete it later!',
        name: "Your folder",
        mediaCount: 0,
        created: '2025-12-13T19:31:55+00:00',
        updated: '2025-12-13T19:31:55+00:00',
        hashedId: 'kd5y87kenn',
        anonymousCanUpload: false,
        anonymousCanDownload: false,
        publicId: 'kd5y87kenn',
    },

    outputFields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
    ],
};
