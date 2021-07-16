const isShootingStar = function (open,high,low,close){
   
    const upperLeg = close>open ? Math.round(high - close) : Math.round(high - open);
    const lowerLeg = close>open ? Math.round(open - low) : Math.round(close - low);
    const body = close>open ? Math.round(close - open) : Math.round(open - close);

    if(close>open){
        if((lowerLeg <= (0.03 * body)) && (upperLeg <= (6 *body)) ){        
            return "Bullish Shooting Star"
        } else {
            return false
        }
    }
    else{
        if((lowerLeg <= (0.03 * body)) && (upperLeg <= (6 *body)) ){         
            return "Bearish Shooting Star"
        } else {
            return false
        }            
    }
}


module.exports = isShootingStar;