"use client";

import Slide, {SlideProps} from '@mui/material/Slide';
import {Alert, Snackbar} from "@mui/material";
import {useSnackbar} from "@/app/_provider/SnackbarProvider";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up"/>;
}

export default function SnackbarGlobal() {
  const {messageInfo, isOpenSnackbar, handleCloseSnackbar, handleExitedSnackbar} = useSnackbar();

  // Modal을 body에 렌더링
  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : null}
      open={isOpenSnackbar}
      onClose={handleCloseSnackbar}
      TransitionProps={{onExit: handleExitedSnackbar}}
      autoHideDuration={3000}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      TransitionComponent={SlideTransition}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={messageInfo ? messageInfo.severity : null}
      >
        <span className="fs-6" style={{lineHeight: '22px'}}>
          {messageInfo ? messageInfo.message : null}
        </span>
      </Alert>
    </Snackbar>
  );

}

