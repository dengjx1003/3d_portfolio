import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constant'
import { fadeIn, textVariant } from '../utils/motion'
import { useEffect, useRef } from "react"

const ProjectCard = ({ index, name, description, tags, image, souce_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        tiltMaxAngleX = {15}
        tiltMaxAngleY = {15}
        scale = {1}
        speed = {450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(souce_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="gihub"
                className="w-1/2 h-1/2 object-contain" 
              />
            </div>
          </div>
        </div>

        <div className="mt-5 max-w-full">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant}>
        <p className={styles.sectionSubText}>Our Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17] max-w-3xl leading-[30px]"
        >
          如下成功案例充分说明Anchor公司拥有一支专业、高效的投资团队，具备深厚的市场分析和研究能力，能够为客户提供优秀的投资方案和管理服务，并能够有效控制投资风险，实现客户资产增值。
        </motion.p>
      </div>

      <div className="mt-20 flex gap-7 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")