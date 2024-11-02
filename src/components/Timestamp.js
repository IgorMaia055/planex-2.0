import '../css/home.css';
import '../css/placeholder.css';
import img from '../img/img-app.webp';

function Timestamp() {

    return (
        <div className="areaWork">
            <div class="container">
                <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                    <img src={img} height={300} />
                    <h1 class="text-body-emphasis">Planex - Registro de ponto</h1>
                    <p class="col-lg-8 mx-auto fs-5 text-muted">
                        Seus funcionários podem usar o app Planex no <code>Android</code> para registrar os horários de trabalho, incluindo informações sobre diárias e transporte.
                    </p>
                    <div class="d-inline-flex gap-2 mb-5">
                        <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Primeiros passos
                        </button>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-bottom-0">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Timestamp;