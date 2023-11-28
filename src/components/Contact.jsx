import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
     e.preventDefault()
     setLoading(true)
     emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      'service_ro9emsj',
      'template_9ruvx9k',
      {
        from_name: form.name,
        to_name: 'Jerry',
        to_email: 'jerrydeng.ca@gmail.com',
        message: form.message
      },
      'zAK2JCvQRqLshdDaB'
    ).then(() => {
      setLoading(false)
      alert('感谢您的留言，我们会及时与您联系！')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('网络开小差啦，请重试！')
    }
    )
  }
   

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">昵称</span>
            <input
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="请输入您的昵称..."
              className="bg-tertiary py-4 px-6
               placeholder:text-secondary text-white rounded-lg
               outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">邮箱</span>
            <input
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="请输入您的邮箱..."
              className="bg-tertiary py-4 px-6
               placeholder:text-secondary text-white rounded-lg
               outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">留言</span>
            <textarea
              row={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="请输入您的留言..."
              className="bg-tertiary py-4 px-6
               placeholder:text-secondary text-white rounded-lg
               outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? '发送中...' : '发送'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")