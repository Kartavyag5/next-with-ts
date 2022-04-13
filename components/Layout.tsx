import React from "react";

const Layout = ({ children }: {children: React.ReactNode}) =>{
    return(
        <>
            <nav>
                <li>Home</li>
            </nav>
            {children}
        </>
    )
}

export default Layout;