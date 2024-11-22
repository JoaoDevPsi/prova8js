function converter() {
    const reais = parseFloat(document.getElementById("reais").value);
    const dolar = 5.2;
  
    const dolares = reais / dolar;
  
    document.getElementById("resultado").textContent = `$${dolares.toFixed(2)}`;
  }