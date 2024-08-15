import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'


export const ServicesList = [
    // {
    //     name: 'Plumbing',
    //     discription:<ul>
    //         <li className='font'>New Installations</li>
    //         <li className='font'>Leak detection</li>
    //         <li className='font'>Valves & Vacuum Breakers</li>
    //         <li className='font'>Burst & Leaking Pipes</li>
    //         <li className='font'>Geysers Repairs & Replacements</li>
    //         <li className='font'>Blocked Drains</li>
    //         <li className='font'>Certificate of Compliance</li>
    //     </ul>,
    //     image:'/Plumbing-Services-2.jpg',
    //     icon:<MdIcons.MdOutlinePlumbing className='ser-icon'/>
    // },
    {
        name: 'Solar Systems',
        discription:<ul>
            <li className='font'>Solar Installations</li>
            <li className='font'>Solar Maintenance</li>
            <li className='font'>UPS System</li>
            <li className='font'>Cooling System</li>
        </ul>,
        image:'/solar-panel-system.jpg',
        icon:<MdIcons.MdOutlineSolarPower className='ser-icon'/>
    },
    {
        name: 'Roof specialists',
        discription:  <ul>
        <li className='font'>Roof Maintenance</li>
        <li className='font'>Roof Repairs</li>
        <li className='font'>Roof Construction</li>
        <li className='font'>Automation (Gate & Garage Door Motors)</li>
       </ul>,
        image:'/Types-of-roof-installation-min.jpeg',
        icon:<MdIcons.MdRoofing className='ser-icon'/>
    },
    {
        name: 'Electrical',
        discription:<ul>
            <li className='font'>Lighting</li>
            <li className='font'>Electrical Certificate of Compliance</li>
            <li className='font'>Pool sub Distribution boards & earth leakage trip repairs. </li>
            <li className='font'>Lighting & Power Failures</li>
            <li className='font'>  Distributions Boards </li>
            <li className='font'> New Installations & Rewiring</li>
        </ul>,
        image:'/start-design-electrical-installation-1.png',
        icon:<GiIcons.GiElectric className='ser-icon'/>
    },
]