
/*
// Listen for click on the document
document.addEventListener('click', function (event) {
  
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;
  
  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  // Prevent default link behavior
  event.preventDefault();
  
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion-content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  // Toggle our content
  content.classList.toggle('active');
})
*/
const elements = document.querySelectorAll('.element');

elements.forEach(element =>{
    let btn = element.querySelector('.question button');
    let icon = element.querySelector('.question button i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');
    btn.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            let ansIcon = ans.parentElement.querySelector('button i');
            if(answer !== ans){
                ans.classList.add('hideText');
                ansIcon.className = 'fas fa-plus-circle';
            }
        });
        answer.classList.toggle('hideText');
        icon.className === 'fas fa-plus-circle' ? icon.className = 'fas fa-minus-circle' 
        : icon.className ='fas fa-plus-circle';
    });
});