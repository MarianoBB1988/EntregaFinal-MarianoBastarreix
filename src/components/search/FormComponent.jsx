
export default function FormComponent() {
    const [busqueda, setBusqueda] = useState('');
    const navEstilo = {
        backgroundColor: '#61615C'
    }

    const cargarBusqueda = (e) => {
        setBusqueda(e.target.value)
    }

    return (
        <>
            <header className="fixed-top ">
                <nav className="navbar navbar-expand-lg bg-dark shadow-lg" data-bs-theme="dark">

                    <div className="input-group">
                        <input type="search" onChange={cargarBusqueda} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <a type="button" className="btn btn-outline-primary" data-mdb-ripple-init>sssearch</a>
                    </div>

                </nav>
            </header>


        </>
    );

}
