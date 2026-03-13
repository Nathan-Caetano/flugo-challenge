import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
} from "@mui/lab";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface FormStepperProps {
  currentStep: number;
}

function FormStepper({ currentStep }: FormStepperProps) {
  return (
    <Timeline sx={{ p: 0, m: 0 }}>
      <TimelineItem
        sx={{
          "&::before": { display: "none" },
          height: currentStep === 1 ? 150 : 80,
          transition: "height ease-in-out .3s",
        }}
      >
        <TimelineSeparator>
          <TimelineDot
            sx={{
              bgcolor: "primary.main",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              m: 0,
            }}
          >
            {currentStep > 1 ? (
              <CheckIcon sx={{ fontSize: 18, color: "white" }} />
            ) : (
              <Typography variant="body2" fontWeight={500} color="white">
                1
              </Typography>
            )}
          </TimelineDot>
          <TimelineConnector
            sx={{
              bgcolor: currentStep === 1 ? "background.paper" : "#CAF1D9",
              mt: 1,
              mb: 1,
              transition: "all ease-in-out .3s",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ pt: "6px", pb: 0, px: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: currentStep === 1 ? 700 : 400,
              color: currentStep === 1 ? "text.primary" : "text.secondary",
              transition: "all ease-in-out .2s",
            }}
          >
            Infos Básicas
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem sx={{ "&::before": { display: "none" } }}>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              bgcolor: currentStep >= 2 ? "primary.main" : "#E0E0E0",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              m: 0,
              transition: "all ease-in-out .3s",
            }}
          >
            <Typography variant="body2" fontWeight={700} color="white">
              2
            </Typography>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ pt: "6px", pb: 0, px: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: currentStep === 2 ? 700 : 400,
              color: currentStep >= 2 ? "text.primary" : "text.secondary",
              transition: "all ease-in-out .2s",
            }}
          >
            Infos Profissionais
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default FormStepper;
