import bcrypt from "bcryptjs";

// 비밀번호를 해시하는 함수
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10); // 솔트 생성
    return await bcrypt.hash(password, salt); // 비밀번호 해싱
  } catch (error) {
    console.error('Error hashing password:', error);
    return "";
  }
};

// 비밀번호 비교 함수
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hashedPassword); // 입력된 비밀번호와 해싱된 비밀번호 비교
  } catch (error) {
    console.error('Error comparing password:', error);
    return false;
  }
};
