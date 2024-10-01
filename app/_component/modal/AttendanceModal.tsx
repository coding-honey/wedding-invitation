"use client";

import {FormLabel} from "@mui/material";
import {ChangeEvent, FormEvent, useState} from "react";
import {createAttendance} from "@/app/_action/attendance";
import AttendanceC, {DEFAULT_ATTENDANCE} from "@/types/attendance";
import ModalWrapper from "@/app/_component/modal/ModalWrapper";

export default function AttendanceModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [attendance, setAttendance] = useState<AttendanceC>(new AttendanceC());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'peopleCnt') {
      let peopleCnt = Number(e.target.value || DEFAULT_ATTENDANCE.peopleCnt);

      setAttendance({
        ...attendance,
        peopleCnt: isNaN(peopleCnt) ? DEFAULT_ATTENDANCE.peopleCnt : peopleCnt,
      })
    } else {
      setAttendance({
        ...attendance,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      /*
      Server Action 에 Class or null 은 전달할 수 없음.
      구조 분해 할당을 통해 객체 속성만 전달 // {...attendance}
       */
      const result = await createAttendance({...attendance});
      if (result.acknowledged) {
        alert("저장되었습니다.");
        setAttendance(new AttendanceC());
        closeModal();
      } else {
        alert("참석 의사 전달 중 오류가 발생했습니다.\n신랑에게 문의하세요.");
      }
    } catch (e) {
      console.error(e);
      alert("참석 의사 전달 중 오류가 발생했습니다.\n신랑에게 문의하세요.");
    }
  }

  return (
    <div>
      <button type="button" className="btn btn-lg btn-dark w-75" onClick={openModal}>참석 의사 전달하기</button>

      <ModalWrapper isOpen={isModalOpen} onClose={closeModal} title={'참석 의사 전달'}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3 text-end">
              <FormLabel id="sectionCd" className="text-end">구분</FormLabel>
            </div>
            <div className="col-8">
              <div className="btn-group w-100" role="group" aria-label="sectionCd"
                   onChange={handleChange}>
                <input type="radio" className="btn-check" name="sectionCd" id="sectionCdBtn1" autoComplete="off"
                       value="groom"
                       defaultChecked={attendance.sectionCd == "groom"}/>
                <label className="btn btn-outline-secondary" htmlFor="sectionCdBtn1">신랑측</label>

                <input type="radio" className="btn-check" name="sectionCd" id="sectionCdBtn2" autoComplete="off"
                       value="bride"
                       defaultChecked={attendance.sectionCd == "bride"}/>
                <label className="btn btn-outline-secondary" htmlFor="sectionCdBtn2">신부측</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <FormLabel className="text-end">성함</FormLabel>
            </div>
            <div className="col-8">
              <input type="text" name="name" className="form-control"
                     value={attendance.name} onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <FormLabel className="text-end" htmlFor="peopleCnt">인원수</FormLabel>
            </div>
            <div className="col-8">
              <input type="text" name="peopleCnt" className="form-control"
                     value={attendance.peopleCnt} onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <FormLabel className="text-end" htmlFor="companionPeople">동행인</FormLabel>
            </div>
            <div className="col-8">
              <input type="text" name="companionPeople" className="form-control"
                     value={attendance.companionPeople} onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <FormLabel id="eatYnLabel" className="text-end">식사여부</FormLabel>
            </div>
            <div className="col-8">
              <div className="btn-group w-100" role="group" aria-label="eatYnLabel"
                   onChange={handleChange}>
                <input type="radio" className="btn-check" name="eatYn" id="eatYnBtn1" autoComplete="off" value=""
                       defaultChecked={attendance.eatYn == ""}/>
                <label className="btn btn-outline-secondary" htmlFor="eatYnBtn1">미정</label>

                <input type="radio" className="btn-check" name="eatYn" id="eatYnBtn2" autoComplete="off" value="Y"
                       defaultChecked={attendance.eatYn == "Y"}/>
                <label className="btn btn-outline-secondary" htmlFor="eatYnBtn2">예정</label>

                <input type="radio" className="btn-check" name="eatYn" id="eatYnBtn3" autoComplete="off" value="N"
                       defaultChecked={attendance.eatYn == "N"}/>
                <label className="btn btn-outline-secondary" htmlFor="eatYnBtn3">안함</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <button type="submit" className="btn btn-lg w-75 fs-4 text-white" style={{backgroundColor: '#1D327D'}}>
              참석 의사 전달하기
            </button>
          </div>
        </form>
      </ModalWrapper>
    </div>
  );
}

