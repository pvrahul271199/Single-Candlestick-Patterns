const isMarubozu = function (open,high,low,close){
   
    const upperLeg = close>open ? Math.round(high - close) : Math.round(high - open);
    const lowerLeg = close>open ? Math.round(open - low) : Math.round(close - low);
    const body = close>open ? Math.round(close - open) : Math.round(open - close);
   
    if(close>open){
        if((upperLeg <= (0.09 * body)) && (lowerLeg <= (0.09 * body))){
            return "Bullish Marubozu"
        } else{
            return false
        }
    }else{
        if((upperLeg <= (0.09 * body)) && (lowerLeg <= (0.09 * body))){
            return "Bearish Marubozu"
        } else{
            return false
        }             
    }
}


module.exports = isMarubozu;