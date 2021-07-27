const botoesAbrir = document.querySelectorAll('[data-modal="abrir"]');
const botaofechar = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-modal="container"]');
const html = document.documentElement;

function abrirModal(e) {
    modalContainer.classList.add('ativo');
    setTimeout(() => {html.addEventListener('click', fecharModal);});
};

function fecharModal(e) {
    e.preventDefault();

    if(e.target === modalContainer || e.target === botaofechar) {
        modalContainer.classList.remove('ativo');
        html.removeEventListener('click', fecharModal);
    }
};

function clickOutside(e) {
    console.log(e.target);
}

botoesAbrir.forEach( (i) => { i.addEventListener('click', abrirModal) } );
botaofechar.addEventListener('click', fecharModal);