function handleDragStart(e)
{
  this.style.opacity = '0.4';
}

function handleDragEnd(e) {
  this.style.opacity = '1';
}

function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (let i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        const file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
        displayFile(file);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (let i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      displayFile(file);
    }
  }
}
function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
function displayFile(file_image) {
  // Create elements to add to the documewnt
  let drop_zone = document.
  let image_file = document.createElement('p');


 // Add/append the section(card) with the h2 element
 image_file.appendChild(file_image);
 
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.drop_file').appendChild(image_file);
}
