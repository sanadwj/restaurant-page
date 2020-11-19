const contact = () => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contactDiv');
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('id', 'contact');
  contactDiv.innerHTML = '<h2>CONTACT US</h2>\n <h3>Address: Jabal Amman – 3rd Circle  Amman – Jordan</h3>\n<h3>For delivery & reservations: +962 -6 - 4644227/8</h3>';
  contact.appendChild(contactDiv);
  return contact;
};

export default contact;