export default function Header(props) {
    return (                               
        <header>
            {props.close !== undefined &&
                <button className="fechar" onClick={() => props.onClose()}>x</button>
            }            

            <h2>{ props.title }</h2>

            <hr />
        </header>                
    )
}
