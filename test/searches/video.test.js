const zapier = require('zapier-platform-core');
const App = require('../../index');
const { searchVideoResponse } = require('../../mocks/wistia');

const appTester = zapier.createAppTester(App);

describe('searches.video', () => {
  it('finds videos by name', async () => {
    const bundle = {
      authData: {
        api_key: 'test-key',
      },
      inputData: {
        name: 'Video name',
      },
    };

    let requestMock;

    const perform = async (z, bundle) => {
      requestMock = jest.fn().mockResolvedValue(searchVideoResponse);
      z.request = requestMock;

      return App.searches.video.operation.perform(z, bundle);
    };

    const results = await appTester(perform, bundle);

    // 🔍 HTTP assertions
    expect(requestMock).toHaveBeenCalledTimes(1);

    const requestConfig = requestMock.mock.calls[0][0];

    expect(requestConfig).toMatchObject({
      url: 'https://api.wistia.com/v1/search',
      params: {
        q: 'Video name',
      },
    });

    // ✅ Results assertions
    expect(results).toHaveLength(1);

    expect(results[0]).toMatchObject({
      id: 11111111,
      name: 'Video name',
      hashed_id: 'xxx00x0000',
    });
  });
});
