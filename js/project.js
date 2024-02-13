
displayProjectElement();

function displayProjectElement(){
  let ProjectElement=document.querySelector('.main_container');

  if(!ProjectElement)
  {
    return;
  }

  let innerHTML='';

  project.forEach(item=> {
    innerHTML+=`
    
    <div class="project_container">
    <div class="title_container">${item.title}</div>
    <div class="Projects_info">${item.project_info}</div> 
    <div class="skills_used">${item.skills}</div>
  </div>
    `
    
  })
  ProjectElement.innerHTML=innerHTML;
}


// function displayTag()
// {
//   let tagElement=document.querySelector('.');

  
// }