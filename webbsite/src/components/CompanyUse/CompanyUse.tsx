
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel, FaNode, FaPhp, FaReact } from "react-icons/fa";
import {
  SiDeno,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { repeatArrayItems } from "../../utils/repeatArrayItems";


const techStack = [
  { icon: <FaReact size={100} />, name: "ReactJs" },
  { icon: <RiNextjsFill size={100} />, name: "NextJs" },
  { icon: <FaPhp size={100} />, name: "PHP" },
  { icon: <FaNode size={100} />, name: "NodeJs" },
  { icon: <SiNestjs size={100} />, name: "NestJs" },
  { icon: <FaLaravel size={100} />, name: "Laravel" },
  { icon: <SiDeno size={100} />, name: "Deno" },
  { icon: <SiPostgresql size={100} />, name: "Postgres" },
  { icon: <SiMysql size={100} />, name: "MySql" },
  { icon: <SiMongodb size={100} />, name: "MongoDb" },
  
];
const numberOfElement = 150
const repeatedTechStack = repeatArrayItems(techStack, numberOfElement);
  
export default function Stack() {
  return (
    <main className="Stack" >
  
      <div className="holder">
        <div className="scroll-container"  style={{animation:`scroll ${numberOfElement}s linear infinite`}} >
          {repeatedTechStack.map((item:any, index:any) => (
            <div className="items" key={index}>
              {item.icon}
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}