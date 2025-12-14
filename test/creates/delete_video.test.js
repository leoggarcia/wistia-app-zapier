const zapier = require('zapier-platform-core');
const App = require('../../index');
const { deleteVideoResponse } = require('../../mocks/wistia');

const appTester = zapier.createAppTester(App);

describe('creates.delete_video', () => {
  it('deletes a video by hashed id', async () => {
    const bundle = {
      authData: {
        api_key: 'test-key',
      },
      inputData: {
        mediaHashedId: 'xxx00x0000',
      },
    };

    let requestMock;

    const perform = async (z, bundle) => {
      requestMock = jest.fn().mockResolvedValue(deleteVideoResponse);
      z.request = requestMock;

      return App.creates.delete_video.operation.perform(z, bundle);
    };

    const result = await appTester(perform, bundle);

    // 🔍 HTTP assertions
    expect(requestMock).toHaveBeenCalledTimes(1);

    const requestConfig = requestMock.mock.calls[0][0];

    expect(requestConfig).toEqual(
      expect.objectContaining({
        method: 'DELETE',
        url: 'https://api.wistia.com/v1/medias/xxx00x0000',
      })
    );

    // ✅ Returned value
    expect(result).toMatchObject({
      id: 11111111,
      status: 'deleted',
    });
  });
});
