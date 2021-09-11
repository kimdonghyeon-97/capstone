import React from 'react';

const Text = ({ tag: Tag = 'span', className, children }) => {
     return <Tag className={className}>{children}</Tag>;
    };
    
export default Text;

