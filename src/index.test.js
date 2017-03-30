import sensitiveWords from '.';

test('should replaces blacklisted words with asteriks', () => {
    expect(sensitiveWords('Some test to see what should be hidden', 
    ['see'])).toBe('Some test to *** what should be hidden');
});

test('should replaces multiple instances of blacklisted words with asteriks', () => {
    expect(sensitiveWords('Some test to see what should be hidden, extra see', 
    ['see'])).toBe('Some test to *** what should be hidden, extra ***');
});