import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Navbar({lng, setLng}) {
  const router = useRouter()
    
    return (
        <div
              onClick={() => {

                lng == 'mn' ? router.replace(router.pathname, router.pathname, {
                  locale: 'en',
                }) : router.replace(router.pathname, router.pathname, {
                  locale: 'mn',
                })
              }}
              
            >
              <p>{lng == '' ? 'mn' : 'en'}</p>
            </div>
    )
}