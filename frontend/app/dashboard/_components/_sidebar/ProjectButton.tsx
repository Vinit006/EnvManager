import Link from 'next/link'
import React from 'react'

type Props = {
     name: string,
     href: string,
     clx?: string
}

export default function ProjectButton({ name, href, clx }: Props) {
     return (
          <Link href={href} className={`underline underline-offset-2 hover:text-blue-600 ${clx}`}>
               {name}
          </Link>
     )
}