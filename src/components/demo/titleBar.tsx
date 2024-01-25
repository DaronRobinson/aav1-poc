import { Box, Typography } from "@mui/material";

const TitleBar = ({
  title,
  itemName,
}: {
  title: string;
  itemName: string | undefined;
}) => (
  <Box>
    <Typography
      sx={{
        fontSize: "50px",
        fontWeight: "600",
        paddingTop: "56px",
        paddingBottom: "32px",

        fontFamily: "Comic Sans MS",
      }}
    >
      {" "}
      {title}
      {itemName ? ": " : ""}
      {itemName ? (
        <Typography
          sx={{
            fontFamily: "Comic Sans MS",
            fontSize: "50px",
            fontWeight: "200",
            color: "#c06", //"#777",
            display: "inline",
          }}
        >
          {itemName}
        </Typography>
      ) : (
        ""
      )}
    </Typography>
  </Box>
);

export default TitleBar;
