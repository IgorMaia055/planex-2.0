import '../css/sidebar.css';
import logo from '../img/zambiank-ciano.png';
import { useState } from 'react';
import Icon from '../js/Icon.js';

function Sidebar({ activeRouter }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    function exit() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        window.location.href = '/login'
    }

    function NavLink({ data }) {

        let icon = '';
        if (data.nameRouter == 'home') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 me-3" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">{Icon('home')}</svg>
        } else if (data.nameRouter == 'docs') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 me-3" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                {Icon('docs')}
            </svg>
        } else if (data.nameRouter == 'projects') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 me-3" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d={Icon('projects')}></path>
            </svg>
        } else if (data.nameRouter == 'collaborators') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 me-3 text-dark" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d={Icon('collaborators')} />
            </svg>
        } else if (data.nameRouter == 'clients') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" className="mb-1 me-3 text-dark" style={{ marginLeft: "1.5px" }} viewBox="0 0 16 16">
                <path d={Icon('clients')} />
            </svg>
        } else if (data.nameRouter == 'email') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "1px" }} width="18" height="18" fill="currentColor" className="mb-1 me-3 text-dark" viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
            </svg>
        } else if (data.nameRouter == 'chat') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "1px" }} width="18" height="18" fill="currentColor" className="mb-1 me-3 text-dark" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
        } else if (data.nameRouter == 'timestamp') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "1px" }} width="18" height="18" fill="currentColor" className="mb-1 me-3 text-dark" viewBox="0 0 16 16">
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
            </svg>
        } else if (data.nameRouter == 'agenda') {
            icon = <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "1.5px" }} width="17" height="17" fill="currentColor" className="mb-1 me-3 text-dark" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
        }

        return (
            <li className="nav-item mb-2">
                <a href={data.router} className={`nav-link text-white ${activeRouter == data.nameRouter ? 'active' : ''}  d-flex`}>
                    <div className={`${activeRouter == data.nameRouter ? '' : 'boxIcon'}`}>
                        {icon}
                    </div>
                    {data.label}
                </a>
            </li>
        );
    }

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <img src={logo} className="App-logo-small" alt="logo" />
                    <span className="txt-planex">Planex</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <NavLink data={{
                        router: '/', nameRouter: 'home', label: 'Lar'
                    }} />
                    <NavLink data={{
                        router: '/timestamp', nameRouter: 'timestamp', label: 'Bate pontos'
                    }} />
                    <NavLink data={{
                        router: '/docs', nameRouter: 'docs', label: 'Documentos'
                    }} />
                    <NavLink data={{
                        router: '/projects', nameRouter: 'projects', label: 'Projetos'
                    }} />
                    <NavLink data={{
                        router: '/collaborators', nameRouter: 'collaborators', label: 'Colaboradores'
                    }} />
                    <NavLink data={{
                        router: '/clients', nameRouter: 'clients', label: 'Clientes'
                    }} />
                    <NavLink data={{
                        router: '/email', nameRouter: 'email', label: 'E-mail'
                    }} />
                    <NavLink data={{
                        router: '/chat', nameRouter: 'chat', label: 'Conversas'
                    }} />
                    <NavLink data={{
                        router: '/agenda', nameRouter: 'agenda', label: 'Agenda'
                    }} />
                </ul>

                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a href="#" className="dropdown-item" onClick={exit}>Sair</a></li>
                    </ul>
                </div>
            </div>

            <nav aria-label="breadcrumb" className="shadow-sm" style={{ marginLeft: '280px', position: "fixed", width: "calc(100% - 280px)", zIndex: 1000 }}>
                <ol className="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary m-0">
                    <li className="breadcrumb-item">
                        <a className="link-body-emphasis" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-house-door mb-1" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                            </svg>
                            <span className="visually-hidden">Home</span>
                        </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a className="text-dark text-decoration-none" href="#">Projetos</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a className="text-dark text-decoration-none fw-semibold" href="#">Volvo Robótica</a>
                    </li>
                    <li className="ms-auto">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Pesquisar (Ctrl+F)" aria-label="Search" style={{ height: "2rem" }} />
                        </form>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default Sidebar;
