const btnMenu = document.querySelector('.btn-menu')

function btn() {
	const navegacao = document.querySelector('#navegacao')
	navegacao.classList.toggle('active')
}

btnMenu.addEventListener('click', btn)


