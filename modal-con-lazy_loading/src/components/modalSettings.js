import Modal from "./modal";
export default function ModalSettings({title, root}) {
    return (
        <Modal title ={title} root={root}>
        <div>Modal de configuraciones</div>
        </Modal>

    );

    }