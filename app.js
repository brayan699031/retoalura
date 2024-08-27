let claves = {
    a : 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

function encriptar(){
    parrafo = document.getElementById('textoUsuario').value
    texto = '';
//Itera sobre cada elemento de la cadena de texto y remplaza el valor 

    if(parrafo.length != 0){
        for(let letra of parrafo){
            if(letra in claves){
                    texto += `${claves[letra]}`;
            }else{
                    texto += letra;
            }
        }
        return imprimirResultado(texto);
    }
}


function desencriptar(){

    let texto = document.getElementById('textoUsuario').value;

    // Iterar sobre las claves del objeto

    if(texto.length != 0){

        for (let [clave, valor] of Object.entries(claves)) {

            let regex = new RegExp(valor, 'g');
            texto = texto.replace(regex, clave);
        }
        return imprimirResultado(texto);
    }
}

function imprimirResultado(imprimir){
    const textarea = document.getElementById('resultado');
    textarea.value = imprimir;
    document.getElementById("ocultar").style.display = "none";
    document.getElementById("resultados__ver").style.display = "inline-block";
    return;
}

function copiar(){
    const copiar = document.getElementById("resultado");
    copiar.select();
    document.execCommand("copy");
    return;
}