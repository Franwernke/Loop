import Link from "next/link";
import { ButtonRed } from "./styled";

function AdvertiseButton() {
  return (
    <Link href={'cadastro'}>
      <ButtonRed>Advertise</ButtonRed>
    </Link>
  )
}

export default AdvertiseButton;