// On line 2, we are searching the document for an id="submit" button and preventing the button from going to a new page when the button is clicked.
document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
});


class TeamMember {
  // create 4 properties
  constructor(fname, lname, portfolio, skill) {
    this.fname = fname;
    this.lname = lname;
    this.portfolio = portfolio;
    this.skill = skill;
  }
  
}


const webDatabase = {
  name: "Profile Database", // just naming the database
  teamMemberArray: [], // the database method will fill this array
  teamMemberMethod : function(){ // method to run when submit button is clicked
    // store form values to variables
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    portfolio = document.getElementById("portfolio").value;
    skill = document.getElementById("skill").value;
    // pass variables to make new object
    let newTeamMember = new TeamMember(fname, lname, portfolio, skill);
    // push object to array above
    this.teamMemberArray.push(newTeamMember);
    // clear the display results on the index.html page
    document.getElementById('results').innerHTML = "" ;
    // loop through each array object 
    for(i=0; i<this.teamMemberArray.length; i++){ 
      // for each array object, create a ul and list the properties of that item
      document.getElementById('results').innerHTML += 
          '<ul>' +
          '<li>First name: ' + this.teamMemberArray[i].fname + '</li>' +
          '<li>Last name: ' + this.teamMemberArray[i].lname + '</li>' +
          '<li>Portfolio: ' + this.teamMemberArray[i].portfolio + '</li>' +
          '<li>Available for skill: ' + this.teamMemberArray[i].skill + '</li>' + 
          // added a delete button, giving it an id based on the fname, added method to run when delete button is clicked
          '<li><input type="submit" id="' + this.teamMemberArray[i].fname + '" value="Delete" onclick="webDatabase.teamMemberDeleteMethod(this.id)"></li>';          
    }
  },
  // added a method to the delete buttons, it passes the id of the delete button that was clicked using this.id
  teamMemberDeleteMethod : function(thisID){
    // loop through each array object
    for(x=0; x<this.teamMemberArray.length; x++){ 
      // if this object has the same name as the passed id
      if(this.teamMemberArray[x].fname == thisID){
        // remove this item from the array using the loop variable x
        this.teamMemberArray.splice(x, 1);
        // clear the display results on the index.html page        
        document.getElementById('results').innerHTML = "" ;
        // for each array object, create a ul and list the properties of that item
        for(i=0; i<this.teamMemberArray.length; i++){ 
          document.getElementById('results').innerHTML += 
            '<ul>' +
            '<li>First name: ' + this.teamMemberArray[i].fname + '</li>' +
            '<li>Last name: ' + this.teamMemberArray[i].lname + '</li>' +
            '<li>Portfolio: ' + this.teamMemberArray[i].portfolio + '</li>' +
            '<li>Available for skill: ' + this.teamMemberArray[i].skill + '</li>' + 
            // added a delete button, giving it an id based on the fname, added method to run when delete button is clicked
            '<li><input type="submit" id="' + this.teamMemberArray[i].fname + '" value="Submit" onclick="webDatabase.teamMemberDeleteMethod(this.id)"></li>';
        } // close the for loop i       
      } // close the if statement
    } // close the for loop x
  } // close the method
}; // close the database object

//console.log(webDatabase);



