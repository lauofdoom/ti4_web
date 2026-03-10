const devConfig = {
  api: {
    mapsUrl: "/proxy/maps.json",
    proxyMapsUrl: "/proxy/maps.json",
    frogMapUrl:
      "https://qw2j1lld43.execute-api.us-east-1.amazonaws.com/Production/frog",
    websiteBase: import.meta.env.VITE_WEBSITE_BASE ?? "http://localhost:5173/",
    discordLoginUrl:
      import.meta.env.VITE_DISCORD_LOGIN_URL ?? "http://localhost:8000/login",
    discordRedirectUri:
      import.meta.env.VITE_DISCORD_REDIRECT_URI ??
      "http://localhost:5173/login",
    gameDataUrl: "/proxy/webdata",
    botApiUrl: "/bot/api",
    websocketUrl:
      import.meta.env.VITE_WEBSOCKET_URL ?? "ws://192.168.1.116:8271/ws",
  },
};

const prodConfig = {
  api: {
    mapsUrl: "/proxy/maps.json",
    proxyMapsUrl: "/proxy/maps.json",
    frogMapUrl:
      "https://qw2j1lld43.execute-api.us-east-1.amazonaws.com/Production/frog",
    websiteBase: import.meta.env.VITE_WEBSITE_BASE ?? "/",
    discordLoginUrl: import.meta.env.VITE_DISCORD_LOGIN_URL ?? "/auth/login",
    discordRedirectUri:
      import.meta.env.VITE_DISCORD_REDIRECT_URI ??
      `${window.location.origin}/login`,
    gameDataUrl: "/proxy/webdata",
    botApiUrl: "/bot/api",
    websocketUrl:
      import.meta.env.VITE_WEBSOCKET_URL ??
      `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/ws`,
  },
};

export const config = import.meta.env.DEV ? devConfig : prodConfig;
