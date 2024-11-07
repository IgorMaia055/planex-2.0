import { Modal } from 'bootstrap';
import { setCookie, getCookie } from './cookie.js';
import confete from '../js/confete.js'

// Intercepta todos os formulários na página
document.addEventListener('submit', function (event) {

    let etapaElements = document.getElementsByName('etapa');
    for (let i = 0; i < etapaElements.length; i++) {
        let etapa = etapaElements[i].value;

        document.getElementById(`proximoModalDisabled${etapa}`).hidden = false;
        document.getElementById(`proximoModal${etapa}`).hidden = true;
    }


    event.preventDefault(); // Bloqueia o envio do formulário

    // Extrai o formulário enviado
    const form = event.target;

    // Obtém informações do formulário
    const action = form.action;  // URL de destino do formulário
    const method = form.method.toUpperCase() || 'POST';     // Método do formulário (GET ou POST)

    // Extrai os inputs do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Transforma em objeto

    // Configura opções para fetch
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method !== 'GET' ? JSON.stringify(data) : undefined,
    };

    // Envia os dados via fetch
    fetch(action, options)
        .then(response => response.json())
        .then(responseData => {
            document.getElementById('feedbackLogin').hidden = true

            if (responseData.errorLogin) {
                document.getElementById('floatingUsername').classList.add('border-red')
                document.getElementById('floatingPassword').classList.add('border-red')
                document.getElementById('secondPartPass').classList.add('border-red-end')
                document.getElementById('feedbackLogin').hidden = false
            }
            if (responseData.successLogin) {
                setCookie('username', responseData.username, 30)
                setCookie('password', responseData.password, 30)

                document.cookie = "unic_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                window.location.href = '/'
            }

            if (responseData.errorInputs) {
                document.getElementById('floatingUsername').classList.add('border-red')
                document.getElementById('floatingPassword').classList.add('border-red')
                document.getElementById('secondPartPass').classList.add('border-red-end')
            }
            if (responseData.errorUsername) {
                document.getElementById('floatingUsername').classList.add('border-red')
            }
            if (responseData.errorPassword) {
                document.getElementById('floatingPassword').classList.add('border-red')
                document.getElementById('secondPartPass').classList.add('border-red-end')
            }

            if (responseData.successCadastro) {
                setCookie('username', responseData.username, 30)
                setCookie('password', responseData.password, 30)

                document.cookie = "unic_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                window.location.href = '/'
            } else if (responseData.successCadastro == false) {
                alert(responseData.message)
                window.location.reload()
            }

            if (data.etapa == 1) {
                if (responseData.codeError == 1) {
                    document.querySelector('#feedbackNomeEmpresa2').hidden = true
                    document.querySelector('#feedbackNomeEmpresa').hidden = false
                    document.querySelector('#nomeEmpresa').classList.add('is-invalid')
                } else if (responseData.codeError == 2) {
                    document.querySelector('#nomeEmpresa').classList.add('is-invalid')
                    document.querySelector('#feedbackNomeEmpresa').hidden = true
                    document.querySelector('#feedbackNomeEmpresa2').hidden = false
                } else {
                    if (responseData.success) {
                        console.log(responseData)
                        setCookie('unic_id', responseData.unic_id, 20)

                        document.getElementById('unic_idFinal').value = getCookie('unic_id')

                        const modalAnt = Modal.getInstance(document.getElementById(`etapa${data.etapa}`));
                        if (modalAnt) modalAnt.hide(); // Fecha o modal anterior, se existir

                        const modalElement = document.getElementById(`etapa${parseInt(data.etapa) + 1}`);
                        const modalProx = new Modal(modalElement, { backdrop: 'static' });

                        modalProx.show();
                    }
                }
            }

            if (data.etapa == 2) {
                if (responseData.errorName) {
                    document.querySelector('#nome').classList.add('is-invalid')
                } else {
                    if (responseData.success) {
                        const modalAnt = Modal.getInstance(document.getElementById(`etapa${data.etapa}`));
                        if (modalAnt) modalAnt.hide(); // Fecha o modal anterior, se existir

                        const modalElement = document.getElementById(`etapa${parseInt(data.etapa) + 1}`);
                        const modalProx = new Modal(modalElement, { backdrop: 'static' });

                        modalProx.show();
                    }
                }

                if (responseData.errorUsername == 1) {
                    document.querySelector('#feedbackUsername2').hidden = true
                    document.querySelector('#feedbackUsername').hidden = false
                    document.querySelector('#username').classList.add('is-invalid')
                } if (responseData.errorUsername == 2) {
                    document.querySelector('#username').classList.add('is-invalid')
                    document.querySelector('#feedbackUsername').hidden = true
                    document.querySelector('#feedbackUsername2').hidden = false
                } else {
                    if (responseData.success) {
                        const modalAnt = Modal.getInstance(document.getElementById(`etapa${data.etapa}`));
                        if (modalAnt) modalAnt.hide(); // Fecha o modal anterior, se existir

                        const modalElement = document.getElementById(`etapa${parseInt(data.etapa) + 1}`);
                        const modalProx = new Modal(modalElement, { backdrop: 'static' });

                        modalProx.show();
                    }
                }
            }

            if (data.etapa == 3) {
                if (responseData.errorEmail == 1) {
                    document.querySelector('#feedbackEmail2').hidden = true
                    document.querySelector('#feedbackEmail').hidden = false
                    document.querySelector('#email').classList.add('is-invalid')
                } else if (responseData.errorEmail == 2) {
                    document.querySelector('#email').classList.add('is-invalid')
                    document.querySelector('#feedbackEmail').hidden = true
                    document.querySelector('#feedbackEmail2').hidden = false
                } else if (responseData.success) {
                    document.getElementById('codeElement').hidden = false
                }

                if (responseData.successCode) {
                    const modalAnt = Modal.getInstance(document.getElementById(`etapa${data.etapa}`));
                    if (modalAnt) modalAnt.hide(); // Fecha o modal anterior, se existir

                    const modalElement = document.getElementById(`etapa${parseInt(data.etapa) + 1}`);
                    const modalProx = new Modal(modalElement, { backdrop: 'static' });

                    modalProx.show();
                }

                if (responseData.errorCode) {
                    document.getElementById('feedbackCode').hidden = false
                }
            }

            if (data.etapa == 4) {
                if (responseData.error) {
                    alert(responseData.message)
                    // window.location.reload()
                }

                if (!responseData.segura) {
                    document.getElementById('feedbackSenha').hidden = false
                    document.getElementById('feedbackSenha').innerText = responseData.message
                    document.getElementById('pass').classList.add('is-invalid')
                } else {
                    document.querySelector('.confete').hidden = false
                    const modalAnt = Modal.getInstance(document.getElementById(`etapa${data.etapa}`));
                    if (modalAnt) modalAnt.hide(); // Fecha o modal anterior, se existir

                    const modalElement = document.getElementById(`modalFinalizado`);
                    const modalProx = new Modal(modalElement, { backdrop: 'static' });

                    modalProx.show();

                    confete()
                }
            }

            console.log("Resposta do servidor:", responseData);

            for (let i = 0; i < etapaElements.length; i++) {
                let etapa = etapaElements[i].value;

                document.getElementById(`proximoModalDisabled${etapa}`).hidden = true;
                document.getElementById(`proximoModal${etapa}`).hidden = false;
            }
        })
        .catch(error => {
            console.error("Erro no envio do formulário:", error);
        });
});