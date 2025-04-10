let ListaCarros = [
    {
        "nome": "Fiat Argo hgt18",
        "img": "./imagens/fiat-argo-hgt18.jpg",
        "descricao": "O Fiat Argo HGT 1.8 é um hatch compacto com um design esportivo e desempenho notável. Ele vem equipado com um motor 1.8 flex, capaz de gerar até 139 cv de potência com etanol e 135 cv com gasolina, além de um torque máximo de 19,3 kgfm (etanol) e 18,8 kgfm (gasolina). A aceleração de 0 a 100 km/h é feita em 9,2 segundos, e a velocidade máxima é de 192 km/h"
    },
    {
        "nome": "Honda Fit",
        "img": "imagens/Honda-FIT.jpg",
        "descricao": "O Honda Fit é um carro compacto conhecido por sua versatilidade, eficiência e design moderno. Ele oferece um motor 1.5 i-VTEC flex, que gera até 116 cv de potência com etanol e 115 cv com gasolina, além de um torque de 15,3 kgfm (etanol) e 15,2 kgfm (gasolina). O modelo é equipado com transmissão manual de 5 marchas ou CVT (automática), dependendo da versão"
    },
    {
        "nome": "Chevrolet Onix",
        "img": "imagens/Chevrolet-Onix-LT-2023-2.webp",
        "descricao": "O Chevrolet Onix é um dos carros mais populares no Brasil, conhecido por sua eficiência, tecnologia e design moderno. Ele está disponível em versões hatch e sedã (Onix Plus), oferecendo opções de motores 1.0 aspirado e 1.0 turbo, ambos flex. A potência varia de 82 cv a 116 cv, dependendo da configuração, com torque máximo de até 16,8 kgfm."
    },
    {
        "nome": "Volkswagen Gol",
        "img": "imagens/Volkswagen_Gol.jpg",
        "descricao": "O Volkswagen Gol é um dos carros mais icônicos e populares no Brasil, conhecido por sua confiabilidade e custo-benefício. Ele está disponível com diferentes opções de motorização, incluindo o motor 1.0 MPI flex, que entrega até 84 cv de potência com etanol, e o motor 1.6 MSI flex, que pode gerar até 120 cv de potência com etanol. As transmissões disponíveis incluem manual de 5 marchas e automática de 6 velocidades."
    },
    {
        "nome": "Toyota Etios Sedan",
        "img": "imagens/Toyota-Etios-Sedan.webp",
        "descricao": "O Toyota Etios Sedan é um modelo compacto que combina praticidade, conforto e eficiência. Ele está disponível com motor 1.5 flex, que entrega até 107 cv de potência com etanol e 102 cv com gasolina, além de um torque de 14,7 kgfm (etanol) e 14,3 kgfm (gasolina). O modelo oferece opções de transmissão manual de 6 marchas ou automática de 4 velocidades."
    },
    {
        "nome": "Renault Kwid",
        "img": "imagens/Renault-Kwid.png",
        "descricao": "O Renault Kwid é um compacto que se destaca pelo design robusto, economia de combustível e custo-benefício. Ele é frequentemente chamado de SUV dos compactos devido à sua altura elevada e estilo aventureiro. Equipado com um motor 1.0 flex, o Kwid entrega até 71 cv de potência com etanol e 68 cv com gasolina, além de um torque de 10 kgfm (etanol) e 9,4 kgfm (gasolina)."
    }

]

ListaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>

                        <a href="#" class="btn btn-secondary" onClick = "zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    
    `

})

function zoomImg(posicao){
    let carroSelecionado = ListaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }

}