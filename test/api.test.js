import * as apiMock from './apiMock';

describe('valid game created ', () => {
  const response = { result: 'Leaderboard score created correctly.' };

  const mockUpload = jest.fn().mockImplementation((url, params, name, scores) => {
    expect(url).toContain('mdFQJuniXYEZdkJargKX');

    params.method = 'POST';
    apiMock.fetchCall(url, params);

    const data = { user: name, score: scores };

    apiMock.mockLeaderBoard.result.push(data);

    return Promise.resolve({
      json: () => Promise.resolve(response),
    });
  });

  it("can submit a player's name and score ", () => mockUpload(apiMock.url, apiMock.params, 'UserName', 10)
    .then((response) => {
      const data = response.json();
      expect(data).toBeInstanceOf(Promise);
      expect(data).resolves.toHaveProperty('result', 'Leaderboard score created correctly.');
      expect(apiMock.mockLeaderBoard.result).toHaveLength(4);
    }));
});
