import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BackButtonProps {
    text: string,
    link: string

}

const BackButton = ({ text, link }: BackButtonProps) => {
    return (
        <Link href={link} className='flex gap-2 items-center text-gray-600 hover:underline font-bold mb-5'>
            <ArrowLeftCircle size={18} /> {text}
        </Link>
    )
}

export default BackButton