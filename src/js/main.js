import '../css/main.css';
class buJu{
    bgImage(){
        var imgUrl,
            imgUrl2,
            imgUrl3,
            s,
            ss;
        ss = 6;
        s = 0;
        imgUrl = "url('../src/images/gift";
        imgUrl2 = ".jpg')";
        imgUrl3 = "url('../src/images/lottery";
        for(var i = 0;i<tr.length;i++){
            for(var y = 0;y<tr[i].children.length;y++){
                let k;                    
                k = tr[i].children[y];
                if(i === 1 && y === 1){ 
                    console.log(k.style);   
                    k.style.backgroundImage = imgUrl3 + 1 + imgUrl2;

                }
                else{
                    if(i === 0){
                        k.style.backgroundImage = imgUrl + s + imgUrl2;
                        s++;
                    }
                    if(i === 1 && y === 0){
                        k.style.backgroundImage = imgUrl + 7 + imgUrl2;
                    }
                    if(i === 1 && y === 2){
                        k.style.backgroundImage = imgUrl + 3 + imgUrl2;
                    }
                    if(i === 2){
                        k.style.backgroundImage = imgUrl + ss + imgUrl2;
                        ss--;
                    }
                    imgArray.push(regexp.exec(getComputedStyle(k,null).backgroundImage)[0]);
                }
            }
        }
    }
}
class gongNeng{
    addClass(e,v){
        e.classList.add(v);
    }
    removeClass(e,v){
        e.classList.remove(v);
    }
    turn(l,c,e){
        var nextElement,
            endElement,
            loos;
        loos = false;
        number === 8 ? number = 0 : number;
        nextElement = 'gift' + number + '.jpg';
        endElement = 'gift' + e + '.jpg';
            for(let i = 0;i<tr.length;i++){
                for(let y = 0;y<tr[i].children.length;y++){
                    if(i === 1 && y === 1){
                    }
                    else{
                        let k,
                            kk,
                            kkk;
                        k = tr[i].children[y];
                        kk = getComputedStyle(k,null).backgroundImage;
                        kkk = regexp.exec(kk)[0];
                        if(nextElement === kkk){
                            ds.removeClass(kArray[0].children[0],'selection');
                            ds.addClass(k.children[0],'selection');
                            kArray[0] = k;
                            number++;
                            loos = true;
                        }
                        if(l === c && endElement === nextElement){
                            clearInterval(timer);
                            startChouJiang.onclick = main;
                            startChouJiang.style.backgroundImage = 'url("../src/images/lottery1.jpg")';
                        }
                    }
                    if(loos){
                        break
                    }
                }
            }
    }
}
var ss,
    startChouJiang,
    ds,
    regexp,
    imgArray,
    kArray,
    tr,
    timer,
    number;
startChouJiang = document.querySelector('.ChouJiang tr:nth-child(2) td:nth-child(2)');
ss = new buJu();
ds = new gongNeng();
tr = document.querySelectorAll('.ChouJiang tr');
regexp = /gift[\d]+\.jpg/;
imgArray = [];
ss.bgImage();
buJu = null;
ss = null;
startChouJiang.onclick = function(){
    startChouJiang.onclick = null;
    main();
};
function main(){
    startChouJiang.style.backgroundImage = 'url("../src/images/lottery2.jpg")';
    var startRnd,
        endRnd,
        reg,
        circle,
        lo,
        los;
    lo = 0;
    los = 0;
    reg = /\d+/;
    kArray = [];
    startRnd =  Math.floor(Math.random() * 7);
    endRnd = Math.floor(Math.random() * 99);
    0 <= endRnd && endRnd <= 1?endRnd = 0:'';
    1 < endRnd && endRnd <= 4?endRnd = 1:'';
    4 < endRnd && endRnd <= 10?endRnd = 2:'';
    10 < endRnd && endRnd <= 21?endRnd = 6:'';
    21 < endRnd && endRnd <= 33?endRnd = 4:'';
    33 < endRnd && endRnd <= 47?endRnd = 3:'';
    47 < endRnd && endRnd <= 61?endRnd = 5:'';
    61 < endRnd && endRnd <= 99?endRnd = 7:'';
    circle = Math.floor(Math.random() * 4 + 2);
    console.log(startRnd,endRnd,circle);
    for(let i = 0;i<tr.length;i++){
        for(let y = 0;y<tr[i].children.length;y++){
            let kk,
                k,
                kkk;                    
            k = tr[i].children[y];
            kk = getComputedStyle(k,null).backgroundImage;
            kkk = regexp.exec(kk);
            if(kkk === null){
                continue;
            }
            else{
                kkk = kkk[0];
                if(k.children[0].className === 'selection'){
                    let o;
                    o = tr[i].children[y].children[0];
                    ds.removeClass(o,'selection');
                }
            }
            if(imgArray[startRnd] === kkk){
                kArray.push(k,kkk);
                ds.addClass(k.children[0],'selection');
            }
        }
    }
    number = reg.exec(kArray[1])[0];
    number++;
    timer = setInterval(() => {
        ds.turn(los,circle,endRnd);
        lo === 7?(los++,lo = 0):lo++;
        setTimeout(() => {
            clearInterval(timer);
            timer = setInterval(() => {
                ds.turn(los,circle,endRnd);
                lo === 7?(los++,lo = 0):lo++;
                if(los === circle - 1 && lo === 4){
                    clearInterval(timer);
                    timer = setInterval(() => {
                        ds.turn(los,circle,endRnd);
                        lo === 7?(los++,lo = 0):lo++;
                    }, 200);
                }
            }, 100);
        }, 900);
    }, 300);
}

