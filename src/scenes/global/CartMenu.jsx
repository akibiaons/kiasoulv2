import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom"; 


// Not sure if ` was the correct character, it was on part 1:01:06 of the video.
const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    return (
        <Box // This box is the overlay 
            display={isCartOpen ? "block" : "none"}
            backgroundColor="rgba(0, 0, 0, 0.4)"
            position="fixed"
            zIndex={10}
            width="100%"
            height="100%"
            left="0"
            top="0"
            overflow="auto"
        >
            {/* This <Box> below is the MODAL for checking bag items */}
            <Box 
                position="fixed"
                right="0"
                bottom="0"
                width="max(400px, 30%)"
                height="100%"
                backgroundColor="white"
            >
                {/* This is the interior of the MODAL */}
                <Box padding="30px" overflow="auto" height="100%">
                    {/* This is the header section */}
                    <FlexBox mb="15px">
                        <Typography variannt="h3">SHOPPING BAG ({cart.length})</Typography>
                        <IconButton onClick={() => dispatch(setIsCartOpen({}))}>                    
                            <CloseIcon />
                        </IconButton>
                    </FlexBox>

                    {/* CART LIST */}
                    <Box>
                        {cart.map((item) => (
                            <Box key={`${item.attributes.name}-${item.id}`}> {/* Item attributes are properties given to us by Strapi*/}
                                <FlexBox p="15px 0">
                                    <Box flex="1 1 40%">
                                        <img
                                            alt={item?.name}
                                            width="123px"
                                            height="164px"
                                            src={`http://localhost:3000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                                        />
                                    </Box>
                                    <Box flex="1 1 60%">

                                        {/* ITEM NAME */}
                                        <FlexBox mb="5px">
                                            <Typography fontWeight="bold">
                                                {item.attributes.name}
                                            </Typography>
                                            <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                                                <CloseIcon />
                                            </IconButton>
                                        </FlexBox>
                                        <Typography>{item.attributes.shortDescription}</Typography>
                                        
                                        {/* AMOUNT */}
                                        <FlexBox m="15px 0">
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                border={`1.5px solid ${shades.neutral[500]} `}
                                            >
                                                <IconButton
                                                    onClick={() => dispatch(decreaseCount({ id: item.id }))}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography>{item.count}</Typography>
                                                <IconButton
                                                    onClick={() => dispatch(increaseCount({ id: item.id }))}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>  
                                        </FlexBox>
                                        <Divider />
                                    </Box>
                                    {/* PRICE */}
                                    <Typography fontWeight="bold">
                                        ${item.attributes.price}
                                    </Typography>
                                </FlexBox>
                            </Box>
                        ))}
                    </Box>

                    {/* ACTIONS: will represent the subtotal, price, and checkout */}
                    <Box m="20px 0">
                        <FlexBox m="20 0">
                            <Typography fontWeight="bold">SUBTOTOTAL</Typography>
                            <Typography fontWeight="bold">${totalPrice}</Typography>
                        </FlexBox>
                        <Button
                            sx={{
                                backgroundColor: shades.primary[400],
                                color: "white",
                                borderRadius: 0,
                                minWidth: '100%',
                                padding: "20px 40px",
                                m: "20px 0"
                            }}
                            onClick={() => {
                                navigate("/checkout");
                                dispatch(setIsCartOpen({}));
                            }}
                        >CHECKOUT</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CartMenu;