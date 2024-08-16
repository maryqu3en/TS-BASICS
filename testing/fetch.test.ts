const fetchData = async (): Promise<string> => {
    return 'data';
};

test('fetchData should return data', async () => {
    const data = await fetchData();
    expect(data).toBe('data');
}
);