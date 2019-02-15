export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

export const alertActions = {
    success,
    error,
    clear
};

function success(message: string) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message: string) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return {type: alertConstants.CLEAR};
}