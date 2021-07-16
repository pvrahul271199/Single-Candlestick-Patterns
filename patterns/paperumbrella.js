const isPaperUmbrella = function (open,high,low,close){
   
    const upperLeg = close>open ? Math.round(high - close) : Math.round(high - open);
    const lowerLeg = close>open ? Math.round(open - low) : Math.round(close - low);
    const body = close>open ? Math.round(close - open) : Math.round(open - close);
    
    if(close>open){
        
        if((upperLeg <= (0.03 * body)) && (lowerLeg <= (6 *body)) ){        
            return "Hammer(Bullish Paper Umbrella) - Strong Reversal if found in a Downtrend"
        } else {
            return false
        }
    }else{
        
        if((upperLeg <= (0.03 * body)) && (lowerLeg <= (6 *body)) ){         
            return "Hanging Man(Bearish Paper Umbrella) - Strong Reversal if found in an Uptrend"
        } else {
            return false
        }            
    }
}


module.exports = isPaperUmbrella;