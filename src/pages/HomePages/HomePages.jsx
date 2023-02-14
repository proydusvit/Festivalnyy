import React from "react";
import { Section,  TitleMain, Link} from "./Home";
import { ColorRing } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import { Loader } from "../../components/App.styled";

 
export default function HomePages() {
 const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

    return (
          <div>
            {
                loading ? <Loader><ColorRing
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}
                    }
                    wrapperClass="blocks-wrapper"
                    colors={['#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb']} /></Loader> :
        
                    <Section>
             
                        
                            <TitleMain>Фесточка - ваш успіх</TitleMain>
                            <Link to="/service">Переглянути</Link>
                   

                    </Section>
            }
            </div>
            
   
    )

}