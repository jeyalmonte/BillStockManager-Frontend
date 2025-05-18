import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
export default function PublicLayout() {
  return (
    <Box
      display="flex"
      minHeight="100dvh"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor={"primary.main"}
    >
      <Outlet />
    </Box>
  );
}
