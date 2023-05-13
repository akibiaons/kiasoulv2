import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const  { palette: {neutral} } = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography                     
                        variant="h4" 
                        fontWeight="bold" 
                        mb="30px" 
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </Box>
                   
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conoditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>        
            </Box>   
        </Box>
    )
};

export default Footer;