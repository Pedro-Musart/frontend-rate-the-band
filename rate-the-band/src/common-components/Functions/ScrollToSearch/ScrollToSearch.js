import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSearch() {
    const currentURL = window.location.href;


if(currentURL.includes("details")) {


    window.location.href = "/"
    


} else{
    setTimeout(() =>{
        window.scrollTo(0, 750);
    },5000);

}


}


export default ScrollToSearch;