import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'


export const ServicesList = [
    {
        name: 'Plumbing',
        discription:<ul>
            <li className='font'>New Installations</li>
            <li className='font'>Leak detection</li>
            <li className='font'>Valves & Vacuum Breakers</li>
            <li className='font'>Burst & Leaking Pipes</li>
            <li className='font'>Geysers Repairs & Replacements</li>
            <li className='font'>Blocked Drains</li>
            <li className='font'>Certificate of Compliance</li>
        </ul>,
        image:'/Plumbing-Services-2.jpg',
        icon:<MdIcons.MdOutlinePlumbing className='ser-icon'/>
    },
    {
        name: 'Paving',
        discription:<ul>
            <li className='font'>Ceiling repairs & replacement</li>
            <li className='font'>Painting, paving & general  home maintenance</li>
            <li className='font'> Installation of cupboards</li>
        </ul>,
        image:'/tiling2-large-scaled.jpg',
        icon:<AiIcons.AiOutlineBlock className='ser-icon'/>
    },
    {
        name: 'Security',
        discription:  <ul>
        <li className='font'>Fencing (Electrical & Perimeter)</li>
        <li className='font'>Accessories & Repairs</li>
        <li className='font'>Automation (Gate & Garage Door Motors)</li>
        <li className='font'> CCTV</li><li>Access Control</li>
        <li className='font'>Intrusion Detection (Alarm Systems)</li>
        </ul>,
        image:'/Untitled presentation.jpg',
        icon:<AiIcons.AiFillLock className='ser-icon'/>
    },
    {
        name: 'Electrical',
        discription:<ul>
            <li className='font'>Lighting</li>
            <li className='font'>Certificate of Compliance</li>
            <li className='font'> Pool sub Distribution boards & earth leakage trip repairs. </li>
            <li className='font'>Approved installer of Prepaid metering</li>
            <li className='font'>Lighting & Power Failures</li>
            <li className='font'>  Distributions Boards </li>
            <li className='font'> New Installations & Rewiring</li>
        </ul>,
        image:'/start-design-electrical-installation-1.png',
        icon:<GiIcons.GiElectric className='ser-icon'/>
    },
]