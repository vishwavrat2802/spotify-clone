
export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item:null,
    // token:'BQA0KINp3ECXaH2yi37yxNF-XDFxKBgvU6B0jG8VB52UeRY8NTw-DXy4pSzZCnCx5vbqcS9N2wvW3WRC0_Ouas4SOSNIlj-akOqAIlgCwPjb0dWiKd2lm6zUsCvbLxRzxbysfuyfWswv9aZSb22Bcy_LFHPvkot7YRjesW6_v2a_i6_jE9ZJ'
    token:null,
    curr_playing: null,
    recently_played:null,
    playback:'',
    is_playing:false,
    sound:null,
    top_tracks: null,
    volume:50
};

const reducer = (state,action) => {
    
    switch(action.type) {
        case 'SET_USER': return {...state,user:action.user};
        case 'SET_TOKEN': return {...state,token:action.token};
        case 'SET_PLAYLISTS': return{...state,playlists:action.playlists};
        case 'SET_CURRENTPLAYING': return{...state,curr_playing:action.curr_playing};
        case 'RECENTLY_PLAYED':return{...state,recently_played:action.recently_played};
        case 'PLAYBACK':return{...state,playback:action.playback};
        case 'PLAY': return{...state,is_playing:action.is_playing};
        case 'SET_SOUND': return{...state,sound:action.sound};
        case 'SET_TOPTRACKS' : return{...state,top_tracks:action.top_tracks}; 
        case 'SET_VOLUME' : return{...state,volume:action.volume};
        default: return state;
    }
    
}

export default reducer;