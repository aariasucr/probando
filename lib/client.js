"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = exports.PaymentMethod = void 0;
/**
 *  Representa los tipos de pago habilitados para la CLIENTA
 */
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CARD"] = "Card";
    PaymentMethod["CASH"] = "Cash";
    PaymentMethod["SINPE"] = "Sinpe";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
/**
 * Representa el estado de la clienta en la aplicacion
 * Util para los borrados lógicos de los clientes en el sistema
 */
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "Active";
    UserStatus["INACTIVE"] = "Inactive";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
//# sourceMappingURL=client.js.map