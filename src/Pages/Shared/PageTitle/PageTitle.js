import React from 'react';
import {Helmet} from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}-Car Service</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;