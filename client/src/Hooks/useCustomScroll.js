import { useEffect } from "react";

const useScroll= (data) => {
  useEffect(() => {
      if(data){
        const scrollToTop = () => {
          window.scrollTo({ top: data, behavior: "smooth" });
        };
    
        scrollToTop();
    }else{  
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          };
      
          scrollToTop();
    }
  }, [data]);
};

export default useScroll;
