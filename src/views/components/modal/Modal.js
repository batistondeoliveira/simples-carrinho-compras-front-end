export default function Modal(props) {
    return (
        <>        
            <div id="abrirModal" className={"modal " + (props.open ? 'open' : '')}>
                <div>                        
                    { props.children }                
                </div>
            </div>            
        </>
    )
}
