module.exports = {
    testPathIgnorePatterns: [
        "./.next/", 
        "./node_modules/"
    ],
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest'
    },
    "moduleNameMapper": {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    verbose: true
};
  