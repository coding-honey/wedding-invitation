"use client";

import {useState} from "react";
import ModalWrapper from "@/app/_component/ModalWrapper";
import ContactList, {ContactProps} from "@/app/_component/contact/ContactList";

export default function ContactWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const grooms: ContactProps[] = [
    {type: '신랑', name: '정동헌', number: '01076715530'},
    {type: '신랑 아버지', name: '정석순', number: '01056875530'},
    {type: '신랑 어머니', name: '김형순', number: '01036875530'},
  ];

  const brides: ContactProps[] = [
    {type: '신부', name: '박선영', number: '01067190509'},
    {type: '신부 어머니', name: '김남희', number: '01088585598'},
  ];

  return (
    <div>
      <button type="button" className="btn btn-lg btn-dark w-100 mt-4" onClick={openModal}>혼주에게 연락하기</button>

      <ModalWrapper isOpen={isModalOpen} onClose={closeModal} title={'혼주에게 연락하기'}>
        <ContactList contacts={grooms}/>
        <hr className="mx-5"/>
        <ContactList contacts={brides}/>
      </ModalWrapper>
    </div>
  );
}

