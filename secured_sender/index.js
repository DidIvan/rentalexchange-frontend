var config = require('./../config');

const BACKEND_HOST = config.get('backendHost');

function make_base_auth(user, password) {
    var token = user + ':' + password;
    var hash = btoa(token);
    return "Basic " + hash;
}

/**
 * This function send basic-auth GET request.
 * @param {string} url - endpoint in backEnd server.
 * @param {string} username - user email.
 * @param {string} password - user password.
 * @param {function} successFunction - success callback function.
 * @param {function} errorFunction - error callback function.
 */
module.exports.basicAuthSenderGET = function (url, username, password, successFunction, errorFunction) {
    $.ajax({
        type: 'GET',
        url: BACKEND_HOST + url,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', make_base_auth(username, password));
        },
        success: function (data) {
            successFunction(data);
        },
        error: function(xhr, status, err){
            errorFunction(xhr, status, err);
        }
    })
}

/**
 * This function send basic-auth POST request.
 * @param {string} url - endpoint in backEnd server.
 * @param {string} username - user email.
 * @param {string} password - user password.
 * @param {json} dataJson - json data for request payload.
 * @param {function} successFunction - success callback function.
 * @param {function} errorFunction - error callback function.
 */
module.exports.basicAuthSenderPOST = function (url, username, password, dataJson, successFunction, errorFunction) {
    $.ajax({
        type: 'POST',
        url: BACKEND_HOST + url,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dataJson),
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', make_base_auth(username, password));
        },
        success: function (data) {
            successFunction(data);
        },
        error: function(xhr, status, err){
            errorFunction(xhr, status, err);
        }
    });
}
