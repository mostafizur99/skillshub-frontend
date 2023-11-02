import Image from "next/image";
import Link from "next/link";

const SiteLogo = () => {
  return (
    <Link href={"/"}>
      <div>
        <Image width={140} height={44} src={"/logo.png"} alt="Logo" priority />
      </div>
    </Link>
  );
};

export default SiteLogo;
