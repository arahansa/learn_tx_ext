"use strict";
var GlobalLogger = /** @class */ (function () {
    function GlobalLogger() {
    }
    GlobalLogger.logGlobalsToConsole = function () {
        for (var _i = 0, CONTACT_EMAIL_ARRAY_1 = CONTACT_EMAIL_ARRAY; _i < CONTACT_EMAIL_ARRAY_1.length; _i++) {
            var email = CONTACT_EMAIL_ARRAY_1[_i];
            console.log("found contact : " + email);
        }
    };
    return GlobalLogger;
}());
/*class ContactLogger {
    static logContactData() {
        for (let contact of CONTACT_DATA) {
            console.log(`DisplayText: ${contact.DisplayText}` +
                `, Email : ${contact.Email}`);
        }
    }
}*/
window.onload = function () {
    GlobalLogger.logGlobalsToConsole();
    // ContactLogger.logContactData();
};
