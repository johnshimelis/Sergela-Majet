import React from 'react'
import 'antd/dist/antd.css';
export default function LastSideNav() {
  
  return (
    <div className='last_side_nav'>
      <ul>
        <li className='sub'><i class="fa-solid fa-bars"></i><a href="#">ምድቦች</a></li>
        <li><i class="fa-solid fa-burger"></i><a href="#" >የታሸጉ ምግቦች</a></li>
        <li><i class="fa-solid fa-wheat-awn-circle-exclamation"></i><a href="#">እህልና ጥራጥሬ</a></li>
        <li><i class="fa-solid fa-wine-glass"></i><a href="#">መጠጦች</a></li>
        <li><i class="fa-solid fa-pump-medical"></i><a href="#">የንጽህና መጠበቂያ</a></li>
        <li><i class="fa-solid fa-pen"></i><a href="#">የጽሕፈት መሳሪያዎች</a></li>
        <li><i class="fa-solid fa-shirt"></i><a href="#">ልብስ አና ጫማ</a></li>
        <li><i class="fa-solid fa-power-off"></i><a href="#">ኤሌክትሮኒክስ</a></li>
        <li><i class="fa-solid fa-soap"></i><a href="#">የውበት መጠበቂያዎች</a></li>
        <li><i class="fa-solid fa-briefcase"></i><a href="#">ቦርሳዎች</a></li>
        <li><i class="fa-solid fa-gem"></i><a href="#">ጌጣጌጦች</a></li>

      </ul>
    </div>
  )
}