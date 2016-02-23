var config = require('./../config');

const BACKEND_HOST = config.get('backendHost');

var isAuthenticate = false;
var headerToken = "";

function make_base_auth_token(userName, password) {
    var token = userName + ':' + password;
    var hash = btoa(token);
    return "Basic " + hash;
}

function successLoginFunction() {
    isAuthenticate = true;
};

function errorLoginFunction() {
    headerToken = "";
    isAuthenticate = false;
};

function basicAuthGET(url, successFunction, errorFunction) {
    var result;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        url: BACKEND_HOST + url,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', headerToken);
        },
        success: function (data) {
            successFunction(data);
            result = data;
        },
        error: function (xhr, status, err) {
            errorFunction(xhr, status, err);
        }
    })
    return result;
};

function basicAuthPOST(url, dataJson, successFunction, errorFunction) {
    var result;
    $.ajax({
        type: 'POST',
        url: BACKEND_HOST + url,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dataJson),
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', headerToken);
        },
        success: function (data) {
            successFunction(data);
        },
        error: function (xhr, status, err) {
            errorFunction(xhr, status, err);
        }
    });
    return result;
};
/**
 * This function check access and set isAuthenticate state and store token.
 * @param {string} userName - users email.
 * @param {string} password - users password.
 *
 */
module.exports.login = function (userName, password) {
    headerToken = make_base_auth_token(userName, password);
    basicAuthGET('/user-login', successLoginFunction, errorLoginFunction);
}

/**
 * This function send basic-auth GET request to secured resources on backEnd server.
 * @param {string} url - endpoint in backEnd server.
 * @param {function} successFunction - success callback function.
 * @param {function} errorFunction - error callback function.
 *
 * @return {json} secured resource.
 */
module.exports.getSecuredRecources = function (url, successFunction, errorFunction) {
    return basicAuthGET(url, headerToken, successFunction, errorFunction);
};
/**
 * This function send basic-auth POST request to secured resources on backEnd server.
 * @param {string} url - endpoint in backEnd server.
 * @param {json} dataJson - json data for request payload.
 * @param {function} successFunction - success callback function.
 * @param {function} errorFunction - error callback function.
 *
 * @return {json} secured resource.
 */
module.exports.postSecuredRecources = function (url, dataJson, successFunction, errorFunction) {
    return basicAuthPOST(url, dataJson, successFunction, errorFunction);
};
/**
* This function provide current authenticate status.
*
* @return {boolean} authenticate status.
*/
module.exports.isAuthenticate = isAuthenticate;

