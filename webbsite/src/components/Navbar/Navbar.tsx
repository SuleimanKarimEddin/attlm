import { navigation } from '../../../data.json'
import ClientNavBarScroll from './ClientNavBarScroll';
function Navbar() {
  console.log(navigation);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/icon.png" alt="" />
      </div>
      <div className="right_side">
        <ul>
          {
            navigation?.map((item: any, index: any) => {
              return <li key={index}><a href={item.href}>{item.label}</a></li>
            })
          }
        </ul>
      </div>
      <ClientNavBarScroll />
    </div>
  )
}

export default Navbar