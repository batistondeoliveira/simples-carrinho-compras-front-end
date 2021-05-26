export default function Input(props) {
    return (
        <div class="input">
            <label style={{float: 'left'}} htmlFor={props.name}>
                {props.children}                        
            </label>

            <input 
                autoComplete="off"                           
                type={props.type} 
                name={props.name}                            
                id={props.id}     
                value={props.value || ''}                                                
                class="form-control"
                onChange={input => props.onChange(input)}                
            />

            {props.error &&
                <span class="input-error">
                    {props.error}
                </span>
            }
        </div>
    )
}
