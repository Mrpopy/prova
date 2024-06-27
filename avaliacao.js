const body = document.querySelector(`body`);
body.style.display = `flex`;
body.style.justifyContent = `space-between`;
body.style.alignItems = `center`;
body.style.height = `100vh`;
body.style.backgroundImage = `url("image.png")`;
body.style.backgroundSize = `2000px 1000px`;
body.style.overflow = `hidden`;
body.style.flexDirection = `column`;
body.style.margin = `0`;

const alto = document.createElement("header")
alto.style.display = `flex`;
alto.style.justifyContent = `center`;
alto.style.alignItems = `center`;
alto.style.backgroundColor = `black`;
alto.style.color = `white`;
alto.style.width = `150%`;
alto.style.height = `70px`;
body.appendChild(alto);   

const alto1 = document.createElement("button");
alto1.style.color = `white`;
alto1.textContent = "GITHUB";
alto1.addEventListener ("click", function(){
    window.open("https://github.com/Mrpopy","_blank")
})
alto1.style.backgroundColor = `black`;
alto1.style.border = `0px`;
alto1.style.cursor = `pointer`;
alto.appendChild(alto1);

const div = document.createElement(`div`);
div.style.display = `flex`;
div.style.justifyContent = `space-between`;
div.style.alignItems = `center`;
div.style.flexDirection = `column`;
div.style.width = `1000px`;
div.style.height = `600px`;
div.style.border = `3px solid black`;
div.style.borderRadius = `5px`;
body.appendChild(div);

const text = document.createElement(`text`);
text.textContent = `Seja bem vindo a calculadora de alta tecnologia`;
div.appendChild(text)

const coluna = document.createElement(`input`);
coluna.style.width = `500px`;
coluna.style.height = `30px`;
coluna.placeholder = `Digite o seu nome !!!`;
coluna.style.border = `3px solid black`;
coluna.style.borderRadius = `5px`;
div.appendChild(coluna)

const coluna1 = document.createElement(`input`);
coluna1.style.width = `500px`;
coluna1.style.height = `30px`;
coluna1.placeholder = `Coloque a primeira nota !!!`;
coluna1.style.border = `3px solid black`;
coluna1.style.borderRadius = `5px`;
div.appendChild(coluna1)

const coluna2 = document.createElement(`input`);
coluna2.style.width = `500px`;
coluna2.style.height = `30px`;
coluna2.placeholder = `coloque a segunda nota !!!`;
coluna2.style.border = `3px solid black`;
coluna2.style.borderRadius = `5px`;
div.appendChild(coluna2)

const coluna3 = document.createElement(`input`);
coluna3.style.width = `500px`;
coluna3.style.height = `30px`;
coluna3.placeholder = `Coloque a terceira nota !!!`;
coluna3.style.border = `3px solid black`;
coluna3.style.borderRadius = `5px`;
div.appendChild(coluna3)

const button = document.createElement(`button`);
button.style.display = `flex`;
button.style.justifyContent = `center`;
button.style.width = `110px`;
button.textContent = `Calcutar media`;
button.style.height = `20px`;
button.style.border = `2px solid black`;
button.style.borderRadius = `5px`;
div.appendChild(button)
button.addEventListener('click', function () {
    const nome = coluna.value;
    const nota1 = parseFloat(coluna1.value)
    const nota2 = parseFloat(coluna2.value)
    const nota3 = parseFloat(coluna3.value)
    const media = ((nota1 + nota2 + nota3) / 3)


    if (media >= 6){ resultado.textContent = `O aluno ${nome} tirou ${media.toFixed(1)}, portanto passou de ano`
}
    else if (media >= 4) {
    resultado.textContent = `O aluno ${nome} tirou ${media.toFixed(1)}, portanto está em recuperação.`
}
else {
    resultado.textContent = `O aluno ${nome} tirou ${media.toFixed(1)}, portanto está reprovado.`
}
div.appendChild(resultado);
});

const resultado = document.createElement("h3");

const baixo = document.createElement("footer")
baixo.style.display = `flex`;
baixo.style.justifyContent = `space-around`;
baixo.style.alignItems = `center`;
baixo.style.backgroundColor = `black`;
baixo.style.color = `white`;
baixo.style.width = `150%`;
baixo.style.height = `70px`;
body.appendChild(baixo);

const baixo1 = document.createElement("h3");
baixo1.style.color = `white`;
baixo1.textContent = `Orientador/Professor: Gabriel`;
baixo.appendChild(baixo1);

const baixo2 = document.createElement("h3");
baixo2.style.color = `white`;
baixo2.textContent = "Autor: Tiago Félix";
baixo.appendChild(baixo2);