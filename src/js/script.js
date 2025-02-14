// // // const btn = document.querySelector("#advice-generator");
// // // const advice = document.querySelector(".advice");

// // // btn.addEventListener("click", () => {

// // //     async function getAdvice() {

// // //         try {
// // //             const url = "https://api.adviceslip.com/advice";
// // //             const resposta = await fetch(url);
// // //             const data = await resposta.json();
// // //             advice.innerHTML = data.slip.advice;
// // //         }
// // //             catch{
// // //                 console.log('Error', error);
// // //             }finally{
// // //                 console.log('O seu conselho foi carregado com sucesso!');
// // //             }
// // //         }

// // //             getAdvice();
// // // });





// //  const btn = document.querySelector("#advice-generator");
// //  const advice = document.querySelector(".advice");
// //  const adviceNumber = document.querySelector(".advice-number");



// //     async function gerarConselho(){
// //         try {
// //             advice.innerHTML = 'Loading...'
// //             const url = 'https://api.adviceslip.com/advice';
// //             const resposta = await fetch(url);
// //             const data = await resposta.json();
// //             advice.innerHTML = data.slip.advice;
// //             adviceNumber.innerHTML = `Advice #${data.slip.id}`;
// //         } catch (error) {
// //             console.log('Erro:', error);
// //         }finally{
// //             console.log('O conselho foi gerado com sucesso!');
// //         }
// //     };

// // btn.addEventListener('click', gerarConselho);



// const advice = document.querySelector('.advice');
// const adviceId = document.querySelector('.advice-number');
// const btn = document.getElementById('advice-generator');

// async function gerarConselho(){
//     try {
//         advice.innerHTML = 'Loading...'
//         const url = 'https://api.adviceslip.com/advice';
//         const resposta = await fetch(url);
//         const data = await resposta.json();
        
//         if(!resposta.ok){
//             throw new Error("Algo deu errado no processo de carregamento de conselhos aleatórios.");
//         }

//         advice.innerHTML = data.slip.advice;
//         adviceId.innerHTML = `Advice #${data.slip.id}`;

//     } catch (error) {
//         console.log('Erro:', error);
//         alert('Ops, something went wrong.')
//     }finally{
//         console.log('Ocorreu tudo bem!')
//     }
// }

// btn.addEventListener('click', gerarConselho);

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














