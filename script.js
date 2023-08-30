const message1 = "The Bill Amount should be greater than 0";
const message2 = "The Cash Given should be greater than Bill Amount";

function displaynext(){
  console.log("here");
  const content2 = document.createElement("content2");
  content2.innerHTML = '<label for="cashGiven">Cash Given: </label><br>'
  +'<input type="number" id="cashGiven" name="cashGiven"><br>'
  +'<button type="submit" onclick = returnChange() id="check">Check</button> ';
  const ele = document.getElementById("segment").appendChild(content2);
  console.log(ele);

}



function returnChange(){
//  console.log(billAmt,cashGiv);
const billAmt=document.getElementById('billAmount').value;
const cashGiv = document.getElementById('cashGiven').value;
let returnchange = cashGiv - billAmt;
console.log("in returnchange");
 console.log(returnchange);
 var count = Array(7).fill(0);
       if(returnchange>0){
          function returnCount(){
            alert("in return count");
              const arr = [2000,500,100,20,10,5,1];
              for(let i = 0;i<7;i++){
                
                if(returnchange>=arr[i]){
                    count[i] = Math.floor(returnchange/arr[i]);
                
                }
                else{
                
                  count[i] = 0;
                }
                returnchange = returnchange%arr[i];
              }
              return count;
          }
          returnCount();
          
  const content3 = document.createElement("content3");
  content3.innerHTML = '<label>Return Change: </label><br>'+
                        '<table><tr><td>No. of Notes</td><td>'+
                        count[0]+
                        '</td><td>'+
                        count[1]+
                        '</td><td>'+
                        count[2]+
                        '</td><td>'+
                        count[3]+
                        '</td><td>'+
                        count[4]+
                        '</td><td>'+
                        count[5]+
                        '</td><td>'+
                       count[6]+
                        '</td>'+
                       '<tr><td>Note</td><td>2000</td><td>500</td><td>100</td><td>20</td><td>10</td><td>5</td><td>1</td> </tr></table>';
  

 const ele1 = document.getElementById("segment").appendChild(content3);
 console.log(ele1);   
        }
else{
  if(billAmt=='' || cashGiv ==''){
     document.getElementById('error-msg').innerHTML = "Please enter Both Fields";
  }
  
 
}
           
                      
}