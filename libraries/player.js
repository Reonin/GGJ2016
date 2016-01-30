var titleScreen = new Image();
titleScreen.src = 'images/TitleScreen.png';


//The Player Class
function PlayerCreator(name,color){
      // color: "#00A",
      this.life = 0;
      this.SteppingonCrackPoint = 0;
      this.OpeningUmbrellaPoint = 0;
      this.KnockingWoodPoint = 0;
      this.totalPoints = 0;
      this.name = name;
      this.color = color;

      this.score =function(change) {


          this.totalPoints = this.totalPoints + change; //Adds or subtracts health based on the value added in the function

          return this.pointScore;
      };


};
