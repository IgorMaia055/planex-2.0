function NotFound() {
    return (
        <>

            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    {/* <div class="col-10 col-sm-8 col-lg-6">
                        <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div> */}
                    <div class="col-lg-12">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Página não encontrada!</h1>
                        <p class="lead">Erro <code>404</code>, verifique o endereço e tente novamente.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="/" class="btn btn-primary btn-lg px-4 me-md-2">Página principal</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NotFound;