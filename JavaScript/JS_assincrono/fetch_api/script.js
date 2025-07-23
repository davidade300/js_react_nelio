const cep = "59148800";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json`);

fetchResult
  .then((response) => {
    console.log("Sucesso no fetch", response);
    const json = response.json();

    json
      .then((result) => {
        console.log("Sucesso no json", result);
      })
      .catch((error) => {
        console.log("Erro no json", error);
      });
  })
  .catch((error) => {
    console.log("Erro no Fetch", error);
  });
