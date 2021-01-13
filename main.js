!function(){
    function writeCode(prefix, code, fn){
      let container = document.querySelector('#code')
      let styleTag = document.querySelector('#styleTag')
      let n = 0
      let id
      id = setInterval(()=>{
        n+=1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n>=code.length){
          window.clearInterval(id)
          fn && fn.call()
        }
      }, 10)
    }
    let code = `
    /*先画一个蓝胖子的蓝脑袋*/
    .face_01 {
        margin: 50px auto;
        position: relative;
        width: 420px;
        height: 400px;
        background-color: #1E90FF;
        border: 2px solid #000;
        border-radius: 47% 47% 45% 45%;
    }
    /*先画一个蓝胖子的白脸蛋*/
    .face_02 {
        position: absolute;
        bottom: 0;
        left: 30px;
        width: 360px;
        height: 300px;
        background-color: #FFF;
        border: 2px solid #000;
        border-radius: 50% 50% 45% 45%;
    }
    /*先画一对眼睛*/
    .eye_box {
        position: absolute;
        top: -45px;
        right: 90px;
        width: 180px;
        height: auto;
    }
    /*先画一对大的椭圆做眼眶*/
    .big_eye_left,
    .big_eye_right {
        width: 90px;
        height: 110px;
        background-color: #FFF;
        border: 2px solid #000;
        border-radius: 46%;
    }
    /*眼睛当然要横过来啊*/
    .big_eye_left {
        float: left;
    }
    
    .big_eye_right {
        float: right;
    }
    /*再画里面的黑色眼珠*/
    .small_eye_left,
    .small_eye_right {
        position: absolute;
        top: 60px;
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
       
    }
    /*调整眼珠的位置*/
    .small_eye_left {
        left: 60px;
       
    } 
    .small_eye_right {
        right: 60px;
    }
    /*我们要来画红鼻子啦~*/
    .nose_01 {
        position: absolute;
        top: 47px;
        left: 151px;
        width: 50px;
        height: 50px;
        background-color: #FF0000;
        border: 2px solid #000;
        border-radius: 50%;
    }
    /*灵魂高光*/
    .nose_01_shadow {
        position: absolute;
        top: 10px;
        left: 25px;
        width: 15px;
        height: 15px;
        background-color: #FFF;
        border-radius: 50%;
        box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, .4);
    }
    /*鼻子的那条竖线*/
    .nose_02 {
        height: 130px;
        width: 2px;
        position: absolute;
        top: 95px;
        left: 176px;
        border-left: 2px solid #000;
    }
    /*画弯弯的嘴巴*/
    .mouth {
        position: absolute;
        top: 25px;
        left: 60px;
        height: 200px;
        width: 240px;
        border-bottom: 2px solid #000;
        border-radius: 0 0 45% 45%;
    }
    /*画胡须须*/
    .whisker_left,
    .whisker_right {
        position: absolute;
        top: 60px;
        width: 180px;
        height: 180px;
    }
    
    .whisker_left {
        left: 0;
    }
    
    .whisker_right {
        right: 0;
    }
    /*先画第一行的胡须*/
    .whisker_left div:nth-child(1),
    .whisker_right div:nth-child(1) {
        position: absolute;
        top: 30px;
        height: 60px;
        width: 100px;
        border-top: 2px solid #000;
    }
    /*左右各弯曲20度*/
    .whisker_left div:nth-child(1) {
        left: 30px;
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    
    .whisker_right div:nth-child(1) {
        right: 30px;
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    /*接着来第二行*/
    .whisker_left div:nth-child(2),
    .whisker_right div:nth-child(2) {
        position: absolute;
        top: 60px;
        height: 60px;
        width: 100px;
        border-top: 2px solid #000;
    }
    
    .whisker_left div:nth-child(2) {
        left: 35px;
    }
    
    .whisker_right div:nth-child(2) {
        right: 35px;
    }
    /*最后一行了*/
    .whisker_left div:nth-child(3),
    .whisker_right div:nth-child(3) {
        position: absolute;
        top: 90px;
        height: 60px;
        width: 100px;
        border-top: 2px solid #000;
    }
    
    .whisker_left div:nth-child(3) {
        left: 50px;
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    
    .whisker_right div:nth-child(3) {
        right: 50px;
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    /*画哆啦A梦的标志性领带*/
    .collar {
        position: absolute;
        top: 350px;
        left: 50px;
        width: 320px;
        height: 50px;
        background-color: #FF0000;
        border: 2px solid #000;
        border-radius: 30px;
    }
    /*画哆啦A梦的小铃铛*/
    .bell_01 {
        position: absolute;
        top: 15px;
        left: 130px;
        width: 60px;
        height: 60px;
        background-color: #FFFF00;
        border: 2px solid #000;
        border-radius: 50%;
    }
    /*加一点点铃铛的细节*/
    .bell_02 {
        position: absolute;
        top: 17px;
        left: 1px;
        width: 53px;
        height: 18px;
        border-top: 2px solid #000;
    }
    
    .bell_03 {
        position: absolute;
        top: 22px;
        left: 0;
        width: 57px;
        height: 23px;
        border-top: 2px solid #000;
    }
    /*铃铛是空心的！*/
    .bell_04 {
        position: absolute;
        top: 30px;
        left: 20px;
        width: 15px;
        height: 10px;
        background-color: #000;
        border-radius: 50%;
    }
    
    .bell_05 {
        position: absolute;
        top: 37px;
        left: 27px;
        width: 30px;
        height: 20px;
        border-left: 2px solid #000;
    }
    /*好啦，我画完啦~*/
    `
    writeCode('',code)
}.call()