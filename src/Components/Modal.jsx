import {XCircleIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
function Modal({children, setIsClose , isClose}) {
    return (
        <div className={`modal ${isClose ? 'hidden' : ''}`}>
            <div className="backdrop" onClick={()=> setIsClose(true) }></div>
            <div className="modal__content">
                <div className="modal__header">
                    <h2>list off favorite</h2>
                    <button onClick={()=> setIsClose(true) }>
                        <XCircleIcon/>
                    </button>
                </div>
                <div className="modal__cards">
                    {children}
                </div>

            </div>
        </div>

    )
}

export default Modal;