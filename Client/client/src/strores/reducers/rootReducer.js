import {
    GET_PRODUCTS,
    GET_PRODUCT,
    POST_PRODUCT,
    PUT_PRODUCT,
    DELETE_PRODUCT,
    GET_CATEGORIES,
} from "../actions/type.js";

const initialState = {
    categories: [],
    products: [],
    product: {
        id_produk: "",
        nama_produk: "",
        kategori: "",
        harga: "",
        status: "",
    },
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
        case DELETE_PRODUCT:
        case POST_PRODUCT:
        case PUT_PRODUCT:
            return { ...state, products: action.payload };
        case GET_CATEGORIES:
            return { ...state, categories: action.payload };
        case GET_PRODUCT:
            return { ...state, product: action.payload };
        default:
            return { ...state };
    }
}
