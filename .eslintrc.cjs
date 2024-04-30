module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-refresh', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'react/jsx-sort-props': [
            'warn',
            {
                shorthandLast: false,
                reservedFirst: true,
            },
        ],
    },

}
