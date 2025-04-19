const elementoCursos =document.querySelector("#cursos");

async function getCursos() {
    const retorno = await fetch("http://localhost:3000/cursos")
    const cursos = await retorno.json()
    renderizarCursos(cursos)

        
}

function renderizarCursos(cursos) {
    cursos.forEach(curso => {
        const cursoElement = document.createElement("div")
        cursoElement.classList.add("curso")
        cursoElement.innerHTML = `
            <h2>${curso.nome}</h2>
            <p>${curso.descricao}</p>
            <p>Carga Horária: ${curso.cargaHoraria} horas</p>
        `
        elementoCursos.appendChild(cursoElement)
    })
}

getCursos() 