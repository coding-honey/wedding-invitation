"use client";

import CommentC from "@/types/comment";
import {useEffect, useState} from "react";
import CommentForm from "@/app/_component/comment/CommentForm";
import CommentList from "@/app/_component/comment/CommentList";

export default function CommentWrapper() {
  const [comments, setComments] = useState<CommentC[]>([]);

  const [userAgent, setUserAgent] = useState('');
  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    setUserAgent(userAgent);
  }, [])

  return (
    <>
      <div className="section">
        <CommentForm setComments={setComments}/>
      </div>
      <div className="section">
        <CommentList comments={comments} setComments={setComments}/>
      </div>
      <div>{userAgent}</div>
    </>
  );
}

