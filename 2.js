"use strict";
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["EDITOR"] = "EDITOR";
    UserRole["VIEWER"] = "VIEWER";
})(UserRole || (UserRole = {}));
function canDelete(role) {
    if (role === "ADMIN") {
        return true;
    }
    return false;
}
function canEdit(role) {
    if (role === "EDITOR") {
        return true;
    }
    return false;
}
console.log(canDelete(UserRole.ADMIN));
console.log(canDelete(UserRole.EDITOR));
console.log(canDelete(UserRole.VIEWER));
console.log(canEdit(UserRole.ADMIN));
console.log(canEdit(UserRole.EDITOR));
console.log(canEdit(UserRole.VIEWER));
