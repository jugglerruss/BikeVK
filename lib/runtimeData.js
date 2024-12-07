const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "BitNomads",
        productName: "Racing Rider: Motorcycle Game",
        productVersion: "1.3yg",
        sdkVersion: "3.17.19",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/BikeYandex_Web_VKontakte.loader.js",
        dataURL: "bin/BikeYandex_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/BikeYandex_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/BikeYandex_Web_VKontakte.wasm.unityweb",
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
        wrapperScript: "vkontakteWrapper.js",

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