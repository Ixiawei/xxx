import { BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';

import ThemeButton from '@/components/buttons/ThemeButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const Icon = () => {
  return (
    <div className='flex gap-[24px] text-[22px]'>
      <UnstyledLink href='/projects' className='hidden mb:inline'>
        <FaRegLightbulb />
      </UnstyledLink>
      <a href='https://github.com/limuen' rel='noreferrer' target='_blank'>
        <BsGithub />
      </a>
      <ThemeButton />
    </div>
  );
};

export default Icon;
