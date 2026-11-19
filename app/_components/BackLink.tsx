import Link from "next/link";

import "@/styles/_components/BackLink.css"

type BackLinkProps = {
  href: string;
}

export default function BackLink({href}: BackLinkProps) {
  return (
    <Link href={href} className="back-link">
      <i className="pi pi-angle-left"></i>

      Retour
    </Link>
  );
}