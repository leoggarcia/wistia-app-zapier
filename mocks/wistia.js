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
            id: 11111111,
            name: 'Test folder',
            public: true,
            created: '2025-12-13T19:31:55+00:00',
        },
        {
            id: 11111111,
            name: 'Another project',
            public: false,
        },
    ],
};

module.exports.deleteVideoResponse = {
    data: {
        id: 11111111,
        status: 'deleted',
    },
};

module.exports.searchVideoResponse = {
    data: {
        data: {
            medias: [
                {
                    id: 11111111,
                    name: 'Video name',
                    hashed_id: 'xxx00x0000',
                    status: 'ready',
                },
            ],
        },
    },
};

module.exports.projectListResponse = {
    data: [
        {
            id: 10288462,
            name: 'Test folder',
            public: true,
        },
        {
            id: 20456789,
            name: 'Another project',
            public: false,
        },
    ],
};

module.exports.videoListResponse = {
    data: [
        {
            hashed_id: 'xxxx0x0xx1',
            name: 'First video',
            status: 'ready',
        },
        {
            hashed_id: 'xxxx0x0xx2',
            name: 'Second video',
            status: 'processing',
        },
    ],
};
