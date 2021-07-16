const isDoji = function (open,high,low,close){
   
    const upperLeg = close>open ? Math.round(high - close) : Math.round(high - open);
    const lowerLeg = close>open ? Math.round(open - low) : Math.round(close - low);
    const body = close>open ? Math.round(close - open) : Math.round(open - close);
    const min = Math.min(lowerLeg,upperLeg)
    const max = Math.max(lowerLeg,upperLeg);

    if(close>open){
        console.log(`${upperLeg}, ${lowerLeg}, ${body}`)
        if( (min <= max) && (min>= (0.57* max)) && (body <= (0.1 * min))){
                    console.log("Bullish Doji")
        }}
    else{
        console.log(`${upperLeg}, ${lowerLeg}, ${body}`)
        
        
        if( (min <= max) && (min>= (0.57* max)) && (body <= (0.1 * min))){

            return "Bearish Doji"
        }             
    }
}


module.exports = isDoji;