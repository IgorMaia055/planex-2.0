import { Modal } from 'bootstrap';

function configurarBotoesVoltar(id) {
    const button = document.getElementById(id);
    if (!button) return;  // Garante que o botão existe antes de continuar

    const etapaAtual = button.getAttribute('data-etapa'); // Obtém o número da etapa atual
    const modalAtual = document.getElementById(`etapa${etapaAtual}`);
    const modalAnterior = document.getElementById(`etapa${parseInt(etapaAtual) - 1}`);

    // Verifica se os modais existem antes de prosseguir
    if (modalAtual && modalAnterior) {
        const modalAtualInstance = Modal.getInstance(modalAtual) || new Modal(modalAtual);
        const modalAnteriorInstance = Modal.getInstance(modalAnterior) || new Modal(modalAnterior, { backdrop: 'static' });

        modalAtualInstance.hide();
        modalAnteriorInstance.show();
    }
}

export default configurarBotoesVoltar;
