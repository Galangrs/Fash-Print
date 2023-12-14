import {
    GET_PRODUCTS,
    GET_CATEGORIES,
    GET_PRODUCT,
    POST_PRODUCT,
    PUT_PRODUCT,
    DELETE_PRODUCT,
} from "./type.js";
const baseUrl = "http://localhost:3000";

export function getProductsSuccess(payload) {
    return { type: GET_PRODUCTS, payload };
}

export const fetchProductsData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw { name: "Failed to fetch" };
            }
            const jsonResponse = await response.json();
            dispatch(getProductsSuccess(jsonResponse));
            return true;
        } catch (error) {
            Swal.fire(error.name);
            return false;
        }
    };
};

export function getProductSuccess(payload) {
    return { type: GET_PRODUCT, payload };
}

export const fetchProductData = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + "/" + id, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const err = await response.json();
                throw { name: err.ket };
            }
            const jsonResponse = await response.json();
            dispatch(getProductSuccess(jsonResponse));
            return jsonResponse;
        } catch (error) {
            Swal.fire(error.name);
            return false;
        }
    };
};

export function updateProductSuccess(payload) {
    return { type: PUT_PRODUCT, payload };
}

export const fetchUpdateProduct = (id, productData) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + `/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) {
                const err = await response.json();
                throw { name: err.ket };
            }
            const updatedResponse = await fetch(baseUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!updatedResponse.ok) {
                throw { name: "Failed to fetch" };
            }
            const updatedJsonResponse = await updatedResponse.json();
            dispatch(updateProductSuccess(updatedJsonResponse));
            return true;
        } catch (error) {
            Swal.fire(error.name);
            return false;
        }
    };
};

export function addProductSuccess(payload) {
    return { type: POST_PRODUCT, payload };
}

export const fetchAddProduct = (productData) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) {
                const err = await response.json();
                throw { name: err.ket };
            }
            const updatedResponse = await fetch(baseUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!updatedResponse.ok) {
                throw { name: "Failed to fetch updated products" };
            }
            const updatedJsonResponse = await updatedResponse.json();
            dispatch(addProductSuccess(updatedJsonResponse));
            return true;
        } catch (error) {
            Swal.fire(error.name);
            return false;
        }
    };
};

export function deleteProductSuccess(payload) {
    return { type: DELETE_PRODUCT, payload };
}

export const fetchDeleteProductData = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + `/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const err = await response.json();
                throw { name: err.ket };
            }

            const updatedResponse = await fetch(baseUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!updatedResponse.ok) {
                throw { name: "Failed to fetch updated products" };
            }
            const updatedJsonResponse = await updatedResponse.json();

            dispatch(deleteProductSuccess(updatedJsonResponse));
            return true;
        } catch (error) {
            Swal.fire(error.name);
            return false;
        }
    };
};

export function getCategoriesSuccess(payload) {
    return { type: GET_CATEGORIES, payload };
}

export const fetchCategoriesData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + "/kategori", {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw { name: "Failed to fetch" };
            }
            const jsonResponse = await response.json();
            dispatch(getCategoriesSuccess(jsonResponse));
            return jsonResponse;
        } catch (error) {
            Swal.fire(error.name);
            return false;
        }
    };
};
