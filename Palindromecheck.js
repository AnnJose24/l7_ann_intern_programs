function Palindromecheck(str)
{
    let rev="";
    for (let i=str.length-1; i>=0; i--)
    {
        rev+=str[i];
    }
        if(rev==str)
        {
            console.log("is palindrome");
        }
        else{
            console.log("is not palindrome");
        }
    
}

let str="madam";



console.log(Palindromecheck(str));
