export default function Footer(props) {
    return (
        <footer>
            <hr />

            <div class="modal-footer">
                { props.children }                    
            </div>
        </footer>
    )
}
