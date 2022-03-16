console.log("Welcome to the countdown time");
document.getElementById("submit").onclick = function execute(){
   
    document.getElementById("submit").disabled = true;
    const target = document.getElementById("datetime").value;      
    let interValTime = setInterval(function update_time(){
        let current = new Date();
        let diff = new Date(target).getTime() - current.getTime();
       
        document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
        document.getElementById("hours").innerText = Math.floor( (diff % (1000*60*60*24)) / (1000*60*60));
        document.getElementById("minites").innerText = Math.floor((diff % (1000 *60*60)) / (1000*60));
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 *60)) / 1000 );
        if(diff <=0){
            clearInterval(interValTime);
             
            // document.getElementById("submit").disabled = false;
            document.getElementById("days").innerText = "NA";
            document.getElementById("hours").innerText = "NA";
            
            document.getElementById("minites").innerText = "NA";
            document.getElementById("seconds").innerText ="NA";
            document.getElementById("submit").disabled = false;
        }
       
    },1000);
} 
document.getElementById("reset").onclick = function reset(){
    document.getElementById("submit").reset();
}