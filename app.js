const fetch = require('node-fetch');
const isDoji = require('./patterns/doji');
const isMarubozu = require('./patterns/marubozu');
const isShootingStar = require('./patterns/shootingstar');
const isSpinningTop = require("./patterns/spinningtop")
const isPaperUmbrella = require("./patterns/paperumbrella")
const dotenv = require('dotenv').config();

const url = `https://www.quandl.com/api/v3/datasets/BSE/SENSEX.json?api_key=${process.env.api_key}`;

let date = '2017-07-28';

const api = async () => {
    const fetchedData = await fetch(url);
    const data = await fetchedData.json();
    
    for(let datas of data.dataset.data){
        if(datas[0] === date){
            const arrData = datas;
            const [date, open, high, low,  close] = arrData;
            const candleStick1 = isMarubozu(open,high,low,close);
            const candleStick2 = isDoji(open,high,low,close);
            const candleStick3 = isSpinningTop(open,high,low,close);
            const candleStick4 = isShootingStar(open,high,low,close);
            const candleStick5 = isPaperUmbrella(open,high,low,close);
            console.log(candleStick1);
            console.log(candleStick2);
            console.log(candleStick3);
            console.log(candleStick4);
            console.log(candleStick5);
        }   
    }
}
api();