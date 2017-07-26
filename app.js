function play(choice){

    var player = 0;
    // Generates the computer selection
    var computer = Math.floor((Math.random() * 3)+ 1);
    var temp = '';
    var comChoice='';

    switch(choice){
        case 'scissors':
            player = 3
            break;
        ;
        case 'paper':
            player = 2
            break;
        ;
        case 'rock':
            player = 1
            break;
        ;
    }   
  
    if(computer == 1){
        comChoice = 'rock';
    }else if(computer == 2){
        comChoice = 'paper';
    }else{
        comChoice = 'scissors';
    }

    if(player == computer){
        alert('Tie Game. \nTry again');
        return;
    }

    if(player == 1 || computer == 1){
        if(player == 1){
            if(computer == 3){
                temp = `Player Wins! \nPlayer had ${choice}. \n Computer had ${comChoice}.\n ${choice} beats ${comChoice}.`;
                document.getElementById('magic').innerHTML = temp;
                return; 
            }else{
                temp = `Computer Wins! \nPlayer had ${choice}. \n Computer had ${comChoice}.\n ${comChoice} beats ${choice}.`;
                document.getElementById('magic').innerHTML = temp;
                return;
            }
        }

        if(computer == 1){
            if(player == 3){
                temp = `Computer Wins! \nPlayer had ${choice}. \n Computer had ${comChoice}.\n ${comChoice} beats ${choice}.`;
                document.getElementById('magic').innerHTML = temp;
                return; 
            }else{
                temp = `Player Wins! \nPlayer had ${choice}. \n Computer had ${comChoice}.\n ${choice} beats ${comChoice}.`;
                document.getElementById('magic').innerHTML = temp;
                return;
            }
        }
    }

    if(player == 2 || player == 3){
        if(player > computer){
            temp = `Player Wins! \nPlayer had ${choice}. \n Computer had ${comChoice}.\n ${choice} beats ${comChoice}.`;
            document.getElementById('magic').innerHTML = temp;
            return;
        }else if(computer > player){
            temp = `Computer Wins! \nPlayer had ${choice}. \n Computer had ${comChoice}.\n ${comChoice} beats ${choice}.`;
            document.getElementById('magic').innerHTML = temp;
            return;
        }
    }
}

