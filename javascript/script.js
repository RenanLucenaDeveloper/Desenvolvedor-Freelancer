const botoesAbrir = document.querySelectorAll('[data-modal="abrir"]');
const botaofechar = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-modal="container"]');

function abrirModal(e) {

    modalContainer.classList.add('ativo');
};

function fecharModal(e) {
    e.preventDefault();
    modalContainer.classList.remove('ativo');
};

botoesAbrir.forEach( (i) => { i.addEventListener('click', abrirModal) } );
botaofechar.addEventListener('click', fecharModal);