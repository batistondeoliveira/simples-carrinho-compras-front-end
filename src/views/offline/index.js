// eslint-disable-next-line 

export default function Offline() {               
    const onClick = () => {        
        //eslint-disable-next-line
        return "javascript:history.go()"; 
    }
    
    return(
        <div id="offline" className="offline-sistema d-none">                         
            <div                 
                className="offline-sistema-offline                                                     
                           disconnected">                        
                Offline <div></div>                        
            </div>                
            
            <div className="offline-sistema-message">
                <h1>Não foi possível conectar a internet</h1>
                
                <button className="btn btn-danger" onClick={() => onClick()}>
                    Atualizar
                </button>                                                
            </div>                                            
        </div>
    )    
}
