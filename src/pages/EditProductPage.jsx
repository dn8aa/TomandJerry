import { Box } from '@mui/system';
import React from 'react';
import EditProduct from '../components/Products/EditProduct';

const EditProductPage = () => {
    return (
        <Box sx={{ m: {xs:3, sm:10}, mt: 10, display:'flex',justifyContent:'center' }}>
            <EditProduct />
        </Box>
    );
};

export default EditProductPage;