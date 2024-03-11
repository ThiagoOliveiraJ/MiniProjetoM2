class Pessoa {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

const formCadastro = document.getElementById('form');
const tabelaDados = document.getElementById('tabela');
const tbody = document.querySelector('tbody');

const dados = [];

formCadastro.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const pessoa = new Pessoa(nome, email);
    dados.push(pessoa);
    exibirDados()
    formCadastro.reset();
});

function exibirDados() {
    console.log("Exibindo dados na tabela:", dados);
    tbody.innerHTML = ''
    dados.forEach((pessoa, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pessoa.nome}</td>
            <td>${pessoa.email}</td>
            <td>
                <button class="btn-tabela editar" onclick="editar(${index})">Editar</button>
                <button class="btn-tabela excluir" onclick="excluir(${index})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    })

}

const popup = document.getElementById('popup');
const sectionCadastro = document.querySelector('.section-cadastro');
const sectionTabela = document.querySelector('.section-tabela');




function editar(index) {
    const pessoa = dados[index];
    const novoNome = prompt('Digite o novo nome:', pessoa.nome);
    const novoEmail = prompt('Digite o novo email:', pessoa.email);
    if (novoNome !== null && novoEmail !== null) {
        pessoa.nome = novoNome;
        pessoa.email = novoEmail;
        exibirDados();
    }
}
