export const Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVTAR =
  "https://static.vecteezy.com/system/resources/previews/029/796/026/non_2x/asian-girl-anime-avatar-ai-art-photo.jpg";
export const API_OPTION = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer"+process.env.REACT_APP_TMDB_KEY,
    accept: "application/json",
  },
};
export const IMAGE_CDN_URL="https://image.tmdb.org/t/p/w500/"
export const BACKGROUND_URL="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
export const SUPPORTED_LANGUAGES=[
  {
    identifier:"en",
    name:"English"
  },
  {
    identifier:"hindi",
    name:"Hindi"
  },
  {
    identifier:"spanish",
    name:"Spanish"
  }
]
export const OPEN_AI_KEY=process.env.REACT_APP_OPEN_AI_KEY
export const play_icon="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg"
export const INFO_ICON="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png"