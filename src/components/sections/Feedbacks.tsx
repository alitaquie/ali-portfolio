import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  type = "testimonial",
}) => {
  const isAward = type === "award";

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={`${
        isAward
          ? "bg-yellow-900/80 border-yellow-500"   // e.g. golden accent
          : "bg-gradient-to-br from-[#0a192f]/90 to-[#0a192f]/70 border-[#2f80ed]/10"
      } backdrop-blur-lg xs:w-[320px] w-full rounded-3xl p-10 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <p className={`text-[48px] font-black ${isAward ? "text-yellow-400" : "text-[#2f80ed]"}`}>
        {isAward ? "🏆" : "“"}
      </p>

      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            {/* Remove the @ for awards */}
            <p className="text-[16px] font-medium text-white">
              {isAward ? name : <><span className="blue-text-gradient">@</span> {name}</>}
            </p>
            <p className={`${isAward ? "text-yellow-300" : "text-[#2f80ed]"} mt-1 text-[12px]`}>
              {designation}
              {!isAward && company && <> of {company}</>}
            </p>
          </div>

          <img
            src={image}
            alt={isAward ? `award-${name}` : `feedback_by-${name}`}
            className={`h-10 w-10 rounded-full object-cover border-2 ${
              isAward ? "border-yellow-500/20 hover:border-yellow-500/40" : "border-[#2f80ed]/20 hover:border-[#2f80ed]/40"
            } transition-all duration-300`}
          />
        </div>
      </div>
    </motion.div>
  );
};


const Feedbacks = () => {
  return (
    <div className="bg-[#020a17] mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-[#050f1f] min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
