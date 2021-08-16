import Link from 'next/link';

const Button = ({ url, background, textColor, margin, title, hoverBg}) => {
    return (
        <Link href={url}>
            <button className={`rounded-xl ${background} ${textColor} px-10 py-3.5 ${margin} shadow-sm flex-1 filter drop-shadow-md transition duration-500 ${hoverBg}`}>{title}</button>
        </Link>

    );
}

export default Button;