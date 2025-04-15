import { Button } from '@mui/material'

interface ButtonPrimaryProps {
    href: string;
    content: string;
}

export default function ButtonPrimary({ href, content }: ButtonPrimaryProps) {
    return (
        <Button variant="contained" color="primary" sx={{ backgroundColor: 'var(--primary-color)', borderRadius: '40px', p: 2, width: 200, height: 60 }} href={href}>
            {content}
        </Button>
    )
}
