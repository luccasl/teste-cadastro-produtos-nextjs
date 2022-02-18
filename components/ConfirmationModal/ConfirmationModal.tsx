import React from 'react'
import Button from '../Button'
import Modal from '../Modal'

const ConfirmationModal: React.FunctionComponent<{
    text?: string,
    onConfirm?: () => void,
    onCancel?: () => void
}> = ({ text, onConfirm, onCancel }) => {
    return (
        <Modal>
            <p>
                { text }
            </p>
            <div className='flex flex-row justify-end mt-4 space-x-2'>
                <Button text='Cancelar' onPress={ onCancel } secondary />
                <Button text='Confirmar' onPress={ onConfirm } />
            </div>
        </Modal>
    )
}

export { ConfirmationModal }