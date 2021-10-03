import { compile } from "path-to-regexp";

/**
 * All routes within this spa.
 */
export const APP_ROUTE = {
    HOME: "/",
    PRODUCT_ADS: "/product/:productName/:productId",
    CREATE_ADS: "/create-add/:productName/:productId",
    UPDATE_ADS: "/update-add/:productName/:adId",
};

/**
 *  A general url builder used to build url's.
 * @param apiUrl in pathToRegexp format
 * @param params key value pairs to build url
 * @param baseUrl the baseurl eg. http://localhost:3000.
 * @param query query params in object format eg. {id : 1234}
 * @returns a complete url.
 */
const buildUrl = (baseUrl = "", path, params = {}, query = {}) => {
    return `${baseUrl}${compile(path, { encode: encodeURIComponent })(params)}${
        Object.keys(query).length ? "?" : ""
    }${new URLSearchParams(query).toString()}`;
};

/**
 * Builds url for the frontend
 * @param apiUrl in pathToRegexp format
 * @param params key value pairs to build url
 * @param query query params in object format eg. {id : 1234}
 * @returns a complete url.
 */
export const buildRouteiUrl = (path, params = {}, query = {}) => buildUrl("", path, params, query);
