//use materializecss 
//fucntion to generate the Manager card
const managerHTML = function (manager) {
    return `
    <div class="card">
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-content blue white-text"">
          <span class="card-title">${manager.name}</span>
          <span class="material-icons">supervisor_account</span>
          <span>Manager</span>
        </div>
        <div class="card-action indigo lighten-5">
          <div class="card-content">
            <span>ID: ${manager.id}</span>
            <span>Email:<a href="mailto:${manager.email}">${manager.email}</a></span>
            <span>Office Number: ${manager.officeNumber}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;
}


//Fucntion to generate the Engineer card
const engineerHTML = function (engineer) {
    return `
    <div class="card">
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-content blue white-text"">
          <span class="card-title">${engineer.name}</span>
          <span class="material-icons">engineering</span>
          <span>Engineer</span>
        </div>
        <div class="card-action indigo lighten-5">
          <div class="card-content">
            <span>ID: ${engineer.id}</span>
            <span>Email:<a href="mailto:${engineer.email}">${engineer.email}</a></span>
            <span>Github:<a href="https://github.com/${engineer.github}"> ${engineer.github}</a></span>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;
}


//Fucntion to generate the Intern card
const internHTML = function (intern) {
    return `
    <div class="card">
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-content blue white-text"">
          <span class="card-title">${intern.name}</span>
          <span class="material-icons">school</span>
          <span>Intern</span>
        </div>
        <div class="card-action indigo lighten-5">
          <div class="card-content">
            <span>ID: ${intern.id}</span>
            <span>Email:<a href="mailto:${intern.email}">${intern.email}</a></span>
            <span>School: ${intern.school}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;
}


module.exports = (data) => {

    cardArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        //If role is manager generate Managers card 
        if (role === 'Manager') {
            const managerCard = managerHTML(employee);
            cardArray.push(managerCard);
        }

        //If role is Engineer generate Engineers card 
        if (role === 'Engineer') {
            const engineerCard = engineerHTML(employee);
        
            cardArray.push(engineerCard);
        }

        //If role is Intern generate Intern card 
        if (role === 'Intern') {
            const internCard = internHTML(employee);
        
            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('')

    return pageHTML(employeeCards);
}

//function to generate page. 
const pageHTML = function (employeeCards) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
      header {
        text-align: center;
        background-color: red;
        color: whitesmoke;
        height: 90px;
      }
      span{
        font-size: 20px;
      }
      a{
        font-size: 20px;
      }
    </style>
</head>
</head>


<body>
    <body>
        <header class="red white-text center-align">
            <h1>Team Profile</h1>           
        </header>



    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                    <!--Team Information sections-->
                    ${employeeCards}     
            </div>
        </div>
    </main>

</body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" integrity="sha512-NiWqa2rceHnN3Z5j6mSAvbwwg3tiwVNxiAQaaSMSXnRRDh5C2mk/+sKQRw8qjV1vN4nf8iK2a0b048PnHbyx+Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</html>  


`;
}

