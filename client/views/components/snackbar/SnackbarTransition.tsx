// ** React Imports
// ** MUI Imports
import Button from '@mui/material/Button';
import Fade, { FadeProps } from '@mui/material/Fade';
import Grow, { GrowProps } from '@mui/material/Grow';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { ComponentType, Fragment, ReactElement, useState } from 'react';

const GrowTransition = (props: GrowProps) => {
  return <Grow {...props} />;
};

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};

const SnackbarTransition = () => {
  // ** State
  const [state, setState] = useState<{
    open: boolean;
    Transition: ComponentType<
      FadeProps & {
        children?: ReactElement<any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: ComponentType<
        FadeProps & {
          children?: ReactElement<any>;
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Fragment>
      <div className="demo-space-x">
        <Button variant="outlined" onClick={handleClick(GrowTransition)}>
          Grow Transition
        </Button>
        <Button variant="outlined" onClick={handleClick(Fade)}>
          Fade Transition
        </Button>
        <Button variant="outlined" onClick={handleClick(SlideTransition)}>
          Slide Transition
        </Button>
      </div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        message="I love snacks"
        autoHideDuration={3000}
        key={state.Transition.name}
        TransitionComponent={state.Transition}
      />
    </Fragment>
  );
};

export default SnackbarTransition;
