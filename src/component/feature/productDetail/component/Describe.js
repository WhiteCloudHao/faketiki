import { Paper } from "@material-ui/core";
import DOMPurify from "dompurify";

function Describe({data}) {
    const safeDescribe = DOMPurify.sanitize(data.description);

    return (
       <Paper elevation={0} style = {{padding: '8px 16px'}}>
           <div dangerouslySetInnerHTML={{__html: safeDescribe}} />
       </Paper>
    );
}

export default Describe;