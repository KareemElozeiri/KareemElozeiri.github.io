document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('h1, h2, h3, a, strong, p');

  elements.forEach(el => {
    el.style.visibility = 'hidden';
  });

  const typeText = (element, text) => {
    return new Promise(resolve => {
      element.style.visibility = 'visible';
      element.textContent = '';

      // Add cursor to the element
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      cursor.textContent = '|';
      element.appendChild(cursor);

      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          element.insertBefore(document.createTextNode(text[i]), cursor);
          i++;
        } else {
          element.removeChild(cursor);
          clearInterval(typingEffect);
          resolve();
        }
      }, 30); 
    });
  };

  const typeAllElements = async () => {
    for (const element of elements) {
      const text = element.textContent; 
      await typeText(element, text); 
    }
  };

  typeAllElements();
});