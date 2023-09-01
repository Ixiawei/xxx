import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

const HomePage = () => {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm(isLoaded && 'fade-in-start')}>
          <div className='mt-[120px]  text-left tablet:mt-[80px] mb:mt-[40px]'>
            <article className=''>
              <div className='mx-8 flex flex-col items-start mb:mx-0'>
                <p
                  className='mb-8 text-4xl text-[#555] dark:text-[#bbb] mb:text-3xl'
                  data-fade='1'
                >
                  liam
                </p>
                <p
                  className='text-lg text-[#555] dark:text-[#bbb]'
                  data-fade='1'
                >
                  Hey, I am AiYang, 5 years of experience FE, Currently working
                  at Hangzhou Technology Company
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  JS, Vue, React.
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] mb:my-[1em]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  The dream is to become a person with a certain influence,
                  sweat with blood, and create the future with positivity!
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  Likes to type code, likes to toss and turn, full of curiosity.
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  JavaScript is a magical language with confidence in the FE
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] mb:my-[1em]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Find me on{' '}
                  <CustomLink href='https://github.com/limuen'>
                    Github
                  </CustomLink>
                  .
                </p>
                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Love life and understand the FE.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
