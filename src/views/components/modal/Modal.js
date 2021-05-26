export default function Modal(props) {
    return (
        <>        
            <div id="abrirModal" class={"modal " + (props.open ? 'open' : '')}>
                <div>                        
                    { props.children }                
                </div>
            </div>            
        </>
    )
}
