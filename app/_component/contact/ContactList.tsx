"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faPhone} from "@fortawesome/free-solid-svg-icons";

export interface ContactProps {
  type: string;
  name: string;
  number: string;
}

export default function ContactList({contacts}: { contacts: ContactProps[] }) {
  return (
    <>
      {contacts.map((contact, index) => {
        return (
          <div key={index} className={'row align-items-center ' + (contacts.length - 1 !== index ? 'mb-1' : 'mb-0')}>
            <div className="col-5 text-end">{contact.type}</div>
            <div className="col-3">{contact.name}</div>
            <div className="col-4 d-flex justify-content-start align-items-center">
              <a className="tel me-4" href={'tel:' + contact.number}>
                <FontAwesomeIcon icon={faPhone} size={'lg'}/>
              </a>
              <a className="sms" href={'sms:' + contact.number}>
                <FontAwesomeIcon icon={faMessage} size={'lg'}/>
              </a>
            </div>
          </div>
        )
      })}
    </>
  );
}

