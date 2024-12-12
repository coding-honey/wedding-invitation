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
      sx={{width: '100%'}}
      key={messageInfo?.keyl}
      open={isOpenSnackbar}
      onClose={handleCloseSnackbar}
      TransitionProps={{onExit: handleExitedSnackbar}}
      autoHideDuration={3000}
      anchorOrigin={{vertical: messageInfo?.vertical || 'bottom', horizontal: 'center'}}
      TransitionComponent={SlideTransition}
    >
      <Alert
        sx={{width: '100%', borderRadius: '0.375rem'}}
        onClose={handleCloseSnackbar}
        severity={messageInfo?.severity}
      >
        <span className="fs-6 w-100" style={{lineHeight: '22px'}}>
          {messageInfo?.message}
        </span>
      </Alert>
    </Snackbar>
  );

}

