"use client";

import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useState} from "react";
import {createAttendance} from "@/app/_action/attendance";
import AttendanceC, {DEFAULT_ATTENDANCE} from "@/types/attendance";

export default function AttendanceModal() {
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
    const result = await createAttendance(attendance);
    if (result.acknowledged) {

    }
  }

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3 text-end">
            <FormLabel id="sectionCd" className="text-end">구분</FormLabel>
          </div>
          <div className="col-8">
            <div className="btn-group w-100" role="group" aria-label="sectionCd"
                 onChange={handleChange}>
              <input type="radio" className="btn-check" name="sectionCd" id="sectionCdBtn1" autoComplete="off" value="Y"
                     defaultChecked={attendance.sectionCd == "groom"}/>
              <label className="btn btn-outline-secondary" htmlFor="sectionCdBtn1">신랑측</label>

              <input type="radio" className="btn-check" name="sectionCd" id="sectionCdBtn2" autoComplete="off" value="N"
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
          <button type="submit" className="btn btn-lg btn-dark w-50 fs-4">전달하기
          </button>
        </div>
      </form>
    </div>
  );
}

