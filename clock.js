
function clock(){
    // alert('ok');
    let num = 0;
    let min =0;
    setInterval(()=>{
        
        num = num +6;
        document.getElementById("tick").style.transform = "rotate(" + num + "deg)";
        
        if(num === 360){
            min = min +6;
            document.getElementById("min").style.transform = "rotate(" + min + "deg)";
            num=0;
        }
        // console.log("num",num)
    }, 1000)
    
}
