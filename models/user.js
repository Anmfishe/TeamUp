/**
 * @param user
 * @param user.teams
 */

var user;
user = function (name, password) {
    this.name = name;
    this.password = password;
    this.teams = [];
    this.friends = [];
};