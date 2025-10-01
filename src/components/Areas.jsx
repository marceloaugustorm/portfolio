export const Areas = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <h2 className="text-center mb-4">Áreas de Interesse</h2>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title"> Clínica Geral</h5>
                            <p className="card-text">Diagnóstico e tratamento de pequenos animais</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title"> Cirurgia</h5>
                            <p className="card-text">Procedimentos cirúrgicos veterinários</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title"> Medicina Preventiva</h5>
                            <p className="card-text">Vacinação e cuidados preventivos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}