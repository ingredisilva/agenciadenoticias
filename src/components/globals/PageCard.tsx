import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

function PageCard() {
  const router = useRouter();

  return (
    <motion.div
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <div className='layout w-full  sm:w-full md:min-w-[300px]'>
        <div className='flex flex-col'>{/* <h3>PageName!</h3> */}teste</div>
      </div>
    </motion.div>
  );
}

export default PageCard;
