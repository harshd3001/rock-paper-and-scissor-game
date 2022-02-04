const chosen =document.querySelector('.choice');
const res = document.querySelector('.result');
const score = document.querySelector('.score');
const options = chosen.querySelectorAll('div');
const his =document.querySelector('.his');
let you =0;
let comp =0;
let a=undefined;
let b=undefined;

chosen.addEventListener('click',(e)=>{
    let x=e.target.className;
    const y = options[Math.floor(Math.random() * options.length)].className;
    if(x==y){
        res.innerHTML=`<h1>it's a Tie</h1>`;
        if(x=='rock'){
            a='&#x270A;';
            b='&#x270A;';
        }
        else if(x=='paper'){
            a='&#x1F590;';
            b='&#x1F590;';
        }
        else{
            a='&#x270C;';
            b='&#x270C;';
        }
    }else{
        if(x=='rock'){
            a='&#x270A;';
            if(y=='paper'){
               res.innerHTML=`<h1>Computer Wins</h1>`;
               b='&#x1F590;';
               comp = comp+1;
            }else{
                res.innerHTML=`<h1>You Win</h1>`;
                b='&#x270C;';
                you = you+1;
            }
        }
        if(x=='paper'){
            a='&#x1F590;';
            if(y=='scissor'){
               res.innerHTML=`<h1>Computer Wins</h1>`;
               b='&#x270C;';
               comp = comp+1;
            }else{
                res.innerHTML=`<h1>You Win</h1>`;
                b='&#x270A;';
                you = you+1;
            }
        }
        if(x=='scissor'){
            a='&#x270C;';
            if(y=='rock'){
               res.innerHTML=`<h1>Computer Wins</h1>`;
               b='&#x270A;';
               comp = comp+1;
            }else{
                res.innerHTML=`<h1>You Win</h1>`;
                b='&#x1F590;';
                you = you+1;
            }
        }
    }
    score.innerHTML=`<h2>you:${you} &emsp;&emsp;&emsp; computer:${comp}</h2>`;
    his.innerHTML+=`${a} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${b}<br>`;
})