const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#bt");
const form = document.querySelector(".form-contato");
const msgSucesso = document.querySelector("#mensagem-sucesso");


function validarCampo(campo, avisoId, textoAviso) {
  const aviso = document.querySelector(avisoId);
  if (campo.value.trim().length === 0) {
    aviso.innerHTML = `<b>${textoAviso}</b>`;
    campo.focus();
    return false;
  } else {
    aviso.innerHTML = "";
    return true;
  }
}


nome.addEventListener('focusout', () => validarCampo(nome, "#avisonome", "Favor preencher o campo nome"));
email.addEventListener('focusout', () => validarCampo(email, "#avisoemail", "Favor preencher o campo e-mail"));
assunto.addEventListener('focusout', () => validarCampo(assunto, "#avisoassunto", "Favor preencher o campo assunto"));
mensagem.addEventListener('focusout', () => validarCampo(mensagem, "#avisomensagem", "Favor preencher o campo mensagem"));


botao.addEventListener('click', function (e) {
  e.preventDefault();

  const nomeOk = validarCampo(nome, "#avisonome", "Favor preencher o campo nome");
  const emailOk = validarCampo(email, "#avisoemail", "Favor preencher o campo e-mail");
  const assuntoOk = validarCampo(assunto, "#avisoassunto", "Favor preencher o campo assunto");
  const mensagemOk = validarCampo(mensagem, "#avisomensagem", "Favor preencher o campo mensagem");

  if (nomeOk && emailOk && assuntoOk && mensagemOk) {
    alert("Mensagem enviada com sucesso! 📬");
    form.reset(); 
  }
});
