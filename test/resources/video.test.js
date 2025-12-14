const zapier = require('zapier-platform-core');
const App = require('../../index');
const { videoListResponse } = require('../../mocks/wistia');

const appTester = zapier.createAppTester(App);

describe('resources.video.list', () => {
  it('lists videos and maps id and name correctly', async () => {
    const bundle = {
      authData: {
        api_key: 'test-key',
      },
      inputData: {},
    };

    let requestMock;

    const perform = async (z, bundle) => {
      requestMock = jest.fn().mockResolvedValue(videoListResponse);
      z.request = requestMock;

      return App.resources.video.list.operation.perform(z, bundle);
    };

    const results = await appTester(perform, bundle);

    // 🔍 HTTP assertions
    expect(requestMock).toHaveBeenCalledTimes(1);

    expect(requestMock).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'https://api.wistia.com/v1/medias.json',
      })
    );

    // ✅ Results assertions
    expect(results).toHaveLength(2);

    expect(results[0]).toEqual({
      id: 11111111,
      name: 'First video',
    });

    expect(results[1]).toEqual({
      id: 22222222,
      name: 'Second video',
    });
  });
});
