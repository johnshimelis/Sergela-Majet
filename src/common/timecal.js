const TimeCal=(created_at)=>{
        var datecal=new Date(created_at).getTime();
        var today=new Date().getTime();
        if(Math.abs(Math.round((today-datecal)/(1000*3600*24)))<1){
              if(Math.abs(Math.round((today-datecal)/(1000*3600)))<1){
                if(Math.abs(Math.round((today-datecal)/(1000*60)))<1){
                  if(Math.abs(Math.round((today-datecal)/(1000)))>1){
                    return('Registered '+Math.abs(Math.round((today-datecal)/(1000)))+'seconds ago')
                }
                      else{
                        return('created just now')
                      }
              }
              else{
                if(Math.abs(Math.round((today-datecal)/(1000*60)))===1){
                  return('Register 1 minute ago')
                }
                return('Registered '+Math.abs(Math.round((today-datecal)/(1000*60)))+' minutes ago')
  
              }
        }
        else{
          if(Math.abs(Math.round((today-datecal)/(1000*3600)))===1){
            return ('Register 1 hour ago')
          }
          return('Registered '+Math.abs(Math.round((today-datecal)/(1000*3600)))+' hours ago')
        }
      }
      else{
        if(Math.abs(Math.round((today-datecal)/(1000*3600*24)))===1){
          return("Registered 1 day ago")
        } 
        else{
          if(Math.abs(Math.round((today-datecal)/(1000*3600*24*30*12)))>=1){
            return ('Registered '+Math.abs(Math.round((today-datecal)/(1000*3600*24*30*12)))+' years ago');
          }
          if(Math.abs(Math.round((today-datecal)/(1000*3600*24*30)))>=1){
            return ('Registered '+Math.abs(Math.round((today-datecal)/(1000*3600*24*30)))+' months ago');
          }
          return('Registered '+Math.abs(Math.round((today-datecal)/(1000*3600*24)))+' days ago');
      }
  
      }
    }

export default TimeCal;