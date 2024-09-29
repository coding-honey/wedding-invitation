

export default class AttendanceC {
  sectionCd: string = 'groom';
  name: string = '';
  peopleCnt: number = 1;
  companionPeople: string = '';
  eatYn: string = '';
}

export const DEFAULT_ATTENDANCE = new AttendanceC();