/*
#  @Navigation Bar
#  Vanilla JS
*/
let btnNav = document.getElementById('myNav');
let x = document.getElementById('close');
btnNav.onclick = () =>
{
   if( btnNav.className === 'navbar' )
   {
      btnNav.className += ' responsive';
      x.innerHTML = "&times;";
   }
   else
   {
      btnNav.className = 'navbar';
      x.innerHTML = "&#9776;";
   }
}
/*
#  @end Navigation Bar
*/