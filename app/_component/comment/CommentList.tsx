"use client";

import CommentC from "@/types/comment";
import {Dispatch, FormEvent, SetStateAction, useEffect, useState} from "react";
import {deleteComment, findAllComment} from "@/app/_action/comment";
import {Skeleton, TextField} from "@mui/material";
import ModalWrapper from "@/app/_component/ModalWrapper";
import {useAlert} from "@/app/_provider/AlertProvider";
import {comparePassword} from "@/lib/bcrypt";

export default function CommentList({comments, setComments}: {
  comments: CommentC[],
  setComments: Dispatch<SetStateAction<CommentC[]>>
}) {
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setComments((await findAllComment()) as CommentC[]);
      setLoading(false);
    })();
  }, []);

  const {openAlert} = useAlert();
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [commentId, setCommentId] = useState<string>('');
  const [hashedPassword, setHashedPassword] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (comment_id: string = '', hashedPassword: string) => {
    setIsModalOpen(true);
    setPasswordConfirm('');
    setCommentId(comment_id);
    setHashedPassword(hashedPassword);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordConfirm.trim() === '') {
      openAlert("비밀번호를 입력해주세요.", "warning");
    } else {
      const isMatch = await comparePassword(passwordConfirm, hashedPassword);
      if (isMatch) {
        try {
          /*
          Server Action 에 Class or null 은 전달할 수 없음.
          구조 분해 할당을 통해 객체 속성만 전달 // {...comment}
           */
          const result = await deleteComment(commentId);
          if (result.acknowledged && result.deletedCount > 0) {
            openAlert("삭제되었습니다.");
            setComments((await findAllComment()) as CommentC[]);
            closeModal();
          }
        } catch (e) {
          console.error(e);
          alert("댓글 삭제 중 오류가 발생했습니다.\n신랑에게 문의하세요.");
        }
      } else {
        openAlert("비밀번호가 일치하지 않습니다.", "error");
      }
    }
  }

  return (
    <>
      {loading ? <Skeleton variant="rectangular" height={200} animation={'wave'}/>
        :
        <div className="fs-6">
          {comments.map((comment) => (
            <div key={comment._id?.toString()} className="border text-start p-3 mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>@ {comment.name}</div>
                {comment?.password && comment?.password !== '' &&
                    <button className="btn-close"
                            onClick={() => openModal(comment._id?.toString(), comment.password)}/>}
              </div>
              <hr/>
              <div>{comment.content}</div>
              <div className="text-end mb-0 text-body-tertiary">{comment.createdAt}</div>
            </div>
          ))}
          {/* TODO Pagination 추가 */}
        </div>
      }
      <ModalWrapper isOpen={isModalOpen} onClose={closeModal} title={'댓글 삭제'}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            sx={{width: '90%'}}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            name="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            autoComplete="new-password"
          />
          <div className="row d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-danger w-75">삭제하기</button>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
}

