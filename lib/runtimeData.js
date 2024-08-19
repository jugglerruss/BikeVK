const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "BitNomads",
        productName: "FlatOutYa",
        productVersion: "0.11",
        sdkVersion: "3.17.1",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/Web_YandexGames_temp.loader.js",
        dataURL: "bin/Web_YandexGames_temp.data.br",
        frameworkURL: "bin/Web_YandexGames_temp.framework.js.br",
        workerURL: "",
        codeURL: "bin/Web_YandexGames_temp.wasm.br",
        symbolsURL: "",
        streamingURL: "streaming",

        // Aspect ratio.
        desktopAspectRatio: 1.777778,
        mobileAspectRatio: 1.777778,

        // Debug mode.
        debugMode: false,

        // Platform specific scripts.
        wrapperScript: "yandexGamesWrapper.js",

        // Yandex Ads Network.
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();