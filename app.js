let nombres = [];

    function adicionar() {
      const input = document.getElementById("nombreInput");
      const nombre = input.value.trim();
      
      if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
      }
      
      nombres.push(nombre);
      mostrarLista();
      input.value = "";
      input.focus();
    }

    function mostrarLista() {
      const lista = document.getElementById("listaNombres");
      lista.innerHTML = "";
      nombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
      });
    }

    function sortear() {
      if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
      }
      const indice = Math.floor(Math.random() * nombres.length);
      const ganador = nombres[indice];
      document.getElementById("resultado").textContent = " Tú amigo secreto es: " + ganador ;
      document.getElementById("listaNombres").innerHTML = "";
    
    }