//your JS code here. If required.
 function updateSizeInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const sizeInfoDiv = document.getElementById('sizeInfo');
      sizeInfoDiv.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
    }

    updateSizeInfo();
    window.addEventListener('resize', updateSizeInfo);
