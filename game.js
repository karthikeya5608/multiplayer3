class Game{
    constructor(){
        
    }
    getState(){
        var gamestateref=database.ref('gamestate')
        gamestateref.on("value",function(data){
        gamestate=data.val();
    }
        )
}
update(state){
    database.ref('/').update({
        gamestate:state
    });
}
async start(){
    if(gamestate===0){
        player=new Player();
        var playercount=await database.ref('playerCount').once("value")
        if(playercount.exists()){
            playerCount=playercount.val();
        player.getCount();
        }
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(30);
    text("gamestart",120,100);
    Player.getplayerinfo();
    if (allplayers!==undefined) {
        var display_position=130
        for(var plr in allplayers){
            if(plr==="player"+player.index){
                fill("red");
            }
            else{
                fill("black");
            }
        
        display_position+=20
        textSize(15)
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position);
    }
}
if (keyDown(UP_ARROW)&&player.index !== null) {
    player.distance+=50,
    player.update();
}}}