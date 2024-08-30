import {useRouter} from "next/router";
import {Button} from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import { useScopedI18n } from "@/locales";

export default function Custom404() {
  const router = useRouter()
  const t = useScopedI18n('404')

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white bg-404 bg-center bg-cover">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
        <p className="text-xl mb-4">{t('description')}</p>
        <Button
          className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 group bg-cyan-950 hover:bg-cyan-900 hover:opacity-30 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-cyan-900"
          startContent={<ArrowLeft fontSize={25}/>}
          onClick={() => router.push('/')}
        >
          {t('button')}
        </Button>
      </div>
    </div>
  )
}