/*document.getElementById("S1").style.display = "block";
document.getElementsByClassName("S1").style.display = "block";*/

/* V1

if (document.getElementById('terminale').checked) {
 document.getElementById("S1").style.display = "block";
 document.getElementById("S2").style.display = "block";
};
if (document.getElementById('premiere').checked) {
 document.getElementById("S1").style.display = "block";
 document.getElementById("S2").style.display = "block";
 document.getElementById("S3").style.display = "block";
};
*/

var levelRadios = document.getElementsByName('level')[0];
var selectedLevel = document.querySelector('input[name="level"]:checked').value;
alert(selectedLevel);
if (selectedLevel=='premiere'){
  alert('ok premiere');

}
const form = document.querySelector('form');

levelRadios.addEventListener('change', function() {
  const selectedLevel = document.querySelector('input[name="level"]:checked').value;
  
  // Si le niveau sélectionné est "Première" ou "Terminale"
  if (selectedLevel === 'premiere' || selectedLevel === 'terminale') {
    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select-container');

    const selectLabel = document.createElement('label');
    selectLabel.textContent = 'Spécialité :';
    selectLabel.setAttribute('for', 'speciality');

    const select = document.createElement('select');
    select.setAttribute('id', 'speciality');
    select.setAttribute('name', 'speciality');

    // Ajouter les options en fonction du niveau sélectionné
    if (selectedLevel === 'premiere') {
      const option1 = document.createElement('option');
      option1.value = 'specialite1';
      option1.textContent = 'Spécialité 1';

      const option2 = document.createElement('option');
      option2.value = 'specialite2';
      option2.textContent = 'Spécialité 2';

      const option3 = document.createElement('option');
      option3.value = 'specialite3';
      option3.textContent = 'Spécialité 3';

      select.appendChild(option1);
      select.appendChild(option2);
      select.appendChild(option3);
    } else if (selectedLevel === 'terminale') {
      const option1 = document.createElement('option');
      option1.value = 'specialite1';
      option1.textContent = 'Spécialité 1';

      const option2 = document.createElement('option');
      option2.value = 'specialite2';
      option2.textContent = 'Spécialité 2';

      select.appendChild(option1);
      select.appendChild(option2);
    }

    selectContainer.appendChild(selectLabel);
    selectContainer.appendChild(select);

    form.insertBefore(selectContainer, form.lastElementChild);
  } else {
    // Si le niveau sélectionné est autre que "Première" ou "Terminale", supprimer le champ spécialité s'il existe
    const selectContainer = document.querySelector('.select-container');
    if (selectContainer) {
      selectContainer.remove();
    }
  }
});
