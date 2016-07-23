


function User (name, password, numTeams) {
    this.name = name;
    this.numTeams = numTeams;
    this.password = password;
    this.teams = [];
    this.friends = [];
}
User.prototype.addTeam = function(team){
    this.teams.push(team);
    this.numTeams += 1;
};
User.prototype.hasTeams = function(){
   return this.numTeams;
};