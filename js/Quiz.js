class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
     question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    console.log("Hi");
    console.log(gameState);
    console.log(allContestants);
    console.log(contestantCount);
    question.hide();

    //write code to change the background color here
      background("yellow"); 
    //write code to show a heading for showing the result of Quiz
    this.result = createElement('h1');
    this.result.html("Result Of The Quiz");
    this.result.position(350, 0);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("green");
      textSize(20);
      text("Note:Contestant who answered correct is highlighted in green");
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctans="2";
      if(correctans===allContestants[plr].answer){
        fill("Green");
      }
        else
        fill("red")
      
      
    }
    
  }

}
