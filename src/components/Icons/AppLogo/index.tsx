import React from 'react';

interface IProps {}

const IconLogo = React.memo((props: any) => (
    <svg width={142} height={28} viewBox="0 0 142 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M105.046 8.903a5.759 5.759 0 0 0-3.608.85v-.875h-2.727v13.526h2.727v-7.662a3.113 3.113 0 0 1 2.702-3.115 3.06 3.06 0 0 1 3.406 3.032v7.745h2.726v-7.627c0-3-2.237-5.596-5.226-5.874Zm-57.393 0a5.76 5.76 0 0 0-3.608.85v-.875h-2.726v13.526h2.726v-7.662a3.116 3.116 0 0 1 2.703-3.115 3.061 3.061 0 0 1 3.411 3.036v7.741h2.726v-7.627c0-3-2.241-5.596-5.232-5.874Z"
            fill="#000"
        />
        <path
            d="M60.756 19.665a4.191 4.191 0 1 1 3.952-5.555h2.824a6.918 6.918 0 1 0 0 2.726h-2.824a4.195 4.195 0 0 1-3.952 2.829Zm21.439-5.555a6.98 6.98 0 1 0-13.692 2.725 6.98 6.98 0 0 0 13.692-2.725Zm-6.776 5.555a4.182 4.182 0 1 1 4.192-4.192 4.206 4.206 0 0 1-4.192 4.192Zm-36.004 2.743V3.276h-2.726v19.132h2.726Zm75.495-13.53h-2.726v13.53h2.726V8.878Zm0-5.598h-2.726v2.726h2.726V3.28ZM94.08 8.878v1.34a6.762 6.762 0 1 0 0 10.843v.175a4.033 4.033 0 0 1-7.32 2.337l-1.947 1.947a6.759 6.759 0 0 0 11.991-4.284V8.878H94.08Zm-3.622 10.777a4.036 4.036 0 1 1-.826-8.03 4.036 4.036 0 0 1 .826 8.03Zm33.512-.004a3.103 3.103 0 0 1-2.555-3.088v-4.96h2.726V8.879h-2.726V3.28h-2.726v5.598h-2.827v2.726h2.827v4.959c0 3.178 2.6 5.841 5.778 5.851 1.405 0 2.4-.278 3.298-1.012a5.767 5.767 0 0 1-1.558-2.265 3.033 3.033 0 0 1-2.237.514Zm17.401-5.541a6.983 6.983 0 0 0-12.35-2.932 6.976 6.976 0 0 0-1.443 4.98 6.976 6.976 0 0 0 7.289 6.287 6.981 6.981 0 0 0 6.504-8.335Zm-6.784 5.555a4.18 4.18 0 0 1-3.857-2.587 4.183 4.183 0 1 1 8.049-1.605 4.21 4.21 0 0 1-4.192 4.192Z"
            fill="#000"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.102 24.02c6.03 0 10.919-4.888 10.919-10.918 0-6.03-4.889-10.918-10.919-10.918S2.184 7.072 2.184 13.102c0 6.03 4.888 10.919 10.918 10.919Zm0 2.184c7.236 0 13.102-5.866 13.102-13.102C26.204 5.866 20.338 0 13.102 0 5.866 0 0 5.866 0 13.102c0 7.236 5.866 13.102 13.102 13.102Z"
            fill="#000"
        />
    </svg>
));

const AppLogo = React.memo((props: IProps) => {
    return (
        <div className="app-logo">
            <IconLogo {...props} />
        </div>
    );
});

export default AppLogo;
