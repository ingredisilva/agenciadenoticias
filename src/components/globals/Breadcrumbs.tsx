import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const items: BreadcrumbItem[] = [
    { label: 'Buscar Serviços', href: '/buscar-servicos' },
    { label: 'Meus Serviços', href: '/meus-servicos' },
    { label: 'Cadastrar Serviços', href: '/cadastrar-servico' },
  ];

  return (
    <div aria-label=''>
      <div className='layout flex gap-4 p-10'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`text-xs font-semibold text-primary-darkorange ${
              index === items.length - 1 ? 'active' : ''
            }`}
          >
            {item.href && item.href !== currentPath ? (
              <>
                <Link
                  href={item.href}
                  className='font-semibold text-primary-orange'
                >
                  {item.label}
                </Link>
                <BsChevronRight className='ml-1 inline-block align-middle' />
              </>
            ) : (
              <>{item.label}</>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
