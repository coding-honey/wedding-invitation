"use client";

import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ArrowDropDownIcon} from "@mui/x-date-pickers";
import {Box} from "@mui/system";
import Image from "next/image";
import kPayIcon from "@/public/Image/payment_icon_yellow_small.png";
import CopyButton from "@/app/_component/CopyButton";

export interface AccountProps {
  title: string;
  kPayLink?: string;
}

interface BankAccordionProps {
  title: string;
  accounts: AccountProps[];
  isOpenSnackbar: boolean;
}

export default function BankAccordion({title, accounts, isOpenSnackbar}: BankAccordionProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Accordion sx={{width: '100%'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{color: "white"}}/>}
          sx={{
            backgroundColor: "#212529",
            color: "white",
            borderRadius: "0.375rem",
            '& .MuiAccordionSummary-content': {
              justifyContent: 'center',
            },
          }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails sx={{borderTop: "1px solid white"}}>
          {accounts.map((account, index) => (
            <div key={index} className="row align-items-center">
              <div className="col-8 text-start">{account.title}</div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                {account.kPayLink !== undefined &&
                    <a href={account.kPayLink} className="me-3">
                        <Image src={kPayIcon}
                               alt={'카카오페이 송금'}
                               height={21}
                        />
                    </a>
                }
                <CopyButton text={account.title} isOpenSnackbar={isOpenSnackbar}/>
              </div>
              {accounts.length - 1 !== index && (
                <hr className="my-2"/>
              )}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );

}

