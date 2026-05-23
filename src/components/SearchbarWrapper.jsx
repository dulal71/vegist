import { Suspense } from "react";
import Searchbar from "./Searchbar";


const SearchbarWrapper = () => {
    return (
        <Suspense fallback={null}>
          <Searchbar></Searchbar>  
        </Suspense>
    );
};

export default SearchbarWrapper;