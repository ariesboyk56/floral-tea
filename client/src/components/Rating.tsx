import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
interface IProps {
  type: string;
  number?: number
}
const BasicRating = (props: IProps) => {
  const { type, number } = props;
  const [value, setValue] = useState<number | null>(2);
  useEffect(()=>{
    number && setValue(number)
  },[number])
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {type === "controlled" && (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      )}
      {type === "readOnly" && (
        <Rating name="read-only" value={value} readOnly />
      )}
      {type === "disabled" && <Rating name="disabled" value={value} disabled />}
      {type === "null" && <Rating name="no-value" value={null} />}
    </Box>
  );
};
export default BasicRating;
