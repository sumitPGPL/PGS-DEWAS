"use client"
// components/ModalHome.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalCard from '@/components/ModalHome/ModalCard'

const ModalHome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        // Open modal after 4 seconds
        const initialTimeout = setTimeout(() => {
            setModalIsOpen(true);
        }, 3000);

        return () => clearTimeout(initialTimeout);
    }, []);

    const handleModalClose = () => {
        // Close modal and open again after 5 seconds when the cross button is clicked
        setModalIsOpen(false);

        const reopenTimeout = setTimeout(() => {
            setModalIsOpen(true);
        }, 18000);

        return () => clearTimeout(reopenTimeout);
    };


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModalClose}
            contentLabel="Example Modal">
            <div className="w-full h-full ">
                <button
                    onClick={handleModalClose}
                    className="fixed font-bold text-2xl text-red-600 w-12 h-12 z-30  right-14 top-14 duration-300 hover:transform hover:scale-x-125 hover:scale-y-125 bg-transparent">
                    <span className="sr-only">Close Modal</span>
                    &#10005;
                </button>
                <ModalCard />
            </div>

        </Modal>
    );
};

export default ModalHome;
