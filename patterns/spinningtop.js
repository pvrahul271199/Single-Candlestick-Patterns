const isSpinningTop = function (open,high,low,close){
   
    const upperLeg = close>open ? Math.round(high - close) : Math.round(high - open);
    const lowerLeg = close>open ? Math.round(open - low) : Math.round(close - low);
    const body = close>open ? Math.round(close - open) : Math.round(open - close);
    const min = Math.min(lowerLeg,upperLeg)
    const max = Math.max(lowerLeg,upperLeg);

    if(close>open){
        if( (min <= max) && (min>= (0.57* max)) && (body <= (0.39 * min))){
            return "Bullish SpinningTop"
        } else {
            return false
        }
    }
    else{

        if( (min <= max) && (min>= (0.57* max)) && (body <= (0.39 * min))){
            return "Bearish SpinningTop"
        } else {
            return false
        }            
    }
}


module.exports = isSpinningTop;