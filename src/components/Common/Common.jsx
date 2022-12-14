import './Common.scss'

export const IconContainer = ({name}) => {
    return (
        <>
            { name === 'Facebook' && <FacebookLogo /> }
            { name === 'Instagram' && <InstagramLogo /> }
            { name === 'Twitter' && <TwitterLogo/> }
            { name === 'Youtube' && <YoutubeLogo/> }
            { name === 'TikTok' && <TikTokLogo/> }                    
        </>
    )
}
export const MainLogo = () => {

    return (
        <svg className='Logo-main' xmlns='http://www.w3.org/2000/svg' fill='#fff' fillRule='evenodd' viewBox='0 0 17.4 20'><path d='M8.7 6.1A1.2 1.2 0 119.9 5a1.2 1.2 0 01-1.2 1.1zM11.2 5a3.1 3.1 0 00-2.5-1.4A3.1 3.1 0 006.1 5a4 4 0 002.6 1.3A4 4 0 0011.2 5z'/><path d='M8.4 4.3a.4.4 0 000 .8.4.4 0 000-.8'/><path d='M.6 9.3a4.7 4.7 0 00.6.8v.1a7.5 7.5 0 1015 0 5.2 5.2 0 00.6-.9 9 9 0 010 1.3c0 6.4-8.1 9-8.1 9s-8.2-2.4-8.2-9a9 9 0 01.1-1.3zm6.2-2.2c1.3.9 1.7 2 1.7 4.3 0 5-2 5.5-2 5.5s-3.2-1-3.2-3.2c0-1.4 1.9-1.8 1.9-1.8s-8.7-2.4-2.7-8.7c.1 1.5 2.9 3 4.3 4zm6.8-2.6a7.4 7.4 0 00-9.8 0 5.8 5.8 0 01-.5-.5A3 3 0 004 2.3a2.3 2.3 0 002 .1h.1a5.3 5.3 0 002.6-2 5.2 5.2 0 002.5 2h.2a2.3 2.3 0 002 0 3 3 0 00.7 1.6 4.5 4.5 0 01-.5.5zm-5 4a3.6 3.6 0 00-1.6-2C5.7 5.4 5.5 5 5.5 5a3.5 3.5 0 013.2-1.9A3.5 3.5 0 0111.9 5s-.2.6-1.5 1.5a3.6 3.6 0 00-1.7 2zm5.5 5.1c0 2.3-3.3 3.3-3.3 3.3S9 16.3 9 11.4C9 9.1 9.3 8 10.6 7s4.2-2.5 4.3-4c6 6.3-2.7 8.8-2.7 8.8s2 .4 2 1.7zm3.2-5.4c.4-1.6-.3-3.4-2.1-5.3a.4.4 0 00-.3-.1.3.3 0 00-.1 0 .4.4 0 00-.3.3 1.3 1.3 0 01-.2.6 2.4 2.4 0 01-.5-1.4.4.4 0 00-.2-.3.3.3 0 00-.2 0 .5.5 0 00-.2 0 1.2 1.2 0 01-.7.2 3.1 3.1 0 01-1-.1l-.2-.1A4.9 4.9 0 019 .2a.4.4 0 00-.6 0A4.9 4.9 0 016 2a3.4 3.4 0 01-1 .2 1.2 1.2 0 01-.8-.2.5.5 0 00-.2 0 .5.5 0 00-.2 0 .4.4 0 00-.2.3 2.4 2.4 0 01-.5 1.3 1.2 1.2 0 01-.2-.5.4.4 0 00-.2-.3.3.3 0 00-.2 0 .4.4 0 00-.2 0C.3 4.9-.3 6.7 0 8.3a3.8 3.8 0 00.3.8.4.4 0 00-.2.3 10 10 0 000 1.3c0 2.9 1.4 5.4 4.2 7.3a16.4 16.4 0 004.3 2h.2a16.9 16.9 0 004.2-2.2c2.8-2 4.3-4.4 4.3-7.2a10 10 0 00-.1-1.3.4.4 0 00-.2-.3 3.8 3.8 0 00.3-.8z'/></svg>
    )
}



export const ChevronRight = () => {
    return (
        <svg className='Logo-chevron Chevron-right' width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3_2)">
            <path d="M6.28883 4.96183L1.77112 9.64006L0.620178 8.5286L4.02643 5.00133L0.669506 1.75959L1.78096 0.608643L6.28883 4.96183Z"/>
            </g>
            <defs>
            <clipPath id="clip0_3_2">
            <rect width="7" height="10" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export const ChevronDown = ( ) => {
    return (
        <svg className='Logo-chevron Chevron-down' xmlns='http://www.w3.org/2000/svg' viewBox='666 518 11 11'>
            <path fillRule='evenodd' d='M671.75 525.76l3.28-3.28.57-.57 1.13 1.13-.56.57-3.85 3.85-.57.56-.28-.28-.29-.28-3.85-3.86-.56-.56 1.13-1.13.56.56 3.29 3.29z'/>
        </svg>
    )
}




const FacebookLogo = () => {
    return (
        <svg className='Logo-social' xmlns='http://www.w3.org/2000/svg' viewBox='54 0 12 24'><path d='M65.4 7.7h-3.7V5.3c0-1 .6-1.2 1.1-1.2h2.6v-4L61.8 0c-4.1 0-5 3.1-5 5v2.7h-2.3v4.2h2.3v11.8h4.9V11.9H65l.4-4.2z'/></svg>
    )
}


const InstagramLogo = () => {
    return (
        <svg className='Logo-social' xmlns='http://www.w3.org/2000/svg' viewBox='27 0 24 24'><g transform='translate(27)'><path d='M11.83 5.98a6.03 6.03 0 000 12.04 6.03 6.03 0 000-12.04zm0 9.88c-2.11 0-3.85-1.74-3.85-3.86s1.74-3.86 3.85-3.86c2.11 0 3.85 1.74 3.85 3.86s-1.74 3.86-3.85 3.86z'/><circle cx='18.07' cy='5.83' r='1.36'/><path d='M21.6 2.3A6.68 6.68 0 0016.65.39H7C2.91.38.2 3.1.2 7.2v9.65c0 2.02.65 3.76 1.97 5.03a6.85 6.85 0 004.88 1.84h9.58c2.02 0 3.7-.66 4.93-1.84a6.75 6.75 0 001.92-4.99V7.2c0-1.98-.65-3.67-1.87-4.9zm-.29 14.6c0 1.45-.42 2.63-1.26 3.43a4.85 4.85 0 01-3.43 1.22H7.04c-1.4 0-2.58-.42-3.43-1.22a4.74 4.74 0 01-1.26-3.49V7.2A4.7 4.7 0 013.6 3.76c.8-.8 2.02-1.22 3.43-1.22h9.67c1.41 0 2.58.43 3.43 1.27.8.85 1.27 2.03 1.27 3.4v9.69h-.1z'/></g></svg>
    )
}


const TwitterLogo = () => {
    return (
        <svg className='Logo-social' xmlns='http://www.w3.org/2000/svg' width='24' height='20'><path d='M23.5 2.6c-.8.4-1.8.6-2.7.8 1-.6 1.7-1.6 2.1-2.7-.9.6-2 1-3 1.2A4.9 4.9 0 0016.4.4a4.7 4.7 0 00-4.7 4.7c0 .4 0 .8.1 1.1C7.8 6 4.3 4.1 2 1.3a4.75 4.75 0 001.5 6.3c-.8 0-1.5-.2-2.2-.6v.1c0 2.3 1.6 4.2 3.8 4.6-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.3 3.3 4.4 3.3a9.43 9.43 0 01-5.9 2.1c-.4 0-.7-.1-1.1-.1 2.1 1.3 4.6 2.1 7.3 2.1 8.7 0 13.5-7.2 13.5-13.5 0-.2 0-.4-.1-.6 1-.7 1.8-1.5 2.4-2.5z'/></svg>
    )
}


const YoutubeLogo = () => {
    return (
        <svg className='Logo-social' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><path d='M180.3 53.4c-2-7.6-8-13.6-15.6-15.7C151 34 96 34 96 34s-55 0-68.8 3.7c-7.6 2-13.5 8-15.6 15.7C8 67.2 8 96 8 96s0 28.8 3.7 42.6c2 7.6 8 13.6 15.6 15.7C41 158 96 158 96 158s55 0 68.8-3.7c7.6-2 13.5-8 15.6-15.7C184 124.8 184 96 184 96s0-28.8-3.7-42.6zM78 122.2V69.8L124 96l-46 26.2z'/></svg>
    )
}


const TikTokLogo = () => {
    return ( 
        <svg className='Logo-social' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><path d='M88.794 0C91.142 20.15 102.41 32.164 122 33.442v22.664c-11.353 1.108-21.298-2.599-32.864-9.585v42.388c0 53.848-58.815 70.676-82.46 32.079C-8.52 96.15.786 52.57 49.528 50.823v23.9c-3.714.596-7.683 1.533-11.311 2.769-10.841 3.664-16.987 10.522-15.28 22.621 3.287 23.175 45.882 30.034 42.34-15.251V.042h23.517V0Z'/></svg>
    )
}