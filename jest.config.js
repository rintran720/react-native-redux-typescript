const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	...tsjPreset,
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	transform: {
		...tsjPreset.transform,
		'^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
		// '\\.(ts|tsx)$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
	testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
	cacheDirectory: '.jest/cache',
};
