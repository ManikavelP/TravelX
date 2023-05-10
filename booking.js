
function submitForm(event) {
  
    event.preventDefault();
  
   
    const form = event.target;
  
    
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#Phone');
    const address = form.querySelector('#address');
    const location = form.querySelector('#whereto');
    const guests = form.querySelector('#Howmany');
    const arrivals = form.querySelector('#arrivals');
    const leaving = form.querySelector('#leaving');
  
    window.history.back();
  
    
    return false;
  }
  