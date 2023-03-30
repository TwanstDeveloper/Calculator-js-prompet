var c=prompt("Enter Number One")

var v=prompt("Enter opration")

var x=prompt("Enter Number Two")

if(v=="+"){
document.write(+(c)+ +(x));

}else if(v=="-"){

document.write(+(c)-+(x))
}else if(v=="*"){

    document.write(+(x)*+(c));
}
else if(v=="/"){

    document.write(+(c)/+(x));
}else if(v=="**"){
    document.write((+(x))**+(c));
}else {
    alert("Please Enter Number !");
}

