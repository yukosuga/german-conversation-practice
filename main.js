'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['Hobbies', 'Was hast du gestern gemacht?', 'Lieblingsessen', 'Träume', 'Lieblingsstadt', 'Orte, die du unbedingt besuchen möchtest', 'Lieblingsfach', 'Lieblingsmusik'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
  });
}