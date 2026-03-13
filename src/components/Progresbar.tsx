import { Box, Typography } from '@mui/material';

interface ProgressbarProps {
    progress: number;
}

function Progressbar({progress}: ProgressbarProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          bgcolor: "#CAF1D9",
          width: "100%",
          height: "4px",
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: 50,
            height: "100%",
            width: `${progress}%`,
            transition: "width ease-in-out .3s",
          }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary">
        {progress}%
      </Typography>
    </Box>
  );
}

export default Progressbar