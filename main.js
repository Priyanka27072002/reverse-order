var a=parseInt(prompt("Enter the number"))
temp=a
var b
var c=0
document.write("The given number is : "+temp+"<br>")
function reverse(){
    while(a>0){
        b=a%10
        a=parseInt(a/10)
        c=c*10+b
    }
    return c
    
}
let x=reverse()
document.write("The number in reverse order is : "+x)
