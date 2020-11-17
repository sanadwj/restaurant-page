const contact = () => {
  const contact = document.createElement('div');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  contactDiv.innerHTML = 'Contact';
  contact.appendChild(contactDiv);
  return contact;
};

export { contact };