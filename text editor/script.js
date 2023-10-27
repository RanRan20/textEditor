'use strict'




//save



const saveBtn = document.getElementById("btnS");
const uploadBtn = document.getElementById("btnU");
const textarea = document.querySelector(".textarea");
const fontSizeSelect = document.querySelector('.font');

 const fileDownload = () => {
         const link = document.createElement("a");
         const content = document.querySelector("textarea").value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = "file.txt";
         link.click();
         URL.revokeObjectURL(link.href);
      }

saveBtn.addEventListener("click",fileDownload);





//upload


uploadBtn.addEventListener("change", function () {
  const file = uploadBtn.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    textarea.value = e.target.result;
  };

  reader.readAsText(file);
});




//align

const btnLeft = document.getElementById('alignL');
const btnCenter = document.getElementById('alignC');
const btnRight = document.getElementById('alignR');





//font







//font-size



fontSizeSelect.addEventListener('change', function() {
    const selectedFontSize = fontSizeSelect.value;
    textarea.style.fontSize = selectedFontSize;
});


//color









