import Link from "next/link";
import { BlackButton } from "./styled";

function AdvertiseButton() {
  return (
    <Link href={'localidades'}>
      <BlackButton>Acessar Localizações</BlackButton>
    </Link>
  )
}

export default AdvertiseButton;