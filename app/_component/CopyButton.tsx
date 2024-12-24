"use client";

import {CopyToClipboard} from "react-copy-to-clipboard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import {useSnackbar} from "@/app/_provider/SnackbarProvider";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {CSSProperties} from "react";

interface CopyButtonProps {
  text: string;
  isOpenSnackbar?: boolean;
  iconSize?: SizeProp;
  style?: CSSProperties;
}

export default function CopyButton({text, isOpenSnackbar = true, iconSize = 'xl', style = undefined}: CopyButtonProps) {
  const {handleOpenSnackbar} = useSnackbar();

  return (
    <div style={{...style, cursor: 'pointer'}}>
      <CopyToClipboard text={text} onCopy={() => {
        if (isOpenSnackbar) {
          handleOpenSnackbar('복사되었습니다.')
        }
      }}>
        <FontAwesomeIcon icon={faCopy} size={iconSize}/>
      </CopyToClipboard>
    </div>
  );
}
