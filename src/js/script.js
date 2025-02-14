const advice = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-number');
const btn = document.getElementById('advice-generator');

async function gerarConselho() {
    try {
        advice.innerHTML = 'Loading...';
        adviceId.innerHTML = '...'
        const url = 'https://api.adviceslip.com/advice';
        const resposta = await fetch(url);
        const data = await resposta.json();
        
        if(!resposta.ok){
            throw new Error("Ocorreu um erro.");
        }

        advice.innerHTML = data.slip.advice;
        adviceId.innerHTML =  `Advice #${data.slip.id}`;

    } catch (error) {
        console.log('Erro:', error);
        alert('Ops, algo deu errado.')
    }finally{
        console.log('Conselho gerado com sucesso!');
    }
}

btn.addEventListener('click', gerarConselho);














