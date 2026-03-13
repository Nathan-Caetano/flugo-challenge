import { Box, Avatar } from "@mui/material";

function Topbar() {
  return (

    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mb: 5,
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "linear-gradient(90deg, #c2ff11, #34FFB8)",
          padding: "4px",
          transition: "all ease-in-out .2s",
          cursor: "pointer",

          "&:hover": {
            scale: 1.1,
            transition: "all ease-in-out .1s",
          },

          "&:active": {
            scale: 0.9,
          },
        }}
      >
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=default"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
          }}
        />
        {/*Avatar exemplo*/}
      </Box>
    </Box>
  );
}

export default Topbar;