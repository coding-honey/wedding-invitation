export default class AttendanceC {
  sectionCd: string = 'groom';
  name: string = '';
  telno: string = '';
  peopleCnt: number = 1;
  companionPeople: string = '';
  eatYn: string = '';
  createdAt?: string;
}

export const DEFAULT_ATTENDANCE = new AttendanceC();