const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "BitNomads",
        productName: "Racing Rider: Motorcycle Game",
        productVersion: "1.258ya",
        sdkVersion: "3.17.19",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/BikeProjectYa_Web_YandexGames.loader.js",
        dataURL: "bin/BikeProjectYa_Web_YandexGames.data.br",
        frameworkURL: "bin/BikeProjectYa_Web_YandexGames.framework.js.br",
        workerURL: "",
        codeURL: "bin/BikeProjectYa_Web_YandexGames.wasm.br",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "None",
        iconTextureName: "icon.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "yandexGamesWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
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