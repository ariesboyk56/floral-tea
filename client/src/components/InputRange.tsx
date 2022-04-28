import styled from "@emotion/styled";
import { Box, Slider } from "@mui/material";
import { FC } from "react";
interface IProps {
  value?: number | number[];
  type?: string;
}
const InputRange: FC<IProps> = ({ value = 20, type }) => {
  const PrettoSlider = styled(Slider)({
    color: "#056552",
    height: 16,
    borderRadius: 0,
    pointerEvents:type && type === "onlyRead"? "none" : "inherit",
    cursor: type && type === "onlyRead"? "default" : "pointer",
    "& .MuiSlider-thumb": {
      display: "none",
    },
  });
  return (
    <Box sx={{ width: "100%" }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="default"
        defaultValue={value}
        // disabled
      />
    </Box>
  );
};

export default InputRange;
