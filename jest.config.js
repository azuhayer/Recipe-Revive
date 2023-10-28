const nextJest = require('next/jest')
const createJestConfig = nextJest({
    dir: './',
})


/** @type {import('jest').config} */
const config = {
    testEnvironment : 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
}
module.exports = createJestConfig(config)