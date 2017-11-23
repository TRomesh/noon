import {
  GET_BRANDS,
  SEARCH_BRAND,
  LIKE_BRAND,
  ERROR_BRANDS,
  DELETE_LIKED_BRAND
} from "../constants/brandConstants";

// states of brand
const initialState = {
  brands: [
    {title:'Apple',
    description:'Apple inc.',
    url:'https://images.apple.com/v/iphone/home/w/images/home/iphone_x_large.jpg',
    datetime:'2017/11/23',
    likecount: 1},
    {title:'Samsung',
    description:'Samsung coporation.',
    url:'http://images.samsung.com/is/image/samsung/p5/global/mkt/unpacked201708/home/galaxy-unpacked201708-black-pc.jpg?$ORIGIN_JPG$',
    datetime:'2017/11/23',
    likecount: 1},
    {title:'HTC',
    description:'HTC inc.',
    url:'http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-u11/hp/en_US/u11-ubox-homepage.jpg',
    datetime:'2017/11/23',
    likecount: 1},
    {title:'Nokia',
    description:'Nokia HND global.',
    url:'https://images.contentful.com/wcfotm6rrl7u/1LISs3bvec4E468sGSo4M8/116efe1edb70a94b30386bce9c12203e/Nokia-6-Devices.jpg?fm=jpg&fl=progressive&w=1920&q=80&w=1440',
    datetime:'2017/11/23',
    likecount: 1},
    {title:'Huawie',
    description:'Huawie inc.',
    url:'http://www-file.huawei.com/-/media/CORPORATE/Images/home/big-banner/2017/mate10pro-big-banner-bg.jpg',
    datetime:'2017/11/23',
    likecount: 1}],
  error:false
};

// switch case to select Action type
export default function Brand(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return Object.assign({}, state, { senderror:false,brands:state.brands.concat(action.payload) });
    case LIKE_BRAND:
      return Object.assign({}, state, { brands:state.brands.concat(action.payload) });
    case SEARCH_BRAND:
      return Object.assign({}, state, { brands: action.payload });
    case ERROR_BRANDS:
      return Object.assign({}, state, { brands: action.payload });
    case DELETE_LIKED_BRAND:
      return Object.assign({}, state, { brands: action.payload });
    default:
      return state;
  }
}
