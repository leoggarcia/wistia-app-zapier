const zapier = require('zapier-platform-core');
const App = require('../../index');
const { projectListResponse } = require('../../mocks/wistia');

const appTester = zapier.createAppTester(App);

describe('resources.project.list', () => {
  it('lists projects and maps id and name correctly', async () => {
    const bundle = {
      authData: {
        api_key: 'test-key',
      },
      inputData: {},
    };

    let requestMock;

    const perform = async (z, bundle) => {
      requestMock = jest.fn().mockResolvedValue(projectListResponse);
      z.request = requestMock;

      return App.resources.project.list.operation.perform(z, bundle);
    };

    const results = await appTester(perform, bundle);

    // 🔍 Request assertions
    expect(requestMock).toHaveBeenCalledTimes(1);

    expect(requestMock).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'https://api.wistia.com/v1/projects.json',
      })
    );

    // ✅ Resultado
    expect(results).toHaveLength(2);

    expect(results[0]).toEqual({
      id: 10288462,
      name: 'Test folder',
    });

    expect(results[1]).toEqual({
      id: 20456789,
      name: 'Another project',
    });
  });
});
