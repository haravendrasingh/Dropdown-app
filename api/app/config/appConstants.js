/**
 * @providesModule Constants
 */
module.exports = Object.freeze({
    SUCCESS: "Success",
    NO_DATA_FOUND: "No data found",
    FAIL: 'Failed',
    MESSAGES: {
        INAVLID_DATA_ENTERED: 'data entered is not valid',
        SERVER_ERROR: 'server error occured!! , please try again later',
        UNKNOWN_ERROR: 'sorry unknown error occured',
        DEVELOPER: {
            ADD_SUCCESS : 'Product has been added successfully',
            FILE_DELETE_SUCCESS : 'File has been removed successfully',
            PRODUCT_UPDATE_SUCCESS : 'Product has been successfully updated',
            PRODUCT_DELETE_SUCCESS : 'Product has been deleted successfully',
            INVALID_CREDENTIALS: 'Invalid credentials sent',
            INVALID_TOKEN: 'Invalid/Expired Token Sent',
            INVALID_DATA_SENT: 'data sent is either invalid or missing',
            EMAIL_SEND_FAIL: 'Mail Server Error Occured',
            UNABLE_TO_INSERT: 'unable to insert the give data',
            API_REQUEST_FAIL: 'request to external API failed.',
            EMAIL_INVALID:'Entered email address is not valid',
            AUTH_TYPE_INVALID:'Auth type sent is not valid',
            INVALID_OBJ_ID:'Object ID sent is not valid',
        }
    },
    PORT: 5000,
});