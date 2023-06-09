import { Typography } from "@mui/material";

export default function Header({title}) {
    return (
        <Typography
            variant="h4"
            fontWeight="400"
            borderBottom={1}
            borderColor="lightgray"
            lineHeight={2}
        >
            {title}
        </Typography>
    )
}