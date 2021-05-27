export default function Footer(props) {
    return (
        <footer>
            <hr />

            <div className="modal-footer">
                { props.children }                    
            </div>
        </footer>
    )
}
