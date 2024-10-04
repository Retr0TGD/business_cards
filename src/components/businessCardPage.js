import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessCardPage = ({ formData }) => {
    
    const navigate = useNavigate();

    if (!formData) {
        return (
            <div>
                <h2>No Data Provided</h2>
                <button onClick={() => navigate('/')}>Back to form</button>
            </div>
        );
    }

    return (
        <div style={{ border: '1px solid black', padding: '20px', maxWidth: '400px', margin: '20px auto' }}>
            <h2>Business Card</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Role:</strong> {formData.role}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Website:</strong> {formData.website}</p>
            <p><strong>Email:</strong> {formData.email}</p>
        </div>
    );
};

export default BusinessCardPage;
