import { Box } from '@mui/material';
import React from 'react';
import ProductList from '../components/Products/ProductList';

const ProductsPage = () => {
    return (
        <Box sx={{m:4,mt:10, }}>
            <ProductList/>
        </Box>
    );
};

export default ProductsPage;