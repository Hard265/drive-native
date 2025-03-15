module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "react-native-iconify/babel",
                {
                    icons: [
                        "mingcute:loading-3-fill",
                    ],
                },
            ],
            "react-native-reanimated/plugin",
        ],
    };
};
