"use client";

import {TextField} from "@mui/material";
import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";
import CommentC from "@/types/comment";
import {createComment, findAllComment} from "@/app/_action/comment";
import {useSnackbar} from "@/app/_provider/SnackbarProvider";

export default function CommentForm({setComments}: {
  setComments: Dispatch<SetStateAction<CommentC[]>>
}) {
  const {handleOpenSnackbar} = useSnackbar();
  const [comment, setComment] = useState<CommentC>(new CommentC());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value?.trim()
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.name.trim() === '') {
      handleOpenSnackbar("성함은 반드시 입력해주세요.", "warning");
      return;
    } else if (comment.content.trim() === '') {
      handleOpenSnackbar("내용은 반드시 입력해주세요.", "warning");
      return;
    }

    let confirmMsg = '등록하시겠습니까?';
    if (comment.password.trim() === '') {
      confirmMsg = '비밀번호가 없으면 삭제할 수 없습니다.\n' + confirmMsg;
    }

    try {
      if (confirm(confirmMsg)) {
        /*
        Server Action 에 Class or null 은 전달할 수 없음.
        구조 분해 할당을 통해 객체 속성만 전달 // {...comment}
         */
        const result = await createComment({...comment});
        if (result.acknowledged) {
          handleOpenSnackbar("댓글이 등록되었습니다.");
          setComment(new CommentC());
          setComments((await findAllComment()) as CommentC[]);
        } else {
          alert("댓글 등록 중 오류가 발생했습니다.\n신랑에게 문의하세요.");
        }
      }
    } catch (e) {
      console.error(e);
      alert("댓글 등록 중 오류가 발생했습니다.\n신랑에게 문의하세요.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="fs-3 fw-bold">댓글 남기기</p>
      <p>
        축하하는 마음을 남겨주세요.
      </p>
      <div className="d-flex justify-content-between mb-3">
        <TextField
          variant="outlined"
          sx={{width: '48%'}}
          label={<>성함<sup className="text-danger">*</sup></>}
          placeholder="성함을 입력해주세요."
          name="name"
          value={comment.name}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          sx={{width: '48%'}}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          value={comment.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
      </div>
      <TextField
        variant="outlined"
        sx={{width: '100%', mb: '1rem'}}
        multiline
        rows={3}
        label={<>내용<sup className="text-danger">*</sup></>}
        placeholder="내용을 입력해주세요."
        name="content"
        value={comment.content}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-end align-items-center">
        <button type="submit" className="btn btn-dark">등록하기</button>
      </div>
    </form>
  );
}

