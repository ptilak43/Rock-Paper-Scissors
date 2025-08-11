function go(id)
{
    let rval=Math.round(Math.random()*(3-1+1))

    if(id=="r" && rval==2)
    {
        document.writeln("<center><font color='red' size='32'> You Lose </font> <br><p align='left'> Bot did Paper <image src='paper.jpg'></p><p align='right'> You did Rock <image src='rock.jpg'></p></center>");
    }
    else if(id=="p" && rval==3)
    {
        document.writeln("<center><font color='red' size='32'> You Lose </font> <br><p align='left'> Bot did Scissors <image src='Scissors.jpg'></p><p align='right'> You did Paper <image src='paper.jpg'></p></center> ");
    }
    else if(id=="s" && rval==1)
    {
        document.writeln("<center><font color='red' size='32'> You Lose </font> <br><p align='left'> Bot did Rock <image src='rock.jpg'></p><p align='right'> You did Scissors <image src='scissors.jpg'></p></center> ");
    }
    if(id=="p" && rval==1)
    {
        document.writeln("<center><font color='green' size='32'> You Win </font> <br><p align='left'> Bot did Rock <image src='rock.jpg'></p><p align='right'> You did Paper <image src='paper.jpg'></p></center> ");
    }
    else if(id=="r" && rval==3)
    {
        document.writeln("<center><font color='green' size='32'> You Win </font> <br><p align='left'> Bot did Scissors <image src='scissors.jpg'></p><p align='right'> You did Rock <image src='rock.jpg'></p></center> ");
    }
    else if(id=="s" && rval==2)
    {
        document.writeln("<center><font color='green' size='32'> You Win </font> <br><p align='left'> Bot did Paper <image src='paper.jpg'></p><p align='right'> You did Scissors <image src='scissors.jpg'></p></center> ");
    }
    else if(id=="r" && rval==1)
    {
        document.writeln("<center><font color='light blue' size='32'> Draw </font> <br><p align='left'> Bot did Rock <image src='rock.jpg'></p><p align='right'> You did Rock <image src='rock.jpg'></p></center> ");
    }
    else if(id=="p" && rval==2)
    {
        document.writeln("<center><font color='light blue' size='32'> Draw </font> <br><p align='left'> Bot did Paper <image src='paper.jpg'></p><p align='right'> You did Paper <image src='paper.jpg'></p></center> ");
    }
    else if(id=="s" && rval==3)
    {
        document.writeln("<center><font color='light blue' size='32'> Draw </font> <br><p align='left'> Bot did Scissors <image src='scissors.jpg'></p><p align='right'> You did Scissors <image src='scissors.jpg'></p></center> ");
    }
}