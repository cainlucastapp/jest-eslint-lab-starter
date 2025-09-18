const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

// Reformats a string so that the first letter of each word is capitalized
describe('capitalizeWords', () => {
    // Every word is capitlized
    it('Every word is capitlized', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    // Empty String
    it('empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    // Strings with Special Characters
    it('string with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });

    // Single-word Strings
    it('single word strings', () => {
        expect(capitalizeWords('hello')).toBe('Hello');
    });
});



// Filters an array of user objects, returning only active users
describe('filterActiveUsers', () => {
    // User Array
    const users = [
        { name: "Alice", isActive: true },
        { name: "Bob", isActive: false },
    ];
    // Mixed active/inactive users array
    it('returning only active users', () => {
        expect(filterActiveUsers(users)).toEqual([{ name: "Alice", isActive:
        true }]);
    });
    // Array with all inactive users
    it('all users are inactive', () => {
        users[0].isActive = false
        expect(filterActiveUsers(users)).toEqual([]);
    });
    // Empty array
    it('all users are inactive', () => {
        const users = []
        expect(filterActiveUsers(users)).toEqual([]);
    });
});

//Logs an action performed by a user with a timestamp
describe('logAction', () => {
    // User logs in
    it('User Alice logs in', () => {
        const timestamp = new Date().toISOString()
        expect(logAction("login", "Alice")).toBe(`User Alice performed login at $
        {timestamp}`);
    });
    // Missing action or username.
    it('Username is missing', () => {
        const timestamp = new Date().toISOString()
        expect(logAction("login")).toBe(`User undefined performed login at $
        {timestamp}`);
    });
    // Empty strings as inputs.
    it('inputs are empty', () => {
        const timestamp = new Date().toISOString()
        expect(logAction("","")).toBe(`User performed at ${timestamp}`);
    });
});
