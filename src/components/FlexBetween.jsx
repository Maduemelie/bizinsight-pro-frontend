const { Box } = require("@mui/material");
const{styled} = require("@mui/system");


const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexWrap: 'wrap',

})

export default FlexBetween