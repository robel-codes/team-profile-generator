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


