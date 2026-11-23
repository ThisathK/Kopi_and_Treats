import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** Router <Link> for internal paths ("/…"), plain <a> for everything else. External http(s) links open in a new tab. */
export function SmartLink({ href, ...rest }: Props) {
  if (href.startsWith('/')) return <Link to={href} {...rest} />
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    />
  )
}
