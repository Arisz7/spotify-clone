export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token: "BQCwEWeBd-B1zuwKw-c7vhaaNEQUvuhziQ9f8ySmck2NupQjuUWKG7zKVkDz0YKdcUsguKd99ZLjZ4PdbCY0EFuyP8092PvuoveXj3j8EWznAmAiKKISKRnh2xoqUYqR1AgLjn6quUi0LR456jfuuZIMCOVfl65d_kK7k4gWVxM9YO9mg7n-7kZDz43ejjjPl_W1pnGPLggP-z8FS3mO"
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;