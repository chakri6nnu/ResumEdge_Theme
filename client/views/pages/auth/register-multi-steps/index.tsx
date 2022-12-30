// ** React Imports
// ** MUI Imports
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

// ** Styled Components
import StepperWrapper from './../../../../@core/styles/mui/stepper';
// ** Custom Component Import
import StepperCustomDot from './../../../../views/forms/form-wizard/StepperCustomDot';
import StepAccountDetails from './../../../../views/pages/auth/register-multi-steps/StepAccountDetails';
import StepBillingDetails from './../../../../views/pages/auth/register-multi-steps/StepBillingDetails';
// ** Step Components
import StepPersonalInfo from './../../../../views/pages/auth/register-multi-steps/StepPersonalInfo';

const steps = [
  {
    title: 'Account',
    subtitle: 'Account Details',
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information',
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details',
  },
];

const RegisterMultiSteps = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0);

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepAccountDetails handleNext={handleNext} />;
      case 1:
        return <StepPersonalInfo handleNext={handleNext} handlePrev={handlePrev} />;
      case 2:
        return <StepBillingDetails handlePrev={handlePrev} />;

      default:
        return null;
    }
  };

  const renderContent = () => {
    return getStepContent(activeStep);
  };

  return (
    <>
      <StepperWrapper sx={{ mb: 10 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className="step-label">
                    <Typography className="step-number">{`0${index + 1}`}</Typography>
                    <div>
                      <Typography className="step-title">{step.title}</Typography>
                      <Typography className="step-subtitle">{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </StepperWrapper>
      {renderContent()}
    </>
  );
};

export default RegisterMultiSteps;
