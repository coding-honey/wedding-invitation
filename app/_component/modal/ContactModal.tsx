"use client";

import {useState} from "react";
import ModalWrapper from "@/app/_component/modal/ModalWrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faPhone} from "@fortawesome/free-solid-svg-icons";

export default function ContactModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button type="button" className="btn btn-lg btn-dark w-75 mt-4" onClick={openModal}>혼주에게 연락하기</button>

      <ModalWrapper isOpen={isModalOpen} onClose={closeModal} title={'혼주에게 연락하기'}>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신랑</div>
          <div className="col-3">정동헌</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel me-4" href="tel:01076715530">
              <FontAwesomeIcon icon={faPhone} size={'lg'}/>
            </a>
            <a className="sms" href="sms:01076715530">
              <FontAwesomeIcon icon={faMessage} size={'lg'}/>
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신랑 아버지</div>
          <div className="col-3">정석순</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel me-4" href="tel:01056875530">
              <FontAwesomeIcon icon={faPhone} size={'lg'}/>
            </a>
            <a className="sms" href="sms:01056875530">
              <FontAwesomeIcon icon={faMessage} size={'lg'}/>
            </a>
          </div>
        </div>
        <div className="row mb-0 align-items-center">
          <div className="col-5 text-end">신랑 어머니</div>
          <div className="col-3">김형순</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel me-4" href="tel:01036875530">
              <FontAwesomeIcon icon={faPhone} size={'lg'}/>
            </a>
            <a className="sms" href="sms:01036875530">
              <FontAwesomeIcon icon={faMessage} size={'lg'}/>
            </a>
          </div>
        </div>
        <hr className="mx-5"/>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신부</div>
          <div className="col-3">박선영</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel me-4" href="tel:01067190509">
              <FontAwesomeIcon icon={faPhone} size={'lg'}/>
            </a>
            <a className="sms" href="sms:01067190509">
              <FontAwesomeIcon icon={faMessage} size={'lg'}/>
            </a>
          </div>
        </div>
        <div className="row mb-1 align-items-center">
          <div className="col-5 text-end">신부 어머니</div>
          <div className="col-3">김남희</div>
          <div className="col-4 d-flex justify-content-start align-items-center">
            <a className="tel me-4" href="tel:01088585598">
              <FontAwesomeIcon icon={faPhone} size={'lg'}/>
            </a>
            <a className="sms" href="sms:01088585598">
              <FontAwesomeIcon icon={faMessage} size={'lg'}/>
            </a>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
}

