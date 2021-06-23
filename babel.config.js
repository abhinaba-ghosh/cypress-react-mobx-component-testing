module.exports = function(api) {
    api.cache(true);
    return {
        sourceType: 'unambiguous',
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: false }],
            [
                '@babel/plugin-transform-runtime',
                {
                    regenerator: true,
                },
            ],
        ],
        presets: ['@babel/preset-env', '@babel/preset-react'],
    };
};
