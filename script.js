let div=document.querySelectorAll(".di");
div.forEach(di =>{
  di.addEventListener('click',( )=>{
    removeActiveClasses()
    di.classList.add('active')
  })
})
function removeActiveClasses(){
  div.forEach(di =>{
    di.classList.remove('active')
  })
}