export type Leader = {
    name: string,
    score: number
};

export class Leaderboard {
    private _board: Array<Leader>;
    private static readonly BOARD_SIZE = 5;

    private static _singleton: Leaderboard;
    
    /*
        private constructor prevents manual instantiation
    */
    private constructor() {}

    /*
        returns the singleton instance of the leaderboard, after instantiating
        it (if and only if it has not already been instantiated)
    */
    static get_instance(): Leaderboard {
        if( !this._singleton ) {
            this._singleton = new Leaderboard();
            this._singleton._board = new Array<Leader>(Leaderboard.BOARD_SIZE);
            for( let index=0; index<this._singleton._board.length; index++ ){
                this._singleton._board[index] = { name: "Empty", score: 0};
            }
        }
        return this._singleton;
    }

    /*
        adds a new leader to the leaderboard, in descending order, as long as
        the score provided is higher than at least one of the current scores
        in the leaderboard. If it is added, the lowest score should be removed
        to keep the leaderboard at the Leaderboard.BOARD_SIZE length. If there
        are ties (same score), an existing score in the Leaderboard takes
        precedence over the new score.
    */
    add_leader(newName: string, newScore: number) {
        for( let index in Leaderboard._singleton._board ) {
            if( newScore > Leaderboard._singleton._board[index].score ) {
                //insert the leader in this place
                let newLeader = {name: newName, score: newScore};
                newLeader.name = newName;
                newLeader.score = newScore;
                Leaderboard._singleton._board.splice(parseInt(index),0,newLeader);
                Leaderboard._singleton._board.pop();
                break;
            }
        }
    }
    
    as_string(): string{
        let output: string = "";
        for( let index in Leaderboard._singleton._board ) {
            output += (parseInt(index)+1) + ". " +
                      Leaderboard._singleton._board[index].name + " " +
                      Leaderboard._singleton._board[index].score + "\n";
        }
        return output;
    }
} // end of Leaderboard class