const form = document.querySelector("#cadastro-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  const curso = getDados();

  if (curso) {
    await pushDataToApi(curso);
  }
});

function getDados() {
  const inputNome = document.querySelector("#nome");
  const inputDescricao = document.querySelector("#descricao");
  const inputDuracao = document.querySelector("#duracao");

  if (!inputNome.value || !inputDescricao.value || !inputDuracao.value) {
    alert("Todos os campos devem ser preenchidos!");
    return null;
  }


  return {
    nome: inputNome.value,
    descricao: inputDescricao.value,
    cargaHoraria: parseInt(inputDuracao.value, 10), // Corrigido para "cargaHoraria"
  };
}

async function pushDataToApi(curso) {
  try {
    const resposta = await fetch("http://localhost:3000/cursos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curso),
    });

    if (resposta.ok) {
      cleanFields();
      alert("Curso cadastrado com sucesso!");
      window.location.href = "index.html";
    } else {
      const errorData = await resposta.json();
      alert(`Erro ao cadastrar curso: ${errorData.errors?.[0]?.msg || "Erro desconhecido"}`);
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao cadastrar curso! Verifique o console para mais detalhes.");
  }
}

function cleanFields() {
  document.querySelector("#nome").value = "";
  document.querySelector("#descricao").value = "";
  document.querySelector("#duracao").value = "";
}
