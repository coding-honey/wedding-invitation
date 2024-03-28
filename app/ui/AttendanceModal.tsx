'use client';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";

export default function AttendanceModal() {
  const [sectionCd, setSectionCd] = useState("groom")
  const handleSectionCdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionCd((event.target as HTMLInputElement).value);
  };

  const [eatYn, setEatYn] = useState("Y")
  const handleEatYnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEatYn((event.target as HTMLInputElement).value);
  };

  return (
    <div className="fs-5">
      <form>
        <div className="row">
          <FormLabel id="section-cd-group-label"
                     className="col-4 text-end">구분</FormLabel>
          <RadioGroup
            className="col-5 col-lg-3 col-md-4 col-sm-5 justify-content-between"
            row
            aria-labelledby="section-cd-group-label"
            defaultValue="groom"
            name="section-cd"
            value={sectionCd}
            onChange={handleSectionCdChange}
          >
            <FormControlLabel value="groom" control={<Radio/>} label="신랑측"/>
            <FormControlLabel value="bride" control={<Radio/>} label="신부측"/>
          </RadioGroup>
        </div>
        <div className="row">
          <div className="col-4 text-end">
            <FormLabel className="text-end">성함</FormLabel>
          </div>
          <div className="col-5 col-lg-3 col-md-4 col-sm-5">
            <input type="text" name="name" className="form-control"/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-end">
            <FormLabel className="text-end">참석인원</FormLabel>
          </div>
          <div className="col-5 col-lg-3 col-md-4 col-sm-5">
            <input type="text" name="people-cnt" className="form-control"/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-end">
            <FormLabel className="text-end">동행인</FormLabel>
          </div>
          <div className="col-5 col-lg-3 col-md-4 col-sm-5">
            <input type="text" name="come-with-people" className="form-control"/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-end">
            <FormLabel id="eat-yn-label" className="text-end">식사여부</FormLabel>
          </div>
          <div className="col-5 col-lg-3 col-md-4 col-sm-5">
            <div className="btn-group w-100" role="group" aria-label="eat-yn-label" onChange={handleEatYnChange}>
              <input type="radio" className="btn-check" name="eat-yn" id="btnradio1" autoComplete="off" value="Y" defaultChecked={true} />
              <label className="btn btn-outline-secondary" htmlFor="btnradio1">예정</label>

              <input type="radio" className="btn-check" name="eat-yn" id="btnradio2" autoComplete="off" value="N"/>
              <label className="btn btn-outline-secondary" htmlFor="btnradio2">안함</label>

              <input type="radio" className="btn-check" name="eat-yn" id="btnradio3" autoComplete="off" value=""/>
              <label className="btn btn-outline-secondary" htmlFor="btnradio3">미정</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <button type="button" className="btn btn-lg btn-dark w-75 fs-4">전달하기</button>
        </div>
      </form>
    </div>
);
}