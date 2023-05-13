import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const isNonMobile = useMediaQuery("(min-width:600px");
    console.log("items", items);

    const handleChange = () => {
        setValue(newValue);
    };

    async function getItems() { // This function will grab out backend info from strapi 
        const items = await fetch (
            "http://localhost:1337/api/items?populate=image",
            { method: "GET"}
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));
    }
    useEffect(() => {
        getItems();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
};

export default ShoppingList;