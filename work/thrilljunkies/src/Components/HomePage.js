import React from "react";
import SlideShow from "./SlideShow";

export default function HomePage({ destinations, SideBar }) {

    return(
        <>    
            <div className='container-fluid sidebarCard p-0 m-0 h-100'>
                <div className='row sidebarCard h-100 m-0 p-0'>
                    <div className='col-sm-5 col-md-4 col-lg-3 sidebarCard p-0'>
                        <SideBar />
                    </div>
                    <div className="col p-2">
                        <div className="container parkContainer border">
                            <SlideShow/>
                            <h3 className="p-5"> Welcome</h3>
                            <h6> You're in for a thrill! </h6> 
                        </div>
                    </div>   
                </div>
            </div>          
        </> 
    )
}
