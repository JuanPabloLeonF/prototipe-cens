import "./History.css";

export const History: React.FC = () => {
    return (
       <section className="history">
            <div className="container-history">
                <div className="container-diagram">
                    <h2>Historico</h2>
                    <p>aqu iria el diagrama</p>
                </div>
                <div className="container-diagram">
                    <div className="container-information">
                        <div className="container-user">
                            <p>Nombre del usuario</p>
                            <p>Numero del medidor</p>
                        </div>
                        <h2>Consumo por dia</h2>
                        <div className="container-filter">
                            <input type="date" />
                            <button type="button">Aceptar</button>  
                        </div>
                    </div>
                    <p>aqui ria el diagrama</p>
                </div>
            </div>
       </section>
    );
};