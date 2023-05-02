import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useTranslation,  } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation('website');
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {t("get_started")}
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
    </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale })  => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        'website',
      ])),
    },
  }
}
