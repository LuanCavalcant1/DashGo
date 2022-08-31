import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";




interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExacctHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExacctHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()

    let isActive = false;

    if (shouldMatchExacctHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true
    }

    if (!shouldMatchExacctHref &&
        (asPath.startsWith(String(rest.href)) ||
            asPath.startsWith(String(rest.as)))) { isActive = true }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'blue.500' : 'gray.50'
            })}
        </Link>
    )
}