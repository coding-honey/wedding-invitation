"use client";

import BankAccordion, {AccountProps} from "@/app/_component/accordion/BankAccordion";

export default function BankAccordionWrapper() {
  const groomAccounts: AccountProps[] = [
    {title: '기업 07210340701013 정동헌', kPayLink: 'https://link.kakaopay.com/_/fuWEOCD'},
    {title: '농협 17043552167686 정석순'},
    {title: '신한 110-345-854748 김형순'},
  ];

  const brideAccounts: AccountProps[] = [
    {title: '신한 110-510-068990 박선영', kPayLink: 'https://link.kakaopay.com/_/ovlpux3'},
    {title: '우리 1002946-257498 김남희'},
  ];

  return (
    <>
      <BankAccordion title="신랑측 계좌번호" accounts={groomAccounts}/>
      <div className="my-4"/>
      <BankAccordion title="신부측 계좌번호" accounts={brideAccounts}/>
    </>
  );

}

