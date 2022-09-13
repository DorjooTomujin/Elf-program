import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import i18next from "i18next";
export default function Navbar({lng, setLng}) {
  const router = useRouter()
  const changeLng = () => {
    i18next.changeLanguage('mn', (err, t) => {
      if(err) return console.log(err)
      t('key')
    })
  }
    return (
        <div
            onClick={() => changeLng()}
              
            >
              <Button></Button>
            </div>
    )
}