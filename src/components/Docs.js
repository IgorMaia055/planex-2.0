import '../css/home.css';
import imgOrcamento from '../img/orcamento.png';
import '../css/placeholder.css';
import { useState, useEffect } from 'react';

function Docs() {
    function Card({ data }) {
        const [isLoaded, setIsLoaded] = useState(false);

        // Função para lidar com o carregamento da imagem
        const handleImageLoad = () => {
            setIsLoaded(true);
        };

        return (
            <div className='col-4 mb-4'>
                <div className="card" style={{ height: '24rem' }}>
                    {!isLoaded && (
                        <div className="placeholderElement" />
                    )}
                    <img
                        src={data.img}
                        className="card-img-top h-50"
                        alt={data.title}
                        onLoad={handleImageLoad}
                        style={{ display: isLoaded ? 'block' : 'none' }}
                    />

                    <div className="card-body">
                        {isLoaded ? <h5 className="card-title">{data.title}</h5> : <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>}
                        {isLoaded ? <p className="card-text">{data.description}</p> : <p class="card-text placeholder-glow">
                            <span class="placeholder col-8"></span>
                            <span class="placeholder col-3"></span>
                        </p>}


                        {isLoaded ? <a href="#" className="btn btn-primary">Usar</a> : <a class="btn btn-primary disabled placeholder col-2" aria-disabled="true"></a>}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="areaWork">
            <div className='row w-100'>
                <Card data={{
                    img: imgOrcamento,
                    title: 'Orçamentos',
                    description: 'Crie um orçamento profissional com facilidade, sem se preocupar com cálculos ou digitação.',
                }} />
                <Card data={{
                    img: imgOrcamento,
                    title: 'Propostas',
                    description: 'Elabore propostas atrativas que capturam a atenção de seus clientes.',
                }} />
                <Card data={{
                    img: imgOrcamento,
                    title: 'Recibos',
                    description: 'Gere recibos claros e profissionais para suas transações.',
                }} />
                <Card data={{
                    img: imgOrcamento,
                    title: 'Contratos',
                    description: 'Crie contratos detalhados para formalizar acordos.',
                }} />
                <Card data={{
                    img: imgOrcamento,
                    title: 'Notas Fiscais',
                    description: 'Emita notas fiscais de forma simples, rápida e segura.',
                }} />
                <Card data={{
                    img: imgOrcamento,
                    title: 'Relatórios',
                    description: 'Crie relatórios precisos e abrangentes com facilidade.',
                }} />
            </div>
        </div>
    );
}

export default Docs;
