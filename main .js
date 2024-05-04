var name_of_the_guest_array=[]
function submit(){
var guest_name = document.getElementById("enter_name").value;
name_of_the_guest_array.push(guest_name);
document.getElementById("Display_name").innerHTML = name_of_the_guest_array;
console.log(name_of_the_guest_array);
var length_of_the_array = name_of_the_guest_array.length;
console.log(length_of_the_array);
}
function show_list(){
var i =name_of_the_guest_array .join("<br>");
console.log(name_of_the_guest_array);
document.getElementById("show_names").innerHTML = i.toString();
}
function sorting(){
    name_of_the_guest_array.sort();
    var i = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("sorted_names").innerHTML = i.toString();
}
function search(){
var s = document.getElementById ("search_name").value;
var found = 0;
var j;
for(j=0; j< name_of_the_guest_array.length; j+++0){
if(s==name_of_the_guest_array[j])
    found - found1;
}
document.getElementById("search_names").innerHTML = "name found"+found+"time/s";
console.log("found names"+found+"times/s");
}
