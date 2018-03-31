import React from 'react';
import './loading.less';

const Loading = ({isloading}) => (
    <div className="bouncing-loader" style={{display: isloading ? 'flex' : 'none'}}>
        <div>🐤</div>
        <div>🐤</div>
        <div>🐤</div>
    </div>
);

export default Loading;
