enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}

function canDelete(role: UserRole): boolean {
  if (role === "ADMIN") {
    return true;
  }
  return false;
}
function canEdit(role: UserRole): boolean {
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
