import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Nascetur aenean massa auctor tincidunt. Iaculis potenti ametegestas ultrices ",
    image: image1,
  },
  {
    name: "Training Classes",
    image: image2,
  },
  {
    name: "Fitness Classes",
    description:
      "Nascetur aenean massa auctor tincidunt. Iaculis potenti ametegestas ultrices ",
    image: image3,
  },
  {
    name: "Adventour Classes",
    image: image4,
  },
  {
    name: "Ab Core Classes",
    description:
      "Nascetur aenean massa auctor tincidunt. Iaculis potenti ametegestas ultrices ",
    image: image5,
  },
  {
    name: "Yoga Classes",
    description:
      "Nascetur aenean massa auctor tincidunt. Iaculis potenti ametegestas ultrices ",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:e-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec.
            </p>
          </div>
        </motion.div>
        <div
          className="mt-10 h-[353px] w-full overflow-x-auto
    overflow-y-hidden"
        >
          <ul className=" w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
