import { Box } from '@mui/system';
import React from 'react';
import EditProduct from '../components/Products/EditProduct';

const EditProductPage = () => {
    return (
        <Box sx={{ m: 10, mt: 10 }}>
            <EditProduct />
        </Box>
    );
};

export default EditProductPage;