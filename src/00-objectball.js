function gameObject(){
    const myObject = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson' : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamBunks: 1,
                },
                'Reggie Evans' : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12, 
                    steals: 12,
                    blocks: 12,
                    slamBunks: 7,
                },
                'Brook Lopez' : {
                    number: 11,
                    shoe: 17,
                    points: 17, 
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamBunks: 15,
                },
                'Mason Plumlee' : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamBunks: 5,
                },
                'Jason Terry' : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamBunks: 1,
                },
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points:  10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamBunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamBunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamBunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamBunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamBunks: 12,
                },
            }
        },
    }
    return myObject;
}

// takes in an argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName){
    let myObject = gameObject();
    let playerPoints;
    for(let side in myObject){                
        for(let player in myObject[side].players){           
            if(player === playerName){
                playerPoints = myObject[side].players[player].points;                
            }
        }        
    };    return playerPoints;
}

// takes in an argument of a player's name and return the shoe size for that player
function shoeSize(playerName){
    let myObject = gameObject();
    for(let side in myObject){                
        for(let player in myObject[side].players){           
            if(player === playerName){
                let playerShoeSize = myObject[side].players[player].shoe;     
                return playerShoeSize;           
            }
        }        
    };    
}

// takes in an argument of the team name and returns an array of that team's colors
function teamColors(team_Name){
    let myObject = gameObject();
    for(let team in myObject){
        if(myObject[team].teamName === team_Name){
            return myObject[team].colors;
        }
    }
}

// operates on the game object to return an array of the team names
function teamNames(){
    let myObject = gameObject();
    let teams = [];
    for(let team in myObject){
        teams.push(myObject[team].teamName);
    }
  return teams;
}

// takes in an argument  of a team name and returns an array of the jersey numbers for that team
function playerNumbers(team_Name){
    let myObject = gameObject();
    let jerseyNumbers = [];
    for(let team in myObject){
        if(myObject[team].teamName === team_Name){
            for(player in myObject[team].players){
                jerseyNumbers.push(myObject[team].players[player].number)
            }
        }
    }return jerseyNumbers;
}

//takes in argument of a player's name and returns an object of that player's stats
function playerStats(playerName){
    let myObject = gameObject();
    let player_stats;
    for(let team in myObject){
        for(let player in myObject[team].players){
            if(player === playerName){
                player_stats = myObject[team].players[player]
            }
        }
    }
    return player_stats;
}

// return rebounds associated with the player that has the largest shoe size
function bigShoeRebounds(){
    let myObject = gameObject();
    let shoeSize = 0;
    let rebounds = 0;
    for(let team in myObject){
        for(let player in myObject[team].players){
            if(myObject[team].players[player].shoe > shoeSize){
                shoeSize = myObject[team].players[player].shoe;
                rebounds = myObject[team].players[player].rebounds;
                                
            }
        }
    }
    return rebounds;
}

// Bonus questions

// checks which player has the most points
function mostPointScored(){
    let myObject = gameObject();
    let mostPoints = 0;
    let highestPlayer;
    for(let team in myObject){
        for(let player in myObject[team].players){
            if(myObject[team].players[player].points > mostPoints){
                mostPoints = myObject[team].players[player].points
                highestPlayer = player;
            }
        }
    }
    return highestPlayer;
}

// checks the team with the most points/ winning team
function winningTeam(){
    let myObject = gameObject();
    let playerObjects = {};
    let totalPoints;
  
   for(let team in myObject){
        for(let player in myObject[team].players){
            let condition = Object.keys(playerObjects).find(e => e === myObject[team].teamName)
                 
            if(condition === undefined)
                {
                    totalPoints = myObject[team].players[player].points;                
            }else
                {
                    totalPoints += myObject[team].players[player].points;
            }
            playerObjects[myObject[team].teamName] = totalPoints;
        }
    }
    let points = 0;
    let winner ;
    for(let team in playerObjects){
        if(playerObjects[team] > points){
            points = playerObjects[team];
            winner = team;
        }
    }return winner;

}
console.log(winningTeam())

// checks for player with the longest name
function playerWithTheLongestName(){
    let myObject = gameObject();
    let longestNamePlayer;
    let longestName = 0;

    for(let team in myObject){
        for(let player in myObject[team].players){
            if(player.trim().length > longestName){
                longestName = player.trim().length;
                longestNamePlayer = player;
            }
        }
    } return longestNamePlayer;
}

// Super Bonus question

// returns true if the player with the longest name had the most steals
function doesLongNameStealATon(){
    let myObject = gameObject();
    let playerName;
    let mostSteals = 0;
    for(let team in myObject){
        for(let player in myObject[team].players){
            if(myObject[team].players[player].steals > mostSteals){
                mostSteals = myObject[team].players[player].steals;
                playerName = player;
            }
        }
    }
    return playerWithTheLongestName() === playerName ? true: false;
    
}
