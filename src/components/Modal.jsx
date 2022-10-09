import { AiFillCloseCircle } from 'react-icons/ai';

function Modal({ open, children, closeModal }) {
    return open && (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div className="sm:w-1/2 lg:w-1/3 border rounded-xl bg-white relative px-5 py-4">
                <button onClick={() => closeModal(false)} className="absolute right-4">
                    <AiFillCloseCircle color="teal" size="1.5rem" />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal