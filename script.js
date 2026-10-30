const cursos = [
    { nome: "HTML e CSS", categoria: "programacao" },
    { nome: "JavaScript Básico", categoria: "programacao" },
    { nome: "Introdução ao Python", categoria: "programacao" },
    { nome: "Design de Interfaces", categoria: "design" },
    { nome: "Fundamentos de UX", categoria: "design" },
    { nome: "Introdução a SQL", categoria: "dados" }
];

const formulario = document.querySelector("#form-pesquisa");
const campoCurso = document.querySelector("#curso");
const campoCategoria = document.querySelector("#categoria");
const resultado = document.querySelector("#resultado");
const listaCursos = document.querySelector("#lista-cursos");

function mostrarCursos(lista) {
    listaCursos.replaceChildren();

    lista.forEach(function (curso) {
        const item = document.createElement("li");
        item.textContent = curso.nome;
        listaCursos.appendChild(item);
    });
}

function filtrarCursos() {
    const pesquisa = campoCurso.value.trim().toLowerCase();
    const categoria = campoCategoria.value;

    const cursosFiltrados = cursos.filter(function (curso) {
        const correspondeNome = curso.nome.toLowerCase().includes(pesquisa);

        const correspondeCategoria =
            categoria === "todas" || curso.categoria === categoria;

        return correspondeNome && correspondeCategoria;
    });

    mostrarCursos(cursosFiltrados);

    if (cursosFiltrados.length === 0) {
        resultado.textContent = "Nenhum curso encontrado.";
    } else {
        resultado.textContent =
            `${cursosFiltrados.length} curso(s) encontrado(s).`;
    }
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    filtrarCursos();
});

campoCategoria.addEventListener("change", filtrarCursos);

mostrarCursos(cursos);