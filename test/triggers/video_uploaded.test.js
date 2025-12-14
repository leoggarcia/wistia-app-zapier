const zapier = require('zapier-platform-core');
const App = require('../../index');
const { mediaListResponse } = require('../../mocks/wistia');

const appTester = zapier.createAppTester(App);

describe('triggers.video_uploaded', () => {
    it('returns latest uploaded video', async () => {
        const bundle = {
            inputData: {},
            authData: {
                api_key: 'test-key',
            },
        };

        let requestMock;

        const perform = async (z, bundle) => {
            requestMock = jest.fn().mockResolvedValue(mediaListResponse);
            z.request = requestMock;

            return App.triggers.video_uploaded.operation.perform(z, bundle);
        };

        const results = await appTester(perform, bundle);

        // ✅ ahora sí existe
        expect(requestMock).toHaveBeenCalledTimes(1);
        expect(results).toHaveLength(1);

        expect(results[0]).toMatchObject({
            id: 11111111,
            name: 'Video name.',
        });
    });
});
