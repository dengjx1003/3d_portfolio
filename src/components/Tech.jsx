import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constant"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologie) => (
        <div className="w-28 h-28" key={technologie.name}>
          <BallCanvas icon={technologie.icon}></BallCanvas>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")