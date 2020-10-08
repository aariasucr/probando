"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.RideStatus = void 0;
/**
 *  * Enum con los status del viaje
 */
var RideStatus;
(function (RideStatus) {
    RideStatus["CLIENT_WAITING"] = "Client waiting";
    RideStatus["IN_PROGRESS"] = "In progress";
    RideStatus["CANCELLED_BY_CLIENT"] = "Cancelled by client";
    RideStatus["CANCELLED_BY_DRIVER"] = "Cancelled by driver";
    RideStatus["COMPLETED"] = "Completed";
})(RideStatus = exports.RideStatus || (exports.RideStatus = {}));
/**
 *  * Enum con los tipos de metodos de pago
 */
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CASH"] = "Cash";
    PaymentMethod["DEBIT"] = "Debit";
    PaymentMethod["SINPE"] = "SINPE";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
//# sourceMappingURL=rides.js.map