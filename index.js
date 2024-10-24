const form = document.querySelector(`form`);

form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  // grab the input
  const input = document.querySelector(`input`);
  // get the value from the input
  const eventName = input.value;
  try {
    // call the event API with the value 
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/events${eventName}`);
    const eventData = await response.json();

    
    // create a new array with just the names of the details
    const eventDetails = eventData.Details.map((eventDetails) => {
      return eventDetails.Details.name;
    }); 


     // create a new list item
     const eventLI = document.createElement(`li`);
     // put the event information in the list item
     eventLI.innerHTML = `
       <h3>${eventData.name}</h3>
       <p>${eventData.name} description</p>
       <p>${eventData.name} has the following date: ${eventdate.join(`,`)}</p>
     `;
     // grab the ol
     const ol = document.querySelector(`ol`);
     // attach the list item to the ol
     ol.append(eventLI);
   } catch(err) {
     alert(`there was an error fetching your event`);
   } finally {
     console.log(`,`);
   }
 });