export default function Input(props) {
    return (
        <div className="input">
            <label style={{float: 'left'}} htmlFor={props.name}>
                {props.children}                        
            </label>

            <input 
                autoComplete="off"                           
                type={props.type} 
                name={props.name}                            
                id={props.id}     
                value={props.value || ''}                                                
                className="form-control"
                onChange={input => props.onChange(input)}                
            />

            {props.error &&
                <span className="input-error">
                    {props.error}
                </span>
            }
        </div>
    )
}
