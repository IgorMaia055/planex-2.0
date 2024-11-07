import React, { useState } from "react";
import "../css/login.css";
import gif from "../gif/animationLogin.gif";
import Config from "../config/Config";
import "../js/loginAPI.js";
import { checkCookie, getCookie } from '../js/cookie.js';
import { eyePassword, eyePassword2 } from '../js/eyePassword.js'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    function closeToast() {
        document.getElementById('toastRedirect').style.display = 'none'
    }

    function alertEnterSystem() {
        return <div className="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" id="toastRedirect" style={{ display: 'block', position: 'fixed', right: '10px', top: '10px' }}>
            <div className="d-flex">
                <div className="toast-body" onClick={() => {
                    navigate('/')
                }} style={{ cursor: 'pointer' }}>
                    Entrar como <strong>{getCookie('username')}</strong>
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={closeToast}></button>
            </div>
        </div>
    }

    function Modal({ data }) {
        return (
            <div className="modal fade" id={`etapa${data.etapa}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <p className="text-success w-50">{data.etapa} de 4</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action={`${Config['url-server']}/register`} method="post">
                            <div className="modal-body">
                                <input type="hidden" name="etapa" value={data.etapa} />
                                {data.body}
                            </div>
                            <div className="modal-footer border-top-0">
                                <div className="btn-group w-100" role="group">
                                    <button type="button" className="btn btn-light disabled" style={{ width: "15rem" }}></button>
                                    <button type="submit" className="btn btn-light" id={`proximoModal${data.etapa}`}>
                                        Próximo
                                    </button>
                                    <button type="button" className="btn btn-light" id={`proximoModalDisabled${data.etapa}`} hidden disabled>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }

    function removeInvalidPass() {
        document.getElementById('floatingPassword').classList.remove('border-red')
        document.getElementById('secondPartPass').classList.remove('border-red-end')
    }

    function removeInvalidUsername() {
        document.getElementById('floatingUsername').classList.remove('border-red')
    }

    function checkInputs() {
        const pass = document.getElementById('floatingPassword')
        const username = document.getElementById('floatingUsername')

        console.log(username.value)
        if (!username.value) {
            document.getElementById('floatingUsername').classList.remove('border-red')
        }
        if (!pass.value) {
            document.getElementById('floatingPassword').classList.remove('border-red')
            document.getElementById('secondPartPass').classList.remove('border-red-end')
        }
    }

    return (
        <>
            {
                (checkCookie('username') ? alertEnterSystem() : '')
            }

            <div className="bg-dark">
                <div className="pageLogin">
                    <div className="p-5 text-center text-muted bg-body border border-dashed rounded-5" style={{ width: "75rem" }}>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img src={gif} alt="animated GIF" className="gif" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h1 className="text-body-emphasis mt-4 mb-5">Bem vindo(a) ao Planex</h1>

                                <form action={`${Config["url-server"]}/login`} method="post" style={{ width: "20rem", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>

                                    <p className="text-danger" id="feedbackLogin" hidden>Nome de usuário ou senha inválidos.</p>

                                    <div className="form-floating" style={{ width: "100%" }}>
                                        <input type="text" className="form-control" id="floatingUsername" placeholder="name@example.com" name="username" onInput={removeInvalidUsername} />
                                        <label htmlFor="floatingUsername">Nome de usuário</label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input type="password" className="form-control border-end-0 pass" name="password" id="floatingPassword" placeholder="Password" onInput={removeInvalidPass} />
                                            <label htmlFor="floatingPassword">Senha da conta</label>
                                        </div>
                                        <span className="input-group-text bg-white border-start-0" id="secondPartPass">
                                            <button type="button" onClick={eyePassword2} id="eyeBtnPrincipal" className="btn-invisibled">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                                </svg>
                                            </button>

                                            <button type="button" onClick={eyePassword2} id="eyeBtnPrincipal2" className="btn-invisibled" hidden>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>

                                    <button className="btn btn-primary btn-lg w-100 mt-3" onClick={checkInputs} style={{ borderRadius: "10rem" }} type="submit">Surpreenda-se</button>
                                </form>

                                <p className="mt-5">Ainda não tem uma conta?🤨 <a onClick={() => {
                                    navigate('/register')
                                }} data-bs-toggle="modal" data-bs-target="#etapa1" style={{ textDecoration: "none" }}>Cadastrar</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal data={{
                etapa: 1,
                body: (
                    <>
                        <div className="input-group has-validation">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nomeEmpresa" name="nomeEmpresa" placeholder="Nome da empresa" onInput={() => {
                                    document.getElementById('nomeEmpresa').classList.remove('is-invalid')
                                    document.getElementById('feedbackNomeEmpresa2').hidden = true
                                    document.getElementById('nomeEmpresaEtapa2').value = document.getElementById('nomeEmpresa').value
                                    document.getElementById('nomeEmpresaEtapa3').value = document.getElementById('nomeEmpresa').value
                                    document.getElementById('nomeEmpresaEtapa4').value = document.getElementById('nomeEmpresa').value
                                    document.getElementById('nomeEmpresaFinal').value = document.getElementById('nomeEmpresa').value
                                }} />
                                <label htmlFor="nomeEmpresa">Nome da empresa</label>
                                <div className="invalid-feedback" id="feedbackNomeEmpresa">
                                    O nome da empresa é obrigatório.
                                </div>
                                <div className="text-danger small" id="feedbackNomeEmpresa2" hidden>
                                    Esse nome de empresa já está sendo usado.
                                </div>
                            </div>
                        </div>
                    </>
                ),
            }} />

            <Modal data={{
                etapa: 2,
                body: (
                    <>
                        <div className="input-group has-validation">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome completo" onInput={() => {
                                    document.getElementById('nome').classList.remove('is-invalid')
                                }} />
                                <label htmlFor="nome">Nome completo</label>
                                <div className="invalid-feedback">
                                    O seu nome completo é obrigatório.
                                </div>
                            </div>

                        </div>
                        <div className="input-group has-validation">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="username" name="username" placeholder="Nome de usuário" onInput={() => {
                                    document.getElementById('username').classList.remove('is-invalid')
                                    document.getElementById('feedbackUsername2').hidden = true
                                }} />
                                <label htmlFor="username">Nome de usuário</label>
                                <div className="invalid-feedback" id="feedbackUsername">
                                    O nome de usuário é obrigatório.
                                </div>
                                <div className="text-danger small" id="feedbackUsername2" hidden>
                                    Esse nome de usuário já está sendo usado.
                                </div>
                            </div>
                        </div>

                        <input type="text" className="form-control" name="nomeEmpresa" id="nomeEmpresaEtapa2" hidden />
                    </>

                ),
            }} />

            <Modal data={{
                etapa: 3,
                body: (
                    <>
                        <div className="input-group has-validation">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Seu melhor email" onInput={() => {
                                    document.getElementById('email').classList.remove('is-invalid')
                                    document.getElementById('feedbackEmail2').hidden = true
                                }} />
                                <label htmlFor="nome">Seu melhor email</label>
                                <div className="invalid-feedback" id="feedbackEmail">
                                    O email é obrigatório.
                                </div>
                                <div className="text-danger small" id="feedbackEmail2" hidden>
                                    Esse email já está sendo usado por um usuário.
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-3" id="codeElement" hidden>
                            <h6>Informe o código que foi enviado para seu email aqui</h6>
                            <div className="email-code-container">
                                <input type="text" className="form-control email-code-input" maxLength="4" placeholder="0000" id="code" name="code" onInput={() => {
                                    document.getElementById('feedbackCode').hidden = true
                                }} />
                            </div>
                            <p className="text-danger" id="feedbackCode" hidden>Esse não é o código correto</p>
                        </div>

                        <input type="text" className="form-control" name="nomeEmpresa" id="nomeEmpresaEtapa3" hidden />
                    </>
                ),
            }} />

            <Modal data={{
                etapa: 4,
                body: (
                    <>
                        <input type="text" className="form-control" name="nomeEmpresa" id="nomeEmpresaEtapa4" hidden />

                        <div className="input-group mb-3">
                            <div className="form-floating">
                                <input type="password" className="form-control border-end-0 pass" name="senha" id="pass" placeholder="Password" onInput={() => {
                                    document.getElementById('pass').classList.remove('is-invalid')
                                    document.getElementById('feedbackSenha').hidden = true
                                }} />
                                <label htmlFor="pass">Crie uma senha</label>
                            </div>
                            <span className="input-group-text bg-white border-start-0">
                                <button type="button" onClick={eyePassword} id="eyeBtn" className="btn-invisibled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                    </svg>
                                </button>

                                <button type="button" onClick={eyePassword} id="eyeBtn2" className="btn-invisibled" hidden>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <p className="text-danger" id="feedbackSenha" style={{ marginTop: '-5px' }} hidden></p>

                        <p style={{ fontSize: '12px', marginBottom: '5px' }} className="text-secondary">Use no mínimo 8 caracteres, incluindo pelo menos um número e uma letra maiúscula.</p>
                    </>
                ),
            }} />


            <div className="modal fade" id="modalFinalizado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5">Cadastro finalizado com sucesso!</h1>
                        </div>
                        <div className="modal-body py-0">

                            <p className="text-secondary" style={{ fontSize: '14px' }}>Você está pronto para começar a usar o Planex e desfrutar do seu teste grátis!</p>

                        </div>

                        <form action={`${Config['url-server']}/register`} method="post">
                            <input type="hidden" name="unic_id" id="unic_idFinal" />
                            <input type="hidden" name="nomeEmpresa" id="nomeEmpresaFinal" />


                            <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                                <button type="submit" className="btn btn-primary">
                                    Acessar o Planex
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >


            <canvas width="1519" height="794" className="confete" hidden></canvas>

        </>
    );
}

export default Login;
