"use client";

import CommentC from "@/types/comment";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {findAllComment} from "@/app/_action/comment";
import {Skeleton} from "@mui/material";

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

  return (
    <>
      {loading ? <Skeleton variant="rectangular" height={200} animation={'wave'}/>
        :
        <div className="fs-6">
          {comments.map((comment) => (
            <div key={comment._id} className="border text-start p-3 mb-4">
              <p>@ {comment.name}</p>
              <hr/>
              <p>{comment.content}</p>
              <p className="text-end mb-0 text-body-tertiary">{comment.createdAt}</p>
            </div>
          ))}
          {/* TODO Pagination 추가 */}
        </div>
      }
    </>
  );
}

