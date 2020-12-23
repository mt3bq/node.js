var person={
    first_name:"Muteb",
    list_name:"Alsharari",
    age:23
  
};

function display(){
    
    console.log(person.first_name+" "+person.list_name);
    setTimeout(display_age,3000);
   
};

function display_age(){
    console.log("The age is:"+person.age);
}


display();