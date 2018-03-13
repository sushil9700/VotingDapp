var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Gayathri', 'Sindhu', 'Trishul']);
};


