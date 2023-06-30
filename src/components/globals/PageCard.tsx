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
      <div className='layout w-screen '>
        <div className='flex flex-col'>
          {router.asPath === 'pasginanoticias' && <PaginaNoticia />}
        </div>
      </div>
    </motion.div>
  );
}

export default PageCard;
