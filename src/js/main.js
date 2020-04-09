import '../css/main.css';
class buJu{
    bgImage(){
        var tr,
            imgUrl,
            imgUrl2,
            imgUrl3,
            f,
            s;
        s = 0;
        imgUrl = "url('../src/images/gift";
        imgUrl2 = ".jpg')";
        imgUrl3 = "url('../src/images/lottery";
        tr = document.querySelectorAll('.ChouJiang tr');
        for(var i = 0;i<tr.length;i++){
            for(var y = 0;y<tr[i].children.length;y++){
                let k;                    
                k = tr[i].children[y];
                if(i === 1 && y === 1){ 
                    console.log(k.style);   
                    k.style.backgroundImage = imgUrl3 + 1 + imgUrl2;

                }
                else{
                    k.style.backgroundImage = imgUrl + s + imgUrl2;
                    s++;
                }
            }
        }
    }
}
var ss;
ss = new buJu();
ss.bgImage();
buJu = null;
ss = null;

