//si le navigateur n a pas encore cree certains éléments au moment ou le code est execute il peut ne pas fonctionner
//evenement "DOMContentLoaded" permet d attendre la fin du chargemment 
document.addEventListener("DOMContentLoaded", function(event) {

//Affichage conditionnelle des specialites
  document.getElementById("seconde").onclick = function() {
    document.getElementById("S1").style.display = "none";
    document.getElementById("S2").style.display = "none";
    document.getElementById("S3").style.display = "none";
  };

  document.getElementById("terminale").onclick = function() {
    document.getElementById("S1").style.display = "block";
    document.getElementById("S2").style.display = "block";
    document.getElementById("S3").style.display = "none";
  };
   
  document.getElementById("premiere").onclick = function() {
    document.getElementById("S1").style.display = "block";
    document.getElementById("S2").style.display = "block";
    document.getElementById("S3").style.display = "block";
  };

//Verifcation des valeurs avant envoie
  // Récupère les éléments DOM correspondants aux champs de sélection de niveau et de spécialité
  const levelSelect = document.querySelector('#level');
  const spe1Select = document.querySelector('#S1');
  const spe2Select = document.querySelector('#S2');
  const spe3Select = document.querySelector('#S3');

  // Ajoute un écouteur d'événement "change" au champ de sélection de niveau
  levelSelect.addEventListener('change', function() {
    // Masque tous les champs de sélection de spécialité
    spe1Select.style.display = 'none';
    spe2Select.style.display = 'none';
    spe3Select.style.display = 'none';
    
    // Affiche le champ de sélection de spécialité correspondant à la valeur sélectionnée dans le champ de sélection de niveau
    if (levelSelect.value === 'seconde') {
      spe1Select.style.display = 'block';
    } else if (levelSelect.value === 'premiere') {
      spe1Select.style.display = 'block';
      spe2Select.style.display = 'block';
    } else if (levelSelect.value === 'terminale') {
      spe1Select.style.display = 'block';
      spe2Select.style.display = 'block';
      spe3Select.style.display = 'block';
    }
  });


});