const zapier = require('zapier-platform-core');
const App = require('../../index');
const { uploadVideoResponse } = require('../../mocks/wistia');

const appTester = zapier.createAppTester(App);

describe('creates.video', () => {
  it('uploads a video using form-urlencoded body', async () => {
    const bundle = {
      authData: {
        api_key: 'test-key',
      },
      inputData: {
        name: 'Video name.',
        description: 'Test description',
        url: 'https://example.com/video.mp4',
        project_id: '10288462',
      },
    };

    let requestMock;

    const perform = async (z, bundle) => {
      requestMock = jest.fn().mockResolvedValue(uploadVideoResponse);
      z.request = requestMock;

      return App.creates.video.operation.perform(z, bundle);
    };

    const result = await appTester(perform, bundle);

    // 🔍 Assertions de request (nivel PRO)
    expect(requestMock).toHaveBeenCalledTimes(1);

    const requestConfig = requestMock.mock.calls[0][0];

    expect(requestConfig).toMatchObject({
      method: 'POST',
      url: 'https://upload.wistia.com/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 🧪 Body correcto (form-urlencoded)
    expect(requestConfig.body).toContain('name=Video+name.');
    expect(requestConfig.body).toContain('description=Test+description');
    expect(requestConfig.body).toContain(
      'url=https%3A%2F%2Fexample.com%2Fvideo.mp4'
    );
    expect(requestConfig.body).toContain('project_id=10288462');

    // ✅ Resultado
    expect(result).toMatchObject({
      id: 11111111,
      name: 'Video name.',
    });
  });
});
