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


