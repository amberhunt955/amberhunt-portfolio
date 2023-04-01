import { Button } from "@mui/material";
import resume from "../assets/AmberHuntResume.pdf"

function ResumeButton() {
    return <Button className="mui-button" variant="contained" sx={{background: "#080B13ff", color: "#DBEBFBff"}} disableElevation href={resume} download={resume}>Download My Resume</Button>
}

export default ResumeButton;