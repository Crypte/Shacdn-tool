interface PlinkProps {
    children: React.ReactNode;
}

export const Plink = ({children}: PlinkProps) => {
    return (
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          {children}
        </a>
    )
}