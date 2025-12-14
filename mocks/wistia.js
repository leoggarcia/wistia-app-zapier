module.exports.mediaListResponse = {
    data: [
        {
            id: 11111111,
            name: 'Video name.',
            created: '2025-12-13T19:43:05+00:00',
            project: {
                id: 10288462,
                name: 'Test folder',
            },
        },
    ],
};

module.exports.uploadVideoResponse = {
    data: {
        id: 11111111,
        name: 'Video name.',
        status: 'processing',
    },
};

module.exports.projectListResponse = {
    data: [
        {
            id: 10288462,
            name: 'Test folder',
            public: true,
            created: '2025-12-13T19:31:55+00:00',
        },
        {
            id: 20456789,
            name: 'Another project',
            public: false,
        },
    ],
};
