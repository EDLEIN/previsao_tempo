const apiKey = "efe7827a22d82321033cd1227e745773";

function buscarClima(){
    const cidade = document.getElementById('cidade').value;

    if (!cidade) return alert('Digite o nome da cidade.');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
    .then(response => {
        if (!response.ok) throw new Error("Cidade não encontrada.");
        return response.json();
    
    })
    .then(dados => {
        console.log(dados);

        const temp = dados.main.temp.toFixed(1);
        const clima = dados.weather[0].description;
        const umidade = dados.main.humidity;
        const icone = dados.weather[0].icon;
        const cidadeNome = dados.name;

        const resultado = `
        <h2>${cidadeNome}</h2>
        <img src="https://openweathermap.org/img/wn/${icone}@2x.png" alt="${clima}" />
        <p><strong>Temperatura:</strong> ${temp}°C</p>
        <p><strong>Clima:</strong> ${clima}</p>
        <p><strong>Umidade:</strong> ${umidade}%</p>
      `;

      document.getElementById("resultado").innerHTML = resultado;
    })
    
    .catch(erro => {
      document.getElementById("resultado").innerHTML = `<p style="color:#ffd;">${erro.message}</p>`;
    });
}