//Máscara para formulario de telefone
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

//Máscara para cpf
function mascaraCpf(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}
//mascara cep
const input = document.getElementById("cep");

input.addEventListener("keyup", formatarCep);

function formatarCep(e) {

    var v = e.target.value.replace(/\D/g, "")

    v = v.replace(/^(\d{5})(\d)/, "$1-$2")

    e.target.value = v;

}

